document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const questionCont = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const restartBtn = document.getElementById("restart-btn");
  const resultCont = document.getElementById("result-container");
  let scoreCont = document.getElementById("score");
  let message = document.getElementById("message");
  const questions = [
    {
      question: "What is Sunset without listen?",
      choices: [
        "A dog",
        "Your mom",
        "A collection of distinct objects",
        "A Brick",
      ],
      answer: "A collection of distinct objects",
    },
    {
      question: "What is logo without people?",
      choices: ["Food", "Origin", "Your ancestors", "Coffee"],
      answer: "Origin",
    },
    {
      question: "Honour without Nitric Oxide is?",
      choices: ["5x6! sec", "English", "No Hindi", "A dog"],
      answer: "5x6! sec",
    },
    {
      question: "What are Colonies without that is?",
      choices: ["Not Colonies", "Socities", ":,:,:....", "Legends"],
      answer: ":,:,:....",
    },
    {
      question: "What is a pimple without p?",
      choices: ["My favourite", "A tamarind", "A bouah woah", "Smelly cat"],
      answer: "A tamarind",
    },
    {
      question: "What is category wihtout example?",
      choices: ["Sure", "Maybe", "Absolutely not", "A bowl"],
      answer: "A bowl",
    },
    {
      question: "What is fever without iron?",
      choices: [
        "A groom",
        "A slow learner",
        "Something boring",
        "A sudden realization",
      ],
      answer: "A groom",
    },
    {
      question: "What is Ministry without 60 seconds?",
      choices: ["A lady", "A mistake", "A compliment", "A question"],
      answer: "A lady",
    },
    {
      question: "What is a gallery without aliminium?",
      choices: ["My house", "My Aunty's house", "A squirrel", "My life"],
      answer: "A squirrel",
    },
    {
      question: "Armor without the third noble gas is?",
      choices: ["A guava", "Chicken tikka", "Dhai kilo ka haath", "A peacock"],
      answer: "A peacock",
    },
  ];

  let currentQuestionIdx = 0;
  score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIdx++;
    if (currentQuestionIdx < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultCont.classList.add("hidden");
    questionCont.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questions.forEach((question) => {
      questionText.textContent = questions[currentQuestionIdx].question;
      choicesList.innerHTML = "";
      questions[currentQuestionIdx].choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => {
          const choices = choicesList.querySelectorAll("li");
          choices.forEach((c) => c.classList.remove("selected, button:hover"));

          li.classList.add("selected");
          selectAns(choice);
        });

        choicesList.appendChild(li);
      });
    });
  }
  function selectAns(choice) {
    const correctAns = questions[currentQuestionIdx].answer;
    if (choice === correctAns) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionCont.classList.add("hidden");
    resultCont.classList.remove("hidden");
    scoreCont.textContent = `${score} out of ${questions.length}`;
    if (score > 8) {
      message.textContent =
        "You have reached peak brainrot. Please go touch some grass.";
    } else {
      message.textContent = "I went to Mid-city and everyone knew you";
    }
  }

  restartBtn.addEventListener("click", () => {
    currentQuestionIdx = 0;
    score = 0;
    resultCont.classList.add("hidden");

    startQuiz();
  });
});
