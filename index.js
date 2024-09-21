const questions = [
    {
      question: "What is a data structure?",
      options: ["Array", "Linked List", "Stack", "Queue"],
      answer: "Array",
    },
    {
      question: "What is a function?",
      options: [
        "Collection of reusable code",
        "Collection of data",
        "Collection of objects",
        "Collection of variables",
      ],
      answer: "Collection of reusable code",
    },
    {
      question: "What is a variable?",
      options: [
        "Container of data",
        "Container of objects",
        "Container of functions",
        "Container of arrays",
      ],
      answer: "Container of data",
    },
    {
      question: "What is a loop?",
      options: [
        "Container of data",
        "Container of functions",
        "Container of arrays",
        "Container of objects",
      ],
      answer: "Container of functions",
    },
    {
      question: "What is a class?",
      options: [
        "Container of data",
        "Container of functions",
        "Container of arrays",
        "Container of objects",
      ],
      answer: "Container of objects",
    },
  ];
  
  let score = 0;
  let index = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  
  function displayQuestion() {
    let q = questions[index];
  
    questionElement.innerHTML = q.question;
  
    optionsContainer.innerHTML = "";
  
    
    q.options.forEach((option, i) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(answer) {
    let q = questions[index];
    if (q.answer === answer) {
      score += 10;
    }
  
    index++;
    if (index < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").style.display = "none";
    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = `Your Score is ${score}`;
  }
  
  
  displayQuestion();
  