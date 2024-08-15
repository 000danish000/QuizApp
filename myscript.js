const qanda = [
  {
    question:
      "Which of the following is the largest planet in our solar system?",
    a: "Earth",
    b: "Neptune",
    c: "Saturn",
    d: "Jupiter",
    correct: "d",
  },
  {
    question:
      "What is the process by which plants convert sunlight into energy?",
    a: "Respiration",
    b: "Photosynthesis",
    c: "Fermentation",
    d: "Digestion",
    correct: "b",
  },
  {
    question: "Which of the following is the basic unit of life?",
    a: "Cell",
    b: "Tissue",
    c: "Organ",
    d: "Organ System",
    correct: "a",
  },
  {
    question: "Which gas makes up most of the Earth's atmosphere?",
    a: "Oxygen",
    b: "Carbon Dioxide",
    c: "Nitrogen",
    d: "Hydrogen",
    correct: "c",
  },
  {
    question: "Which is the longest river in India?",
    a: "Ganga",
    b: "Yamuna",
    c: "Indus",
    d: "Brahmaputra",
    correct: "d",
  },
];

const que = document.getElementById("question");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const allRadioBtn = document.querySelectorAll('input[name="ans"]');
const submitBtn = document.getElementById("submit_btn");
const prevBtn = document.getElementById("prev_btn");
let storePoints = [];

let points = 0;
let index = 0;

let disableBtnFunction = (btnName) =>{
  btnName.setAttribute("disabled", "true");
  btnName.classList.add("disableBtn");
}

let enableBtnFunction = (btnName) =>{
  btnName.removeAttribute("disabled");
  btnName.classList.remove("disableBtn");
}

const selectedRadioBtn = () => {
  for (const e of allRadioBtn) {
    if (e.checked == true) {
      return e.value;
    }
  }
};

const showQue = () => {
  if (index < qanda.length) {
    enableBtnFunction(prevBtn);
    que.textContent = qanda[index].question;
    ans1.textContent = ` A. ${qanda[index].a}`;
    ans2.textContent = ` B. ${qanda[index].b}`;
    ans3.textContent = ` C. ${qanda[index].c}`;
    ans4.textContent = ` D. ${qanda[index].d}`;
  } else {
    let score = storePoints.reduce((first, second) => {
      return first + second;
    });
    disableBtnFunction(submitBtn);
    alert(`No more questions, Your score is ${score}`);
  }
};

submitBtn.addEventListener("click", () => {
  if (selectedRadioBtn() === undefined) {
    alert(`Select option`);
  } else {
    points = selectedRadioBtn() === qanda[index].correct ? 10 : 0;
    storePoints.push(points);
    index++;
    showQue();
    console.log(`index : ${index}`);
    console.log(`points : ${storePoints}`);
  }
});

prevBtn.addEventListener("click", () => {
  if (index === 0) {
    disableBtnFunction(prevBtn);
    alert("This is the first question");
  } else {
    enableBtnFunction(submitBtn);
    enableBtnFunction(prevBtn);
    storePoints.pop();
    showQue(index--);
    console.log(`index : ${index}`);
    console.log(`points : ${storePoints}`);
  }
});

showQue();


