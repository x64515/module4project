questions = [
  {
    question: "Array's in Javascript can be used to store",
    answers: [
      { text: "Arrays", correct: false },
      { text: "objects", correct: false },
      { text: "strings", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What does html stand for",
    answers: [
      { text: "HyperTextMarkupLanguage", correct: true },
      { text: "Noting", correct: false },
      { text: "HypnotictextMarkupLanguag", correct: false },
      { text: "HiTomMeetLarry", correct: false },
    ],
  },
  {
    question: "what is css",
    answers: [
      { text: "backend", correct: false },
      { text: "frontend", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "How many fingers am i holding up",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "I cant see your fingers", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "are Javascript and Java the samething",
    answers: [
      { text: "Sorta", correct: false },
      { text: "YES!!!", correct: false },
      { text: "No", correct: true },
      { text: "IDK", correct: false },
    ],
  },
];

const startButton = document.getElementById("start-btn");
const questionFrameEl = document.getElementById("question-frame");
const questionEl = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const wrongAnswer = document.querySelector("#wrong-answer");
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;
let timer = 0;
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");

var startQuiz = function () {
  const start = document.querySelector("#start");
  start.classList.add("hide");
  questionFrameEl.classList.toggle("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionEl.classList.toggle("hide");
  loadQuestions();
};
function resetQuestions() {
  clearStatusClass(document.body);
  // nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function loadQuestions() {
  resetQuestions();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
startButton.addEventListener("click", startQuiz);

function showQuestion(questions) {
  questionEl.innerText = questions.question;
  questions.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(wrongAnswer, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    // nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    currentQuestionIndex++;
    score += 1;
    loadQuestions();
  } else {
    element.classList.toggle("hide");
  }
}
//    timer start

function clearStatusClass(element) {
  element.classList.toggle("correct");
  element.classList.remove("wrong");
}

startButton.addEventListener("click", startQuiz);
