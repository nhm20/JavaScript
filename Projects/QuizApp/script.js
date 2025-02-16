const quizData = [
  {
    question: "Where did you grow up?",
    a: "Hyderabad",
    b: "Bangalore",
    c: "Chennai",
    d: "Mumbai",
    correct: "a",
  },
  {
    question: " What TV show are you binging right now?",
    a: "Citadel",
    b: "BigBoss",
    c: "MahaBharat",
    d: "Ramayan",
    correct: "a",
  }
  ,
    {
      question: "What’s your favorite movie?",
      a: "MI",
      b: "Pirates of Caribbean",
      c: "Iron Man",
      d: "Avengers",
      correct: "b",
    },
    {
      question: "What is one sport that you would try?",
      a: "Cricket",
      b: "Football",
      c: "Badminton",
      d: "Kabbaddi",
      correct: "d",
    }
];

const quiz = document.getElementById("quiz");
const resultEle = document.getElementById("result");

const answerEls = document.querySelectorAll(".answer");
const labelEls = document.querySelectorAll(".op_label");
const questionEle = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const scoreEle = document.getElementById("score");
const reloadBtn = document.getElementById("reload");

let currentQtn = 0;
let answered = 0;
let submitted = false;
let userSelected = {

};
loadQuiz();
function loadQuiz() {
  questionEle.innerText = quizData[currentQtn].question;
  a_text.innerText = quizData[currentQtn].a;
  b_text.innerText = quizData[currentQtn].b;
  c_text.innerText = quizData[currentQtn].c;
  d_text.innerText = quizData[currentQtn].d;
  deSelectAnswer();
  if (userSelected[currentQtn]) {
    let selected = userSelected[currentQtn];
    document.getElementById(selected).checked = true;
  }
  if (currentQtn == quizData.length - 1) {
    nextBtn.style.display = "none";
       if (submitted) {
            submitBtn.style.display = "none";
            reloadBtn.style.display = "block";
            

       }
       else {
                   submitBtn.style.display = "block";

       }
  }
  if (submitted) {
    let actualAns = quizData[currentQtn].correct;
       let userSelected1 = userSelected[currentQtn];
       labelEls.forEach((labelEle) => {
            labelEle.classList.remove("correct");
            labelEle.classList.remove("wrong");
       }      
       )
    if (actualAns == userSelected1) {
      let op = actualAns + "_text";
      document.getElementById(op).classList.add("correct");
    } else {
      let correct_op = actualAns + "_text";
      document.getElementById(correct_op).classList.add("correct");
      let user_op = userSelected1 + "_text";
      document.getElementById(user_op).classList.add("wrong");
    }
  }
}

function deSelectAnswer() {
  answerEls.forEach((answerEle) => {
    answerEle.checked = false;
  });
}
nextBtn.addEventListener("click", () => {
  let answer = getSelected();
  if (answer && !submitted) {
    if (answer == quizData[currentQtn].correct) {
      answered++;
    }
    currentQtn++;
    if (currentQtn < quizData.length) {
      loadQuiz();
    }
     }
  else {
       currentQtn++;
       loadQuiz()
     }
}
);
prevBtn.addEventListener("click", () => {
  if (currentQtn > 0) {
    currentQtn--;
    loadQuiz();
  }
});
submitBtn.addEventListener("click", () => {
  if (getSelected()) {
    submitted = true;
    quiz.style.display = "none";
    resultEle.style.display = "block";
    scoreEle.innerText =
      answered + "/" + quizData.length + "questions answered correctly";
  }
});
function getSelected() {
  let answer;
  answerEls.forEach((answerEle) => {
    if (answerEle.checked) {
      answer = answerEle.id;
      userSelected[currentQtn] = answer;
    }
  })
  return answer;
}

function loadAnswers() {
  currentQtn = 0;
  quiz.style.display = "block";
  resultEle.style.display = "none";
  answerEls.forEach((answerEle) => {
    answerEle.disabled = true;
  });
  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
  loadQuiz();
}
