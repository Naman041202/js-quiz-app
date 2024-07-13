const questions = [
  {
    que: "Which of the following is the correct syntax to print a message in the console in JavaScript?",
    a: 'console.print("Hello World");',
    b: 'print("Hello World");',
    c: 'console.log("Hello World");',
    d: 'log.console("Hello World");',
    correct: "c",
  },
  {
    que: "Which type of variable is visible only within a function where it is defined?",
    a: "Global variable",
    b: "Local variable",
    c: "Both of the above",
    d: "None of the above",
    correct: "b",
  },
  {
    que: "Which operator is used to assign a value to a variable in JavaScript?",
    a: "*",
    b: "-",
    c: "=",
    d: "x",
    correct: "c",
  },
  {
    que: "Which keyword is used to define a variable in JavaScript?",
    a: "var",
    b: "let",
    c: "const",
    d: "All of the above",
    correct: "d",
  },
  {
    que: "Which symbol is used for single-line comments in JavaScript?",
    a: "//",
    b: "/* */",
    c: "<!-- -->",
    d: "#",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quebox = document.getElementById("quebox");
const optionInputs = document.querySelectorAll(".option");

const loadQuestion = () => {
  if (index === total) {
    return endquiz();
  }
  reset();
  const data = questions[index];
  quebox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitquiz = () => {
  const data = questions[index];
  const ans = getanswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getanswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endquiz = () => {
  if (right >= 3) {
    document.getElementById(
      "box"
    ).innerHTML = `<h2>Thankyou for playing the quiz! </h2>
   <h3>Result:- ${right}/${total}are correct </h3>
   <h3> Yay! you have passed the quiz </h3>`;
  } else {
    document.getElementById(
      "box"
    ).innerHTML = `<h2>Thankyou for playing the quiz! </h2>
  <h3>Result:-   ${right}/${total}are correct </h3>
  <h3> Sorry! You failed . Try again </h3>`;
  }
};

loadQuestion();
