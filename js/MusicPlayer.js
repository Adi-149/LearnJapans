/**
 * MusicPlayer.js
 * Kelas OOP untuk mengelola pemutaran lagu latar / musik pengiring lirik.
 */
class MusicPlayer {
    /**
     * @param {string} audioSrc - Lokasi file audio
     */
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
        this.audio.preload = "metadata";
        this.originalVolume = 1.0;
        this.audio.volume = this.originalVolume;
        this.isPlaying = false;

        // Referensi elemen UI
        this.playBtn = document.getElementById("btnPlayMusic");
        this.timeDisplay = document.getElementById("musicTimeDisplay");
        this.progressBar = document.getElementById("musicProgressBar");
        this.playerWidget = document.getElementById("musicPlayerWidget");

        this.bindEvents();
    }

    /**
     * Memutar atau menjeda audio (toggle)
     */
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    /**
     * Memulai pemutaran lagu
     */
    play() {
        this.audio.play()
            .then(() => {
                this.isPlaying = true;
                this.updateUI();
            })
            .catch((err) => {
                console.warn("Gagal memutar audio:", err);
                // Jika browser memblokir autoplay, reset status
                this.isPlaying = false;
                this.updateUI();
            });
    }

    /**
     * Menjeda lagu
     */
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updateUI();
    }

    /**
     * Menghentikan dan me-reset lagu ke awal
     */
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        if (this.progressBar) this.progressBar.value = 0;
        this.updateUI();
    }

    /**
     * Menurunkan volume lagu sementara (audio ducking) saat TTS membaca lirik
     */
    duckVolume() {
        this.audio.volume = 0.25;
    }

    /**
     * Mengembalikan volume lagu ke level normal
     */
    restoreVolume() {
        this.audio.volume = this.originalVolume;
    }

    /**
     * Memperbarui tampilan tombol dan widget pemutar musik
     */
    updateUI() {
        if (!this.playBtn) return;

        if (this.isPlaying) {
            this.playBtn.innerHTML = `⏸ Jeda Musik`;
            this.playBtn.classList.add("playing");
            this.playBtn.title = "Klik untuk menjeda pemutaran musik";
        } else {
            this.playBtn.innerHTML = `🎵 Putar Musik`;
            this.playBtn.classList.remove("playing");
            this.playBtn.title = "Klik untuk memutar lagu 'Abe Asami - Kimi wo Tsurete Iku'";
        }
    }

    /**
     * Format detik menjadi format mm:ss
     * @param {number} seconds
     * @returns {string}
     */
    formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return "00:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
    }

    /**
     * Memasang event listener untuk pemutar musik
     */
    bindEvents() {
        if (this.playBtn) {
            this.playBtn.addEventListener("click", () => this.togglePlay());
        }

        // Pembaruan waktu & progress bar secara real-time
        this.audio.addEventListener("timeupdate", () => {
            if (this.progressBar && this.audio.duration) {
                const percent = (this.audio.currentTime / this.audio.duration) * 100;
                this.progressBar.value = percent;
            }

            if (this.timeDisplay) {
                const current = this.formatTime(this.audio.currentTime);
                const total = this.formatTime(this.audio.duration);
                this.timeDisplay.textContent = `${current} / ${total}`;
            }
        });

        // Durasi awal terdeteksi
        this.audio.addEventListener("loadedmetadata", () => {
            if (this.timeDisplay) {
                const total = this.formatTime(this.audio.duration);
                this.timeDisplay.textContent = `00:00 / ${total}`;
            }
        });

        // Saat lagu selesai
        this.audio.addEventListener("ended", () => {
            this.isPlaying = false;
            if (this.progressBar) this.progressBar.value = 0;
            this.updateUI();
        });

        // Event saat user menggeser progress bar seeker
        if (this.progressBar) {
            this.progressBar.addEventListener("input", (e) => {
                if (this.audio.duration) {
                    const targetTime = (e.target.value / 100) * this.audio.duration;
                    this.audio.currentTime = targetTime;
                }
            });
        }
    }
}

