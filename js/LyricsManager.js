/**
 * LyricsManager.js
 * Komponen OOP untuk mengelola tampilan lirik, pembacaan per baris (TTS),
 * dan interaktivitas klik pada seluruh teks Jepang (Kanji & Kana).
 */
class LyricsManager {
    /**
     * @param {Array} lyrics - Daftar data lirik lagu
     * @param {Object} kanjiData - Kamus pembacaan kanji
     * @param {Object} kanaData - Peta lookup huruf kana
     * @param {Object} specialWords - Peta kata / frasa khusus
     * @param {SpeechService} speechService - Service TTS
     * @param {ModalManager} modalManager - Manager popup detail
     */
    constructor(lyrics, kanjiData, kanaData, specialWords, speechService, modalManager, musicPlayer = null) {
        this.lyrics = lyrics;
        this.kanjiData = kanjiData;
        this.kanaData = kanaData;
        this.specialWords = specialWords;
        this.speechService = speechService;
        this.modalManager = modalManager;
        this.musicPlayer = musicPlayer;

        this.container = document.getElementById("lyricsContainer");
        this.showRomaji = true;
        this.showMeaning = true;
        this.activeLineIndex = null;
    }

    /**
     * Render seluruh kartu lirik
     */
    render() {
        if (!this.container) return;

        this.container.innerHTML = "";

        this.lyrics.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "lyric-card";
            card.dataset.index = index;

            // Baris aksi / header kartu lirik (nomor baris + tombol baca per baris)
            const cardHeader = document.createElement("div");
            cardHeader.className = "lyric-card-header";

            const lineBadge = document.createElement("span");
            lineBadge.className = "line-badge";
            lineBadge.textContent = `Baris ${index + 1}`;

            const readLineBtn = document.createElement("button");
            readLineBtn.className = "btn-read-line";
            readLineBtn.innerHTML = `🔊 Baca Baris Ini`;
            readLineBtn.title = "Dengarkan bacaan baris ini saja";
            readLineBtn.addEventListener("click", () => this.readLine(index));

            cardHeader.appendChild(lineBadge);
            cardHeader.appendChild(readLineBtn);

            // Teks Jepang dengan karakter yang bisa diklik
            const japaneseEl = document.createElement("p");
            japaneseEl.className = "japanese";
            japaneseEl.appendChild(this.buildInteractiveJapaneseNodes(item.japanese));

            // Teks Romaji dengan suku kata berwarna sesuai teks Jepangnya (Kanji: Merah, Hiragana: Hijau, Katakana: Oranye)
            const romajiEl = document.createElement("p");
            romajiEl.className = "romaji";
            if (item.romajiParts && item.romajiParts.length > 0) {
                romajiEl.innerHTML = item.romajiParts.map(p => {
                    let cls = "char-kanji";
                    if (p.type === "hiragana") cls = "char-hiragana";
                    else if (p.type === "katakana") cls = "char-katakana";
                    else if (p.type === "neutral") cls = "text-neutral";
                    return `<span class="${cls}">${p.text}</span>`;
                }).join("");
            } else {
                romajiEl.textContent = item.romaji;
            }
            romajiEl.style.display = this.showRomaji ? "block" : "none";

            // Teks Arti Bahasa Indonesia
            const meaningEl = document.createElement("p");
            meaningEl.className = "meaning";
            meaningEl.textContent = item.meaning;
            meaningEl.style.display = this.showMeaning ? "block" : "none";

            card.appendChild(cardHeader);
            card.appendChild(japaneseEl);
            card.appendChild(romajiEl);
            card.appendChild(meaningEl);

            this.container.appendChild(card);
        });
    }

    /**
     * Mengubah teks Jepang menjadi node interaktif:
     * Seluruh karakter Kanji dan Kana dapat diklik untuk melihat cara baca dan artinya.
     * @param {string} text
     * @returns {DocumentFragment}
     */
    buildInteractiveJapaneseNodes(text) {
        const fragment = document.createDocumentFragment();
        const chars = Array.from(text);

        chars.forEach((char) => {
            // 1. Cek apakah karakter adalah Kanji (Warna: Merah)
            if (/[\u4e00-\u9faf]/.test(char)) {
                const btn = document.createElement("button");
                btn.className = "kanji-hit char-kanji";
                btn.textContent = char;
                const reading = this.kanjiData[char];
                btn.title = reading
                    ? `Kanji: ${char} (${reading.kana} - ${reading.romaji})\nKlik untuk melihat detail`
                    : `Kanji: ${char}\nKlik untuk melihat detail`;

                btn.addEventListener("click", () => this.handleCharClick(char, "kanji"));
                fragment.appendChild(btn);
            }
            // 2. Cek apakah karakter adalah Hiragana (Warna: Hijau)
            else if (/[\u3040-\u309f]/.test(char)) {
                const btn = document.createElement("button");
                btn.className = "kana-hit char-hiragana";
                btn.textContent = char;
                const kanaInfo = this.kanaData[char];
                btn.title = kanaInfo
                    ? `Hiragana: ${char} (${kanaInfo.romaji})\nKlik untuk melihat info & dengarkan`
                    : `Hiragana: ${char}\nKlik untuk mendengar`;

                btn.addEventListener("click", () => this.handleCharClick(char, "hiragana"));
                fragment.appendChild(btn);
            }
            // 3. Cek apakah karakter adalah Katakana (Warna: Oranye)
            else if (/[\u30a0-\u30ff]/.test(char)) {
                const btn = document.createElement("button");
                btn.className = "kana-hit char-katakana";
                btn.textContent = char;
                const kanaInfo = this.kanaData[char];
                btn.title = kanaInfo
                    ? `Katakana: ${char} (${kanaInfo.romaji})\nKlik untuk melihat info & dengarkan`
                    : `Katakana: ${char}\nKlik untuk mendengar`;

                btn.addEventListener("click", () => this.handleCharClick(char, "katakana"));
                fragment.appendChild(btn);
            }
            // 4. Karakter lain (spasi, tanda baca 「」…、？ dll)
            else {
                const span = document.createElement("span");
                span.className = "jp-punctuation";
                span.textContent = char;
                fragment.appendChild(span);
            }
        });

        return fragment;
    }

    /**
     * Handler saat karakter teks Jepang diklik
     * @param {string} char
     * @param {string} type ('kanji' | 'kana')
     */
    handleCharClick(char, type) {
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

        if (this.specialWords && this.specialWords[char]) {
            const data = this.specialWords[char];
            this.modalManager.show({
                char: char,
                category: "Simbol / Kata Khusus",
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
                category: data.type,
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
            category: "Karakter Jepang",
            kana: char,
            romaji: "-",
            word: char,
            meaning: "Karakter teks bahasa Jepang dalam lirik"
        });
    }

    /**
     * Membaca HANYA satu baris tertentu (fitur baca perbaris saja)
     * @param {number} index - Index baris lirik
     */
    readLine(index) {
        if (!this.lyrics[index]) return;

        // Bersihkan status aktif sebelumnya
        this.clearActiveHighlight();

        const item = this.lyrics[index];
        this.activeLineIndex = index;

        // Beri highlight visual pada kartu yang sedang dibaca
        const activeCard = this.container.querySelector(`.lyric-card[data-index="${index}"]`);
        if (activeCard) {
            activeCard.classList.add("reading-active");
            const btn = activeCard.querySelector(".btn-read-line");
            if (btn) btn.innerHTML = `🔊 Sedang Membaca...`;
        }

        // Turunkan volume musik jika musik sedang diputar
        if (this.musicPlayer && this.musicPlayer.isPlaying) {
            this.musicPlayer.duckVolume();
        }

        // Jalankan TTS untuk baris ini
        this.speechService.speak(
            item.japanese,
            null, // onStart
            () => { // onEnd / onError
                this.clearActiveHighlight();
                if (this.musicPlayer) {
                    this.musicPlayer.restoreVolume();
                }
            }
        );
    }

    /**
     * Menghentikan pembacaan suara
     */
    stopReading() {
        this.speechService.stop();
        this.clearActiveHighlight();
        if (this.musicPlayer) {
            this.musicPlayer.restoreVolume();
        }
    }

    /**
     * Membersihkan highlight kartu yang sedang aktif
     */
    clearActiveHighlight() {
        if (!this.container) return;

        this.container.querySelectorAll(".lyric-card").forEach((card) => {
            card.classList.remove("reading-active");
            const btn = card.querySelector(".btn-read-line");
            if (btn) btn.innerHTML = `🔊 Baca Baris Ini`;
        });
        this.activeLineIndex = null;
    }

    /**
     * Toggle tampilan teks Romaji
     */
    toggleRomaji() {
        this.showRomaji = !this.showRomaji;
        if (!this.container) return;
        this.container.querySelectorAll(".romaji").forEach((el) => {
            el.style.display = this.showRomaji ? "block" : "none";
        });
    }

    /**
     * Toggle tampilan teks Terjemahan / Arti
     */
    toggleMeaning() {
        this.showMeaning = !this.showMeaning;
        if (!this.container) return;
        this.container.querySelectorAll(".meaning").forEach((el) => {
            el.style.display = this.showMeaning ? "block" : "none";
        });
    }
}

