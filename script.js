  setTimeout(showQuiz, 100); 


function showQuiz() {
  const loader = document.querySelector("#loading-screen");
  const quizApp = document.querySelector("#quiz-app");
  setTimeout(() => {
    loader.classList.add("hide");
    quizApp.classList.remove("hide");
    startQuiz();
  }, 3000);
}

function startQuiz() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "HyperText Machine Language"
      ],
      answer: "HyperText Markup Language"
    },
      {
       question: "Which HTML tag is used to define an internal style sheet?",
       options: ["<script>", "<style>", "<css>", "<link>"],
          answer: "<style>"
  },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
      {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Perth", "Canberra"],
    answer: "Canberra"
  },
   {
    question: "What is the result of 3 + '3' in JavaScript?",
    options: ["6", "33", "NaN", "Error"],
    answer: "33"
  },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Colorful Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    }
  ];

  let currentQ = 0;
  let score = 0;

  const questionEl = document.getElementById("question");  // select elemenst by using their id's
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreBox = document.getElementById("score-box");

  function loadQuestion() {
    const q = questions[currentQ];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(optiontext => {
      const btn = document.createElement("button");
      btn.textContent = optiontext;
      btn.className = "option";
      btn.onclick = () => selectAnswer(btn, q.answer);
      optionsEl.appendChild(btn);
    });

    nextBtn.classList.add("hide");
  }

  function selectAnswer(button, correctAnswer) {
    button.classList.add( button.textContent == correctAnswer  ? "correct" : "wrong");
    if (button.textContent == correctAnswer) {
      score++;
    } 

    Array.from(optionsEl.children).forEach(btn => {  //coverting ( htmlCollection of options through optionse1.children) to array
      btn.disabled = true;
      if (btn.textContent == correctAnswer) {
        btn.classList.add("correct");
      }
    });

    nextBtn.classList.remove("hide");
  }

  

  function showScore() {
    document.getElementById("quiz-box").classList.add("hide");
    scoreBox.classList.remove("hide");
    scoreBox.textContent = `🎉 You scored ${score} out of ${questions.length}`;
  }

  nextBtn.onclick = () => {
    currentQ++;
    currentQ < questions.length ? loadQuestion() : showScore();
  };

  loadQuestion();
}
