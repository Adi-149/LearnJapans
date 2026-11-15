/**
 * VocabularyManager.js
 * Komponen OOP untuk mengelola daftar kosakata & hafalan:
 * - Kategori: Kosakata Harian, Benda & Barang, Buah-buahan, Lirik Lagu
 * - Filter kategori & pencarian instan
 * - Pemisahan warna kanji (merah), hiragana (hijau), katakana (oranye), romaji (biru)
 * - Teks interaktif: klik kanji dalam kosakata untuk membuka popup cara baca & arti
 * - Pengucapan audio dengan SpeechService
 */
class VocabularyManager {
    /**
     * @param {Array} vocabularyList - Data kosakata terstruktur
     * @param {SpeechService} speechService - Service Web Speech API
     * @param {ModalManager} [modalManager] - Manager modal popup (opsional)
     * @param {Object} [kanjiData] - Data kamus kanji (opsional)
     * @param {Object} [kanaData] - Data kamus kana (opsional)
     */
    constructor(vocabularyList, speechService, modalManager = null, kanjiData = {}, kanaData = {}) {
        this.vocabularyList = vocabularyList || [];
        this.speechService = speechService;
        this.modalManager = modalManager;
        this.kanjiData = kanjiData || {};
        this.kanaData = kanaData || {};

        this.currentCategory = "all";
        this.searchQuery = "";

        // Referensi elemen DOM
        this.container = document.getElementById("kanjiContainer");
        this.searchInput = document.getElementById("kanjiSearch");
        this.categoryBar = document.querySelector(".vocab-category-bar");

        this.bindEvents();
    }

    /**
     * Render daftar kartu kosakata sesuai kategori aktif & kata kunci pencarian
     */
    render() {
        if (!this.container) return;

        this.container.innerHTML = "";
        const query = this.searchQuery.trim().toLowerCase();

        // Filter berdasarkan kategori dan query pencarian
        const filtered = this.vocabularyList.filter((item) => {
            const matchesCategory = this.currentCategory === "all" || item.category === this.currentCategory;
            if (!matchesCategory) return false;

            if (!query) return true;
            return (
                item.word.toLowerCase().includes(query) ||
                item.kana.toLowerCase().includes(query) ||
                item.romaji.toLowerCase().includes(query) ||
                item.meaning.toLowerCase().includes(query)
            );
        });

        // Tampilan jika hasil pencarian kosong
        if (filtered.length === 0) {
            this.container.innerHTML = `
                <div class="empty-notice" style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
                    <p style="font-size: 20px; margin-bottom: 8px;">🔍 Tidak ada kosakata yang cocok</p>
                    <p style="font-size: 14px;">Coba gunakan kata kunci lain atau pilih tab kategori yang berbeda.</p>
                </div>
            `;
            return;
        }

        // Buat kartu untuk setiap kosakata
        filtered.forEach((item) => {
            const card = document.createElement("div");
            card.className = "word-card";
            card.dataset.category = item.category || "daily";

            const coloredKana = this.formatParts(item.kanaParts, item.kana);
            const coloredRomaji = this.formatParts(item.romajiParts, item.romaji);

            card.innerHTML = `
                <div class="word-card-top">
                    <span class="vocab-badge badge-${item.category}">${item.categoryLabel || "Hafalan"}</span>
                    <button class="btn-card-audio" title="Dengarkan pengucapan kata">🔊</button>
                </div>
                <h3 class="word-title"></h3>
                <p class="word-kana">${coloredKana}</p>
                <p class="word-romaji">${coloredRomaji}</p>
                <p class="word-meaning">${item.meaning}</p>
                <div class="word-card-actions">
                    <button class="btn-listen-word">🔊 Dengarkan Suara</button>
                </div>
            `;

            // Pasang karakter interaktif pada judul kata
            const titleEl = card.querySelector(".word-title");
            titleEl.appendChild(this.buildInteractiveWord(item.word));

            // Event listener tombol dengarkan suara
            const audioBtns = card.querySelectorAll(".btn-card-audio, .btn-listen-word");
            audioBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    if (this.speechService) {
                        this.speechService.speak(item.word);
                    }
                });
            });

            this.container.appendChild(card);
        });
    }

    /**
     * Membangun node kata interaktif: Setiap karakter kanji dan kana dapat diklik
     * untuk membuka modal popup detail cara baca.
     * @param {string} text
     * @returns {DocumentFragment}
     */
    buildInteractiveWord(text) {
        const fragment = document.createDocumentFragment();
        const chars = Array.from(text);

        chars.forEach((char) => {
            // Kanji
            if (/[\u4e00-\u9faf]/.test(char)) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "vocab-char-btn char-kanji";
                btn.textContent = char;
                const reading = this.kanjiData[char];
                btn.title = reading
                    ? `Kanji: ${char} (${reading.kana} - ${reading.romaji})\nKlik untuk melihat info detail`
                    : `Kanji: ${char}\nKlik untuk info`;

                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.handleCharClick(char, "kanji");
                });
                fragment.appendChild(btn);
            }
            // Hiragana
            else if (/[\u3040-\u309f]/.test(char)) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "vocab-char-btn char-hiragana";
                btn.textContent = char;
                const kana = this.kanaData[char];
                btn.title = kana
                    ? `Hiragana: ${char} (${kana.romaji})\nKlik untuk info`
                    : `Hiragana: ${char}`;

                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.handleCharClick(char, "hiragana");
                });
                fragment.appendChild(btn);
            }
            // Katakana
            else if (/[\u30a0-\u30ff]/.test(char)) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "vocab-char-btn char-katakana";
                btn.textContent = char;
                const kana = this.kanaData[char];
                btn.title = kana
                    ? `Katakana: ${char} (${kana.romaji})\nKlik untuk info`
                    : `Katakana: ${char}`;

                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.handleCharClick(char, "katakana");
                });
                fragment.appendChild(btn);
            }
            // Tanda baca / simbol lain
            else {
                const span = document.createElement("span");
                span.textContent = char;
                fragment.appendChild(span);
            }
        });

        return fragment;
    }

    /**
     * Handler klik karakter kanji/kana dalam kartu kosakata
     * @param {string} char
     * @param {string} type ('kanji' | 'hiragana' | 'katakana')
     */
    handleCharClick(char, type) {
        if (!this.modalManager) {
            if (this.speechService) this.speechService.speak(char);
            return;
        }

        if (type === "kanji" && this.kanjiData[char]) {
            const data = this.kanjiData[char];
            this.modalManager.show({
                char: char,
                category: "Karakter Kanji",
                kana: data.kana,
                romaji: data.romaji,
                word: data.word,
                meaning: data.meaning
            });
            return;
        }

        if (this.kanaData && this.kanaData[char]) {
            const data = this.kanaData[char];
            this.modalManager.show({
                char: char,
                category: data.type || "Karakter Kana",
                kana: `${data.char} ⇄ ${data.counterpart}`,
                romaji: data.romaji,
                word: `${data.char} (${data.romaji})`,
                meaning: data.meaning
            });
            return;
        }

        // Fallback jika belum terpetakan
        this.modalManager.show({
            char: char,
            category: type === "kanji" ? "Karakter Kanji" : "Karakter Kana",
            kana: char,
            romaji: "-",
            word: char,
            meaning: "Karakter bahasa Jepang"
        });
    }

    /**
     * Memformat suku kata bacaan (Kana / Romaji) sesuai pemetaan warna karakter aslinya:
     * - Kanji = Merah (char-kanji)
     * - Hiragana = Hijau (char-hiragana)
     * - Katakana = Oranye (char-katakana)
     * @param {Array} parts
     * @param {string} fallback
     */
    formatParts(parts, fallback) {
        if (!parts || !parts.length) return fallback;
        return parts.map((p) => {
            let cls = "char-kanji";
            if (p.type === "hiragana") cls = "char-hiragana";
            else if (p.type === "katakana") cls = "char-katakana";
            else if (p.type === "neutral") cls = "text-neutral";
            return `<span class="${cls}">${p.text}</span>`;
        }).join("");
    }

    /**
     * Memasang event listeners untuk filter kategori dan input pencarian
     */
    bindEvents() {
        // Event input pencarian
        if (this.searchInput) {
            this.searchInput.addEventListener("input", (e) => {
                this.searchQuery = e.target.value;
                this.render();
            });
        }

        // Event klik tombol tab kategori hafalan
        const tabs = document.querySelectorAll(".vocab-tab");
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                tabs.forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");
                this.currentCategory = tab.dataset.category || "all";
                this.render();
            });
        });
    }
}
