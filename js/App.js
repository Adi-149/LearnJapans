/**
 * App.js
 * Kelas Koordinator Utama (Main Application Controller) berbasis OOP.
 * Menginisialisasi seluruh modul, mengelola navigasi antar-halaman, dan integrasi global.
 */
class App {
    constructor() {
        this.speechService = null;
        this.modalManager = null;
        this.lyricsManager = null;
        this.kanaManager = null;
        this.vocabManager = null;
        this.quizManager = null;
        this.musicPlayer = null;
        this.currentPage = "lyrics";
    }

    /**
     * Inisialisasi seluruh service dan manager aplikasi
     */
    init() {
        // 1. Inisialisasi Service Text-To-Speech
        this.speechService = new SpeechService();

        // 2. Inisialisasi Modal Popup Cara Baca
        this.modalManager = new ModalManager(this.speechService);

        // 3. Inisialisasi Pemutar Musik Lirik Lagu
        this.musicPlayer = new MusicPlayer("music/abe asami - kimi wo tsurete iku.mp3");

        // 4. Inisialisasi Manajer Fitur Lirik
        this.lyricsManager = new LyricsManager(
            lyricsData,
            kanjiReadings,
            kanaLookup,
            specialWordsLookup,
            this.speechService,
            this.modalManager,
            this.musicPlayer
        );

        // 5. Inisialisasi Manajer Hiragana & Katakana (Lengkap dengan Dakuon & Handakuon)
        const allKanaList = (typeof kanaDakuonData !== "undefined")
            ? [...kanaData, ...kanaDakuonData]
            : kanaData;
        this.kanaManager = new KanaManager(allKanaList, this.speechService, this.modalManager);

        // 6. Inisialisasi Manajer Kosakata & Hafalan (Harian, Benda, Buah, Lirik)
        this.vocabManager = new VocabularyManager(
            vocabularyData,
            this.speechService,
            this.modalManager,
            kanjiReadings,
            kanaLookup
        );

        // 7. Inisialisasi Manajer Kuis
        this.quizManager = new QuizManager(quizQuestions);

        // Pasang event navigasi, tombol kontrol, fitur dark mode, dan tombol scroll roket
        this.bindNavigation();
        this.bindLyricsControls();
        this.initTheme();
        this.initScrollToTop();

        // Render tampilan awal
        this.lyricsManager.render();
        this.kanaManager.render();
        this.vocabManager.render();
        this.quizManager.render();
    }

    /**
     * Navigasi antar halaman (Tab Switching)
     * @param {string} pageId - ID elemen section target ('lyrics' | 'kana' | 'kanji' | 'quiz')
     */
    showPage(pageId) {
        // Jika sedang memutar suara di halaman lirik, hentikan saat pindah halaman
        if (this.currentPage === "lyrics" && pageId !== "lyrics" && this.lyricsManager) {
            this.lyricsManager.stopReading();
        }

        this.currentPage = pageId;

        // Atur class active pada section
        document.querySelectorAll(".page").forEach((page) => {
            page.classList.remove("active");
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add("active");
        }

        // Atur status active pada tombol navigasi header
        document.querySelectorAll(".header nav button").forEach((btn) => {
            if (btn.dataset.page === pageId) {
                btn.classList.add("nav-active");
            } else {
                btn.classList.remove("nav-active");
            }
        });

        // Scroll halus ke atas
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Perbarui visibilitas tombol mengambang saat pindah halaman
        const floatingKanaBtn = document.getElementById("floatingKanaToggleBtn");
        if (floatingKanaBtn) {
            floatingKanaBtn.classList.remove("visible");
        }
    }

    /**
     * Memasang event listener untuk menu navigasi header
     */
    bindNavigation() {
        const navButtons = document.querySelectorAll(".header nav button");
        navButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const targetPage = btn.dataset.page;
                if (targetPage) {
                    this.showPage(targetPage);
                }
            });
        });
    }

    /**
     * Memasang event listener untuk tombol kontrol di halaman lirik
     */
    bindLyricsControls() {
        const btnToggleRomaji = document.getElementById("btnToggleRomaji");
        if (btnToggleRomaji) {
            btnToggleRomaji.addEventListener("click", () => {
                this.lyricsManager.toggleRomaji();
            });
        }

        const btnToggleMeaning = document.getElementById("btnToggleMeaning");
        if (btnToggleMeaning) {
            btnToggleMeaning.addEventListener("click", () => {
                this.lyricsManager.toggleMeaning();
            });
        }

        const btnStopReading = document.getElementById("btnStopReading");
        if (btnStopReading) {
            btnStopReading.addEventListener("click", () => {
                this.lyricsManager.stopReading();
                if (this.musicPlayer) {
                    this.musicPlayer.stop();
                }
            });
        }
    }

    /**
     * Inisialisasi tema Dark Mode dari preferensi pengguna (localStorage)
     */
    initTheme() {
        const themeBtn = document.getElementById("themeToggleBtn");
        const savedTheme = localStorage.getItem("learnjapansub_theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            if (themeBtn) themeBtn.innerHTML = "☀️ Mode Terang";
        } else {
            document.body.classList.remove("dark-mode");
            if (themeBtn) themeBtn.innerHTML = "🌙 Mode Gelap";
        }

        if (themeBtn) {
            themeBtn.addEventListener("click", () => this.toggleTheme());
        }
    }

    /**
     * Mengubah mode antara Dark Mode dan Light Mode serta menyimpannya
     */
    toggleTheme() {
        const isDark = document.body.classList.toggle("dark-mode");
        const themeBtn = document.getElementById("themeToggleBtn");

        if (isDark) {
            localStorage.setItem("learnjapansub_theme", "dark");
            if (themeBtn) themeBtn.innerHTML = "☀️ Mode Terang";
        } else {
            localStorage.setItem("learnjapansub_theme", "light");
            if (themeBtn) themeBtn.innerHTML = "🌙 Mode Gelap";
        }
    }

    /**
     * Inisialisasi tombol scroll ke atas (roket) dan tombol mengambang ganti mode Kana
     */
    initScrollToTop() {
        const scrollBtn = document.getElementById("scrollToTopBtn");
        const floatingKanaBtn = document.getElementById("floatingKanaToggleBtn");
        if (!scrollBtn && !floatingKanaBtn) return;

        // Tampilkan tombol saat pengguna scroll ke bawah lebih dari 200px
        const handleScroll = () => {
            const isScrolled = window.scrollY > 200;

            if (scrollBtn) {
                if (isScrolled) {
                    scrollBtn.classList.add("visible");
                } else {
                    scrollBtn.classList.remove("visible");
                }
            }

            if (floatingKanaBtn) {
                if (isScrolled && this.currentPage === "kana") {
                    floatingKanaBtn.classList.add("visible");
                } else {
                    floatingKanaBtn.classList.remove("visible");
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Aksi klik tombol roket: animasi roket meluncur dan scroll halus ke paling atas
        if (scrollBtn) {
            scrollBtn.addEventListener("click", () => {
                scrollBtn.classList.add("launching");
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                // Reset status kelas animasi setelah roket selesai meluncur
                setTimeout(() => {
                    scrollBtn.classList.remove("launching");
                }, 800);
            });
        }
    }
}

// Inisialisasi aplikasi saat dokumen HTML siap
document.addEventListener("DOMContentLoaded", () => {
    window.app = new App();
    window.app.init();
});

