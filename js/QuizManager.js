/**
 * QuizManager.js
 * Komponen OOP untuk mengelola kuis interaktif bahasa Jepang.
 */
class QuizManager {
    /**
     * @param {Array} questions - Daftar soal kuis
     */
    constructor(questions) {
        this.questions = questions;
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;

        this.numberEl = document.getElementById("quizNumber");
        this.questionEl = document.getElementById("quizQuestion");
        this.optionsEl = document.getElementById("quizOptions");
        this.feedbackEl = document.getElementById("quizFeedback");
        this.scoreEl = document.getElementById("quizScore");
        this.nextBtn = document.getElementById("quizNextBtn");

        this.bindEvents();
    }

    /**
     * Memulai / me-render pertanyaan kuis
     */
    render() {
        if (!this.questionEl || !this.optionsEl) return;

        const current = this.questions[this.currentIndex];
        this.answered = false;

        if (this.numberEl) {
            this.numberEl.textContent = `Pertanyaan ${this.currentIndex + 1} dari ${this.questions.length}`;
        }

        this.questionEl.textContent = current.question;
        this.feedbackEl.textContent = "";
        this.feedbackEl.className = "";
        this.optionsEl.innerHTML = "";

        if (this.nextBtn) {
            this.nextBtn.style.display = "inline-block";
            this.nextBtn.textContent = this.currentIndex === this.questions.length - 1
                ? "Lihat Hasil Kuis"
                : "Pertanyaan Berikutnya";
        }

        current.options.forEach((option) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option-btn";
            btn.textContent = option;
            btn.addEventListener("click", () => this.checkAnswer(option, btn));
            this.optionsEl.appendChild(btn);
        });

        if (this.scoreEl) {
            this.scoreEl.textContent = `Skor sementara: ${this.score}`;
        }
    }

    /**
     * Memeriksa jawaban yang dipilih
     * @param {string} selected - Pilihan pengguna
     * @param {HTMLElement} btn - Tombol yang diklik
     */
    checkAnswer(selected, btn) {
        if (this.answered) return;

        this.answered = true;
        const correct = this.questions[this.currentIndex].answer;
        const allButtons = this.optionsEl.querySelectorAll(".quiz-option-btn");

        // Nonaktifkan klik tambahan pada seluruh tombol opsi
        allButtons.forEach((b) => {
            b.disabled = true;
            if (b.textContent === correct) {
                b.classList.add("correct");
            }
        });

        if (selected === correct) {
            this.score++;
            btn.classList.add("correct");
            this.feedbackEl.textContent = "Benar! Hebat sekali 🎉";
            this.feedbackEl.className = "quiz-feedback correct";
        } else {
            btn.classList.add("wrong");
            this.feedbackEl.textContent = `Kurang tepat. Jawaban yang benar: "${correct}"`;
            this.feedbackEl.className = "quiz-feedback wrong";
        }

        if (this.scoreEl) {
            this.scoreEl.textContent = `Skor sementara: ${this.score} / ${this.questions.length}`;
        }
    }

    /**
     * Melanjutkan ke pertanyaan berikutnya atau menampilkan skor akhir
     */
    nextQuestion() {
        if (!this.answered) {
            alert("Silakan pilih salah satu jawaban terlebih dahulu!");
            return;
        }

        this.currentIndex++;

        if (this.currentIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        this.render();
    }

    /**
     * Menampilkan hasil akhir kuis
     */
    showResults() {
        if (this.numberEl) this.numberEl.textContent = "Hasil Akhir Kuis";
        this.questionEl.textContent = `Kuis Selesai! Skor Anda: ${this.score} dari ${this.questions.length}`;
        this.optionsEl.innerHTML = "";

        const percentage = Math.round((this.score / this.questions.length) * 100);
        let note = "Terus semangat belajar bahasa Jepang!";
        if (percentage >= 80) note = "Luar biasa! Penguasaan Anda sangat baik! 🌟";
        else if (percentage >= 50) note = "Bagus! Terus tingkatkan latihan kosakata Anda! 👍";

        this.feedbackEl.innerHTML = `
            <div class="quiz-final-summary">
                <p class="final-score">${percentage}% Benar</p>
                <p>${note}</p>
            </div>
        `;
        this.feedbackEl.className = "quiz-feedback";

        if (this.scoreEl) {
            this.scoreEl.textContent = "";
        }

        if (this.nextBtn) {
            this.nextBtn.textContent = "🔄 Ulangi Kuis";
            // Ubah listener agar tombol ini me-reset kuis
            const clone = this.nextBtn.cloneNode(true);
            this.nextBtn.parentNode.replaceChild(clone, this.nextBtn);
            this.nextBtn = clone;
            this.nextBtn.addEventListener("click", () => this.reset());
        }
    }

    /**
     * Me-reset kuis dari awal
     */
    reset() {
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;

        if (this.nextBtn) {
            const clone = this.nextBtn.cloneNode(true);
            this.nextBtn.parentNode.replaceChild(clone, this.nextBtn);
            this.nextBtn = clone;
            this.nextBtn.addEventListener("click", () => this.nextQuestion());
        }

        this.render();
    }

    /**
     * Event listeners untuk tombol navigasi kuis
     */
    bindEvents() {
        if (this.nextBtn) {
            this.nextBtn.addEventListener("click", () => this.nextQuestion());
        }
    }
}

