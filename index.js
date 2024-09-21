const questions = [
    {
      question: "What is a data structure?",
      options: ["A programming language", " A collection of algorithms", "A type of computer hardware", "A way to store and organize data"],
      answer: "A way to store and organize data",
    },
    {
      question: "What is an array?",
      options: [
        "A type of function",
        "A collection of elements",
        "A single data point",
        "A programming language feature",
      ],
      answer: "A collection of elements",
    },
    {
      question: "What is an object in programming?",
      options: [
        "A data structure that holds values and functions",
        "A function that returns data",
        "A collection of variables only",
        "A type of loop",
      ],
      answer: "A data structure that holds values and functions",
    },
    {
      question: "What does 'inheritance' mean in object-oriented programming?",
      options: [
        "Copying functions from one file to another",
        "Deriving new classes from existing ones",
        "Storing data in variables",
        "Creating loops",
      ],
      answer: "Deriving new classes from existing ones",
    },
    {
      question: "What is recursion?",
      options: [
        "A process of repeating items in a collection",
        "A function that calls itself",
        "Storing multiple data types in one variable",
        "An error in programming",
      ],
      answer: "A function that calls itself",
    },
    {
      question: "What is an API?",
      options: [
        "A way to organize data",
        "A collection of user-defined functions",
        "An interface for communication between different software components",
        "A type of database",
      ],
      answer: "An interface for communication between different software components",
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
  
