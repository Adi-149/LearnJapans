/**
 * SpeechService.js
 * Service berbasis OOP untuk mengelola Text-To-Speech (Web Speech API) bahasa Jepang.
 */
class SpeechService {
    constructor() {
        this.synth = window.speechSynthesis || null;
        this.currentUtterance = null;
        this.japaneseVoice = null;
        this.rate = 0.85; // Kecepatan nyaman untuk belajar bahasa Jepang
        this.initVoice();
    }

    /**
     * Memeriksa ketersediaan Web Speech API
     */
    isSupported() {
        return !!this.synth;
    }

    /**
     * Inisialisasi pemilihan suara ja-JP
     */
    initVoice() {
        if (!this.isSupported()) return;

        const updateVoices = () => {
            const voices = this.synth.getVoices();
            // Cari suara bahasa Jepang (ja-JP atau ja_JP)
            this.japaneseVoice = voices.find(v => v.lang.replace('_', '-').startsWith('ja')) || null;
        };

        updateVoices();
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = updateVoices;
        }
    }

    /**
     * Memutar teks dalam bahasa Jepang
     * @param {string} text - Teks yang akan dibaca
     * @param {Function} [onStart] - Callback saat mulai berbicara
     * @param {Function} [onEnd] - Callback saat selesai berbicara
     */
    speak(text, onStart = null, onEnd = null) {
        if (!this.isSupported()) {
            alert("Browser Anda belum mendukung fitur Text-To-Speech.");
            return;
        }

        // Hentikan suara yang sedang berjalan sebelumnya
        this.stop();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "ja-JP";
        utterance.rate = this.rate;

        if (this.japaneseVoice) {
            utterance.voice = this.japaneseVoice;
        }

        utterance.onstart = () => {
            if (typeof onStart === "function") onStart();
        };

        utterance.onend = () => {
            this.currentUtterance = null;
            if (typeof onEnd === "function") onEnd();
        };

        utterance.onerror = (e) => {
            console.warn("TTS Error / Interrupted:", e);
            this.currentUtterance = null;
            if (typeof onEnd === "function") onEnd();
        };

        this.currentUtterance = utterance;
        this.synth.speak(utterance);
    }

    /**
     * Menghentikan suara yang sedang aktif
     */
    stop() {
        if (this.isSupported()) {
            this.synth.cancel();
            this.currentUtterance = null;
        }
    }
}

