/**
 * KanaManager.js
 * Komponen OOP untuk mengelola tampilan Hiragana dan Katakana dengan susunan terstruktur:
 * - Urutan Gojūon (a, i, u, e, o -> ka, ki, ku, ke, ko, dst.)
 * - Tampilan grid 5 kotak per baris
 * - Baris 'ya yu yo' memiliki 2 kotak kosong
 * - Baris 'wa wo' memiliki kotak kosong
 * - Di akhir baris ada 'n' sendirian dalam grid 5 kotak
 * - Lanjut ke Dakuon & Handakuon (5 kotak per baris)
 * - Lanjut ke Huruf Gabungan (Yōon)
 * - Lanjut ke Panduan Lengkap Huruf Kecil & Cara Bacanya (Sokuon, Ya/Yu/Yo kecil, Vokal kecil, Tanda pemanjang)
 * - Tombol toggle Hiragana <-> Katakana
 * - Pencarian real-time & audio Text-To-Speech interaktif.
 */
class KanaManager {
    /**
     * @param {Array} kanaData - Data kana dasar
     * @param {SpeechService} speechService - Service TTS
     * @param {ModalManager} [modalManager] - Service Modal Detail (opsional)
     */
    constructor(kanaData, speechService, modalManager = null) {
        this.kanaData = kanaData || [];
        this.speechService = speechService;
        this.modalManager = modalManager;

        // Mode aktif: 'hiragana' atau 'katakana'
        this.currentMode = "hiragana";
        this.searchQuery = "";

        // Ambil data terstruktur dari window (data.js)
        this.gojuonRows = window.gojuonRows || [];
        this.dakuonRows = window.dakuonRows || [];
        this.yoonRows = window.yoonRows || [];
        this.smallKanaGuide = window.smallKanaGuide || [];

        // Referensi elemen DOM
        this.gridElement = document.getElementById("kanaGrid");
        this.toggleBtn = document.getElementById("kanaToggleBtn");
        this.floatingToggleBtn = document.getElementById("floatingKanaToggleBtn");
        this.floatingKanaChar = document.getElementById("floatingKanaChar");
        this.titleLabel = document.getElementById("kanaModeLabel");
        this.searchInput = document.getElementById("kanaSearch");

        this.bindEvents();
    }

    /**
     * Render utama: jika ada pencarian tampilkan hasil filter, jika kosong tampilkan tabel terstruktur
     */
    render() {
        if (!this.gridElement) return;

        this.gridElement.innerHTML = "";
        const query = this.searchQuery.trim().toLowerCase();

        if (query) {
            this.renderSearchResults(query);
        } else {
            this.renderStructuredLayout();
        }

        // Perbarui label tombol toggle dan heading
        this.updateUIControls();
    }

    /**
     * Render tampilan terstruktur lengkap:
     * 1. Navigasi Cepat (Pill buttons)
     * 2. Huruf Dasar (Gojūon - 5 kotak per baris, ya yu yo 2 kotak kosong, n sendirian)
     * 3. Huruf Dakuon & Handakuon (5 kotak per baris)
     * 4. Huruf Gabungan / Kombinasi (Yōon)
     * 5. Panduan Lengkap Huruf Kecil & Cara Bacanya
     */
    renderStructuredLayout() {
        const isHiragana = this.currentMode === "hiragana";
        const modeTitle = isHiragana ? "Hiragana" : "Katakana";

        // 1. Menu Navigasi Lompat Cepat Antar Seksi
        const navContainer = document.createElement("div");
        navContainer.className = "kana-section-nav";
        navContainer.innerHTML = `
            <button type="button" class="kana-section-pill" data-target="sec-gojuon">🔤 Huruf Dasar (5 Kolom)</button>
            <button type="button" class="kana-section-pill" data-target="sec-dakuon">⚡ Dakuon & Handakuon</button>
            <button type="button" class="kana-section-pill" data-target="sec-yoon">🔄 Huruf Gabungan (Yōon)</button>
            <button type="button" class="kana-section-pill" data-target="sec-small-kana">📖 Huruf Kecil & Cara Baca</button>
        `;
        navContainer.querySelectorAll(".kana-section-pill").forEach((btn) => {
            btn.addEventListener("click", () => {
                const targetId = btn.getAttribute("data-target");
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });
        this.gridElement.appendChild(navContainer);

        // 2. SEKSI HURUF DASAR (GOJŪON) - Tepat 5 Kotak Per Baris
        const gojuonSection = document.createElement("section");
        gojuonSection.className = "kana-section";
        gojuonSection.id = "sec-gojuon";
        gojuonSection.innerHTML = `
            <div class="kana-section-header">
                <h3>🔤 Huruf Dasar ${modeTitle} (Gojūon - 五十音)</h3>
                <span class="kana-section-badge badge-${isHiragana ? "hiragana" : "katakana"}">Susunan 5 Kotak (a - i - u - e - o)</span>
            </div>
            <p class="kana-section-desc">
                Tabel 5 kolom vokal dasar bahasa Jepang (a, i, u, e, o). Baris <strong>ya, yu, yo</strong> memiliki 2 kotak kosong (i & e), dan baris penutup dengan huruf <strong>n</strong> di posisi kotak tengah agar simetris dan rapi. Klik kartu huruf untuk mendengarkan pengucapan audio.
            </p>
            <div class="kana-col-headers-5">
                <div class="kana-col-header-item">a</div>
                <div class="kana-col-header-item">i</div>
                <div class="kana-col-header-item">u</div>
                <div class="kana-col-header-item">e</div>
                <div class="kana-col-header-item">o</div>
            </div>
            <div class="kana-grid-5" id="gojuonGrid"></div>
        `;

        const gojuonGrid = gojuonSection.querySelector("#gojuonGrid");
        this.gojuonRows.forEach((row) => {
            row.forEach((item) => {
                const card = this.createKanaCard(item);
                gojuonGrid.appendChild(card);
            });
        });
        this.gridElement.appendChild(gojuonSection);

        // 3. SEKSI DAKUON & HANDAKUON - Tepat 5 Kotak Per Baris
        const dakuonSection = document.createElement("section");
        dakuonSection.className = "kana-section";
        dakuonSection.id = "sec-dakuon";
        dakuonSection.innerHTML = `
            <div class="kana-section-header">
                <h3>⚡ Dakuon & Handakuon ${modeTitle} (Teng-teng & Maru)</h3>
                <span class="kana-section-badge badge-${isHiragana ? "hiragana" : "katakana"}">5 Kotak Per Baris</span>
            </div>
            <p class="kana-section-desc">
                Huruf turunan bersuara tebal menggunakan tanda kutip dua (゛ - Dakuon: g, z, d, b) dan tanda lingkaran (゜ - Handakuon: p).
            </p>
            <div class="kana-col-headers-5">
                <div class="kana-col-header-item">a</div>
                <div class="kana-col-header-item">i</div>
                <div class="kana-col-header-item">u</div>
                <div class="kana-col-header-item">e</div>
                <div class="kana-col-header-item">o</div>
            </div>
            <div class="kana-grid-5" id="dakuonGrid"></div>
        `;

        const dakuonGrid = dakuonSection.querySelector("#dakuonGrid");
        this.dakuonRows.forEach((row) => {
            row.forEach((item) => {
                const card = this.createKanaCard(item);
                dakuonGrid.appendChild(card);
            });
        });
        this.gridElement.appendChild(dakuonSection);

        // 4. SEKSI HURUF GABUNGAN (YŌON - 拗音)
        const yoonSection = document.createElement("section");
        yoonSection.className = "kana-section";
        yoonSection.id = "sec-yoon";
        yoonSection.innerHTML = `
            <div class="kana-section-header">
                <h3>🔄 Huruf Gabungan (Yōon - 拗音)</h3>
                <span class="kana-section-badge badge-${isHiragana ? "hiragana" : "katakana"}">Kombinasi Baris 'i' + ya, yu, yo</span>
            </div>
            <p class="kana-section-desc">
                Gabungan konsonan baris 'i' dengan huruf kecil <strong>ゃ・ゅ・ょ (ャ・ュ・ョ)</strong> membentuk 1 suku kata diftong terpadu dalam 1 ketukan suara.
            </p>
            <div class="kana-col-headers-3">
                <div class="kana-col-header-item">-ya (${isHiragana ? "ゃ" : "ャ"})</div>
                <div class="kana-col-header-item">-yu (${isHiragana ? "ゅ" : "ュ"})</div>
                <div class="kana-col-header-item">-yo (${isHiragana ? "ょ" : "ョ"})</div>
            </div>
            <div class="kana-grid-3" id="yoonGrid"></div>
        `;

        const yoonGrid = yoonSection.querySelector("#yoonGrid");
        this.yoonRows.forEach((row) => {
            row.forEach((item) => {
                const card = this.createKanaCard(item);
                yoonGrid.appendChild(card);
            });
        });
        this.gridElement.appendChild(yoonSection);

        // 5. SEKSI PANDUAN LENGKAP HURUF KECIL & CARA BACANYA
        const smallSection = document.createElement("section");
        smallSection.className = "kana-section";
        smallSection.id = "sec-small-kana";
        smallSection.innerHTML = `
            <div class="kana-section-header">
                <h3>📖 Panduan Lengkap Huruf Kecil & Cara Bacanya</h3>
                <span class="kana-section-badge badge-reading">Hiragana & Katakana</span>
            </div>
            <p class="kana-section-desc">
                Penjelasan detail mengenai fungsi, cara membaca, dan aturan pelafalan huruf kecil (促音 - Sokuon, 拗音 - Yōon, 特殊音 - Tokushuon vokal kecil), serta tanda khusus bahasa Jepang.
            </p>
            <div class="small-kana-guide-container" id="smallKanaGuideContainer"></div>
        `;

        const guideContainer = smallSection.querySelector("#smallKanaGuideContainer");
        this.renderSmallKanaGuideCards(guideContainer);
        this.gridElement.appendChild(smallSection);
    }

    /**
     * Membuat satu elemen kartu Kana atau kotak kosong
     * @param {Array|null} item - [hira, romaji, kata] atau null untuk kotak kosong
     * @returns {HTMLElement}
     */
    createKanaCard(item) {
        if (!item) {
            const emptyCard = document.createElement("div");
            emptyCard.className = "kana-item kana-item-empty";
            emptyCard.title = "Kotak kosong (Tidak ada bunyi huruf dalam susunan kolom ini)";
            emptyCard.innerHTML = `<span class="empty-dash">ー</span>`;
            return emptyCard;
        }

        const [hira, romaji, kata] = item;
        const isHiragana = this.currentMode === "hiragana";
        const mainChar = isHiragana ? hira : kata;
        const mainClass = isHiragana ? "char-hiragana" : "char-katakana";
        const counterpartClass = isHiragana ? "badge-katakana" : "badge-hiragana";
        const counterpartLabel = isHiragana ? `Katakana: ${kata}` : `Hiragana: ${hira}`;

        const card = document.createElement("div");
        card.className = "kana-item";
        card.title = `Klik untuk mendengarkan pengucapan ${mainChar} (${romaji})`;

        card.innerHTML = `
            <strong class="kana-char ${mainClass}">${mainChar}</strong>
            <span class="kana-romaji text-romaji">${romaji}</span>
            <small class="kana-counterpart ${counterpartClass}">${counterpartLabel}</small>
        `;

        card.addEventListener("click", () => {
            this.playKana(mainChar);
            card.classList.add("kana-bounce");
            setTimeout(() => card.classList.remove("kana-bounce"), 300);
        });

        return card;
    }

    /**
     * Merender kartu-kartu edukatif panduan huruf kecil & cara bacanya
     * @param {HTMLElement} container
     */
    renderSmallKanaGuideCards(container) {
        const isHiragana = this.currentMode === "hiragana";

        this.smallKanaGuide.forEach((item) => {
            const card = document.createElement("div");
            card.className = "small-kana-card";

            const displayChar = isHiragana ? item.hira : item.kata;
            const counterpartChar = isHiragana ? item.kata : item.hira;
            const counterpartType = isHiragana ? "Katakana" : "Hiragana";

            // Render daftar aturan (rules)
            const rulesHtml = (item.rules || [])
                .map((rule) => `<li>${rule}</li>`)
                .join("");

            // Render contoh-contoh kata interaktif
            const examplesHtml = (item.examples || [])
                .map((ex) => `
                    <div class="small-kana-example-item">
                        <div class="example-text-block">
                            <span class="example-word-jp">${ex.jp}</span>
                            <span class="example-word-romaji text-romaji">${ex.romaji}</span>
                            <span class="example-word-meaning">${ex.meaning}</span>
                        </div>
                        <button type="button" class="btn-speak-example" title="Dengarkan pengucapan '${ex.jp}'" data-speech="${ex.jp}">
                            🔊
                        </button>
                    </div>
                `)
                .join("");

            card.innerHTML = `
                <div class="small-kana-card-header">
                    <button type="button" class="small-kana-badge-char" title="Klik untuk dengarkan suara" data-speech="${displayChar}">
                        ${displayChar}
                    </button>
                    <div>
                        <h4 class="small-kana-title">${item.category}</h4>
                        <div class="small-kana-subtitle">
                            <span>Romaji / Bunyi: <strong>${item.romaji}</strong></span> &bull; 
                            <span class="badge-counterpart">${counterpartType}: <strong>${counterpartChar}</strong></span>
                        </div>
                    </div>
                </div>

                <div class="small-kana-explanation">
                    <strong>💡 Aturan & Cara Baca:</strong><br>
                    ${item.description}
                </div>

                <ul class="small-kana-rules">
                    ${rulesHtml}
                </ul>

                <div class="small-kana-examples-title">
                    <span>📌 Contoh Kata Nyata & Pelafalan:</span>
                </div>
                <div class="small-kana-examples-grid">
                    ${examplesHtml}
                </div>
            `;

            // Pasang event listener pengucapan audio pada tombol di dalam kartu panduan
            card.querySelectorAll("[data-speech]").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const text = btn.getAttribute("data-speech");
                    if (text) {
                        // Bersihkan kurung jika ada (misal: "お茶（おちゃ）" -> "お茶")
                        const cleanText = text.replace(/（.*?）/g, "").replace(/\(.*?\)/g, "").trim();
                        this.playKana(cleanText || text);
                        btn.classList.add("kana-bounce");
                        setTimeout(() => btn.classList.remove("kana-bounce"), 300);
                    }
                });
            });

            container.appendChild(card);
        });
    }

    /**
     * Render hasil pencarian huruf kana atau romaji secara dinamis
     * @param {string} query
     */
    renderSearchResults(query) {
        // Ambil semua entri huruf dari berbagai seksi
        const allItems = [];
        const seen = new Set();

        const addItem = (item) => {
            if (!item) return;
            const key = item[0] + "_" + item[1];
            if (!seen.has(key)) {
                seen.add(key);
                allItems.push(item);
            }
        };

        // Kumpulkan data Gojūon
        this.gojuonRows.forEach((row) => row.forEach(addItem));
        // Kumpulkan data Dakuon
        this.dakuonRows.forEach((row) => row.forEach(addItem));
        // Kumpulkan data Yōon
        this.yoonRows.forEach((row) => row.forEach(addItem));
        // Kumpulkan data KanaData bawaan
        this.kanaData.forEach(([hira, romaji, kata]) => addItem([hira, romaji, kata]));

        const filtered = allItems.filter(([hira, romaji, kata]) => {
            return (
                hira.toLowerCase().includes(query) ||
                kata.toLowerCase().includes(query) ||
                romaji.toLowerCase().includes(query)
            );
        });

        // Header status pencarian
        const searchHeader = document.createElement("div");
        searchHeader.className = "kana-search-header-bar";
        searchHeader.innerHTML = `
            <div class="search-status-text">
                🔍 Hasil pencarian untuk: "<strong>${query}</strong>" (${filtered.length} huruf ditemukan)
            </div>
            <button type="button" class="btn-clear-search" id="btnClearKanaSearch">❌ Bersihkan Pencarian</button>
        `;
        searchHeader.querySelector("#btnClearKanaSearch").addEventListener("click", () => {
            if (this.searchInput) {
                this.searchInput.value = "";
            }
            this.searchQuery = "";
            this.render();
        });
        this.gridElement.appendChild(searchHeader);

        if (filtered.length === 0) {
            const emptyNotice = document.createElement("div");
            emptyNotice.className = "empty-notice";
            emptyNotice.style.cssText = "text-align: center; padding: 40px 20px; color: #888; background: white; border-radius: 12px; margin-top: 15px;";
            emptyNotice.innerHTML = `
                <p style="font-size: 18px; margin-bottom: 8px;">Tidak ada huruf yang cocok dengan pencarian "<strong>${query}</strong>".</p>
                <small>Cobalah mencari dengan karakter Hiragana (contoh: 'き'), Katakana (contoh: 'ア'), atau Romaji (contoh: 'ka', 'kya').</small>
            `;
            this.gridElement.appendChild(emptyNotice);
            return;
        }

        const resultsGrid = document.createElement("div");
        resultsGrid.className = "kana-grid";
        filtered.forEach((item) => {
            resultsGrid.appendChild(this.createKanaCard(item));
        });
        this.gridElement.appendChild(resultsGrid);
    }

    /**
     * Mengganti mode antara Hiragana dan Katakana
     */
    toggleMode() {
        this.currentMode = this.currentMode === "hiragana" ? "katakana" : "hiragana";
        this.render();
    }

    /**
     * Memperbarui label tombol toggle dan heading
     */
    updateUIControls() {
        const isHiragana = this.currentMode === "hiragana";

        if (this.titleLabel) {
            this.titleLabel.textContent = isHiragana ? "Hiragana" : "Katakana";
            this.titleLabel.className = `kana-mode-indicator ${isHiragana ? "badge-hiragana" : "badge-katakana"}`;
        }

        if (this.toggleBtn) {
            if (isHiragana) {
                this.toggleBtn.innerHTML = `🔄 Ganti ke Katakana`;
                this.toggleBtn.title = "Klik untuk menampilkan huruf Katakana";
            } else {
                this.toggleBtn.innerHTML = `🔄 Ganti ke Hiragana`;
                this.toggleBtn.title = "Klik untuk menampilkan huruf Hiragana";
            }
        }

        // Perbarui tombol mengambang ganti mode Kana (di bawah roket)
        if (this.floatingToggleBtn) {
            if (isHiragana) {
                this.floatingToggleBtn.title = "Ganti ke Katakana (ア)";
                this.floatingToggleBtn.setAttribute("aria-label", "Ganti ke Katakana");
                this.floatingToggleBtn.classList.remove("mode-katakana");
                this.floatingToggleBtn.classList.add("mode-hiragana");
                if (this.floatingKanaChar) this.floatingKanaChar.textContent = "ア";
            } else {
                this.floatingToggleBtn.title = "Ganti ke Hiragana (あ)";
                this.floatingToggleBtn.setAttribute("aria-label", "Ganti ke Hiragana");
                this.floatingToggleBtn.classList.remove("mode-hiragana");
                this.floatingToggleBtn.classList.add("mode-katakana");
                if (this.floatingKanaChar) this.floatingKanaChar.textContent = "あ";
            }
        }
    }

    /**
     * Memutar pengucapan karakter Kana melalui SpeechService
     * @param {string} char
     */
    playKana(char) {
        if (this.speechService) {
            this.speechService.speak(char);
        }
    }

    /**
     * Event listeners untuk KanaManager
     */
    bindEvents() {
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener("click", () => this.toggleMode());
        }

        if (this.floatingToggleBtn) {
            this.floatingToggleBtn.addEventListener("click", () => {
                this.floatingToggleBtn.classList.add("switching");
                this.toggleMode();
                setTimeout(() => {
                    this.floatingToggleBtn.classList.remove("switching");
                }, 400);
            });
        }

        if (this.searchInput) {
            this.searchInput.addEventListener("input", (e) => {
                this.searchQuery = e.target.value;
                this.render();
            });
        }
    }
}
