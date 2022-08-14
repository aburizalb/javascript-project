const quizData = [
	{
		question: "Apa nama Ibu Kota Provinsi Kalimantan Selatan?",
		a: "Banjarmasin",
		b: "Jakarta",
		c: "Surabaya",
		d: "Jayapura",
		benar: "a",
	},
	{
		question: "Javascript juga disebut dengan bahasa?",
		a: "mesin",
		b: "scripting",
		c: "robot",
		d: "C",
		benar: "b",
	},
	{
		question: "Presiden Pertama Indonesia adalah?",
		a: "Susilo Bambang Yudohyono",
		b: "Megawati Soekarno Putri",
		c: "BJ. Habibie",
		d: "Ir. Soekarno",
		benar: "d",
	},
	{
		question: "Apa Kabarmu?",
		a: "baik",
		b: "sakit",
		c: "tidak baik",
		d: "buruk",
		benar: "a",
	},
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionX = document.getElementById("question");
const a_txt = document.getElementById("a_txt");
const b_txt = document.getElementById("b_txt");
const c_txt = document.getElementById("c_txt");
const d_txt = document.getElementById("d_txt");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselected();

	const currentQuizData = quizData[currentQuiz];

	questionX.innerText = currentQuizData.question;
	a_txt.innerText = currentQuizData.a;
	b_txt.innerText = currentQuizData.b;
	c_txt.innerText = currentQuizData.c;
	d_txt.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

function deselected() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].benar) {
			score++;
		}
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			//todo show result
			quiz.innerHTML = `<h2>Hasil jawaban benar adalah ${score}/${quizData.length} Pertanyaan.</h2><button onclick="location.reload()">Reload</button>`;
		}
	}
});
