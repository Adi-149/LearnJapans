/**
 * ModalManager.js
 * Komponen OOP untuk mengelola popup detail cara baca karakter Kanji / Kana / Kata.
 */
class ModalManager {
    /**
     * @param {SpeechService} speechService
     */
    constructor(speechService) {
        this.speechService = speechService;
        this.popupElement = document.getElementById("readingPopup");
        this.kanjiEl = document.getElementById("popupKanji");
        this.kanaEl = document.getElementById("popupKana");
        this.romajiEl = document.getElementById("popupRomaji");
        this.wordEl = document.getElementById("popupWord");
        this.meaningEl = document.getElementById("popupMeaning");
        this.categoryEl = document.getElementById("popupCategory");
        this.speakBtn = document.getElementById("popupSpeakBtn");

        this.currentSpokenText = "";
        this.bindEvents();
    }

    /**
     * Membuka popup dengan data detail karakter / kata
     * @param {Object} info
     */
    show(info) {
        if (!this.popupElement) return;

        this.kanjiEl.textContent = info.char || "-";
        this.kanaEl.textContent = info.kana || "-";
        this.romajiEl.textContent = info.romaji || "-";
        this.wordEl.innerHTML = this.formatWordWithReading(info.word || info.char || "-");
        this.meaningEl.textContent = info.meaning || "-";

        // Terapkan warna spesifik pada elemen popup
        this.kanjiEl.className = "";
        this.categoryEl.className = "popup-category-badge";

        if (info.category && info.category.includes("Hiragana")) {
            this.kanjiEl.classList.add("char-hiragana");
            this.categoryEl.classList.add("badge-hiragana");
            this.kanaEl.className = "char-hiragana";
            this.romajiEl.className = "text-romaji";
        } else if (info.category && info.category.includes("Katakana")) {
            this.kanjiEl.classList.add("char-katakana");
            this.categoryEl.classList.add("badge-katakana");
            this.kanaEl.className = "char-katakana";
            this.romajiEl.className = "text-romaji";
        } else {
            this.kanjiEl.classList.add("char-kanji");
            this.categoryEl.classList.add("badge-kanji");
            this.kanaEl.className = "char-kanji";
            this.romajiEl.className = "char-kanji";
        }

        if (this.categoryEl) {
            this.categoryEl.textContent = info.category || "Karakter";
        }

        // Teks yang akan diucapkan tombol audio
        this.currentSpokenText = info.word
            ? info.word.replace(/（.*?）/g, "").trim()
            : (info.kana || info.char);

        this.popupElement.classList.add("show");
    }

    /**
     * Menutup popup
     */
    close() {
        if (!this.popupElement) return;
        this.popupElement.classList.remove("show");
    }

    /**
     * Memutar suara untuk kata/karakter di popup saat ini
     */
    speak() {
        if (this.currentSpokenText && this.speechService) {
            this.speechService.speak(this.currentSpokenText);
        }
    }

    /**
     * Event listeners untuk modal
     */
    bindEvents() {
        if (!this.popupElement) return;

        // Klik tombol close
        const closeBtn = this.popupElement.querySelector(".close-popup");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => this.close());
        }

        // Klik area backdrop luar modal
        this.popupElement.addEventListener("click", (e) => {
            if (e.target === this.popupElement) {
                this.close();
            }
        });

        // Klik tombol dengarkan suara popup
        if (this.speakBtn) {
            this.speakBtn.addEventListener("click", () => this.speak());
        }

        // Tombol Escape di keyboard
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.popupElement.classList.contains("show")) {
                this.close();
            }
        });
    }

    /**
     * Memformat teks contoh kata dan cara bacanya dalam tanda kurung dengan warna terpisah:
     * Bagian kanji merah, bagian hiragana hijau, bagian katakana oranye.
     * @param {string} text
     */
    formatWordWithReading(text) {
        if (!text) return "-";
        const m = text.match(/^([^\uff08\(]+)[\uff08\(]([^\uff09\)]+)[\uff09\)]$/);
        if (!m) {
            return this.colorChars(text);
        }
        const word = m[1];
        const reading = m[2];

        const wordColored = this.colorChars(word);
        const kanaChars = word.replace(/[\u4e00-\u9faf]/g, "");

        let readingColored = "";
        if (kanaChars.length === 0) {
            readingColored = `<span class="char-kanji">${reading}</span>`;
        } else {
            let r = reading;
            for (let i = 0; i < word.length; i++) {
                const c = word[i];
                if (/[\u4e00-\u9faf]/.test(c)) {
                    const nextKana = word.slice(i + 1).match(/[\u3040-\u309f\u30a0-\u30ff]/);
                    if (nextKana) {
                        const target = nextKana[0];
                        const nextPos = r.indexOf(target);
                        if (nextPos !== -1) {
                            readingColored += `<span class="char-kanji">${r.slice(0, nextPos)}</span>`;
                            r = r.slice(nextPos);
                        } else {
                            readingColored += `<span class="char-kanji">${r}</span>`;
                            r = "";
                        }
                    } else {
                        readingColored += `<span class="char-kanji">${r}</span>`;
                        r = "";
                    }
                } else {
                    if (r.startsWith(c)) {
                        readingColored += `<span class="char-hiragana">${c}</span>`;
                        r = r.slice(c.length);
                    } else {
                        readingColored += `<span class="char-hiragana">${c}</span>`;
                    }
                }
            }
            if (r.length > 0) readingColored += r;
        }

        return `${wordColored}（${readingColored}）`;
    }

    colorChars(str) {
        return Array.from(str).map((char) => {
            if (/[\u4e00-\u9faf]/.test(char)) return `<span class="char-kanji">${char}</span>`;
            if (/[\u3040-\u309f]/.test(char)) return `<span class="char-hiragana">${char}</span>`;
            if (/[\u30a0-\u30ff]/.test(char)) return `<span class="char-katakana">${char}</span>`;
            return char;
        }).join("");
    }
}

