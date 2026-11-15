/**
 * KanaManager.js
 * Komponen OOP untuk mengelola tampilan Hiragana dan Katakana dengan tombol toggle (ganti mode),
 * pencarian real-time, dan pengucapan audio.
 */
class KanaManager {
    /**
     * @param {Array} kanaData - Data pasangan [hiragana, romaji, katakana]
     * @param {SpeechService} speechService - Service TTS
     */
    constructor(kanaData, speechService) {
        this.kanaData = kanaData;
        this.speechService = speechService;

        // Mode default adalah 'hiragana', bisa berganti ke 'katakana'
        this.currentMode = "hiragana";
        this.searchQuery = "";

        // Referensi elemen DOM
        this.gridElement = document.getElementById("kanaGrid");
        this.toggleBtn = document.getElementById("kanaToggleBtn");
        this.titleLabel = document.getElementById("kanaModeLabel");
        this.searchInput = document.getElementById("kanaSearch");

        this.bindEvents();
    }

    /**
     * Render daftar huruf sesuai mode aktif (Hiragana / Katakana) dan filter pencarian
     */
    render() {
        if (!this.gridElement) return;

        this.gridElement.innerHTML = "";

        const query = this.searchQuery.trim().toLowerCase();

        // Filter data berdasarkan query pencarian
        const filtered = this.kanaData.filter(([hira, romaji, kata]) => {
            if (!query) return true;
            return (
                hira.toLowerCase().includes(query) ||
                kata.toLowerCase().includes(query) ||
                romaji.toLowerCase().includes(query)
            );
        });

        if (filtered.length === 0) {
            this.gridElement.innerHTML = `
                <div class="empty-notice" style="grid-column: 1 / -1; text-align: center; padding: 25px; color: #888;">
                    Tidak ada huruf yang cocok dengan pencarian "<strong>${query}</strong>".
                </div>
            `;
            return;
        }

        filtered.forEach(([hira, romaji, kata]) => {
            const card = document.createElement("div");
            card.className = "kana-item";
            card.title = `Klik untuk mendengarkan pengucapan`;

            // Tentukan karakter utama dan karakter pendamping berdasarkan mode aktif
            const isHiragana = this.currentMode === "hiragana";
            const mainChar = isHiragana ? hira : kata;
            const mainClass = isHiragana ? "char-hiragana" : "char-katakana";
            const counterpartClass = isHiragana ? "badge-katakana" : "badge-hiragana";
            const counterpartLabel = isHiragana ? `Katakana: ${kata}` : `Hiragana: ${hira}`;

            card.innerHTML = `
                <strong class="kana-char ${mainClass}">${mainChar}</strong>
                <span class="kana-romaji text-romaji">${romaji}</span>
                <small class="kana-counterpart ${counterpartClass}">${counterpartLabel}</small>
            `;

            // Dengarkan pengucapan saat kartu diklik
            card.addEventListener("click", () => {
                this.playKana(mainChar);
                card.classList.add("kana-bounce");
                setTimeout(() => card.classList.remove("kana-bounce"), 300);
            });

            this.gridElement.appendChild(card);
        });

        // Perbarui teks tombol dan label judul
        this.updateUIControls();
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
    }

    /**
     * Memutar pengucapan karakter Kana
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

        if (this.searchInput) {
            this.searchInput.addEventListener("input", (e) => {
                this.searchQuery = e.target.value;
                this.render();
            });
        }
    }
}

