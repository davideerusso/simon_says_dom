// TIMER

const countdown = document.getElementById("countdown");

let remainingMs = 3000;
let countdownIntervallId;

const updateTimer = () => {
  countdown.innerText = `${remainingMs / 1000}`;
};

const handleCountdown = () => {
  remainingMs -= 1000;
  updateTimer();
  if (remainingMs <= 0) {
    clearInterval(countdownIntervalId);
    countdown.innerText = "Tempo scaduto!";
    numbersList.classList.add("d-none");
    answersForm.classList.remove("d-none");
    instructions.innerHTML = "Scrivi i numeri che ti ricordi";
  }
};
const timer = () => {
  updateTimer();
  countdownIntervalId = setInterval(handleCountdown, 1000);
};

timer();
const instructions = document.getElementById("instructions");

// GENERARE 5 NUMERI RANDOM
let NumberRandom = [];
function GenerateArrayRandom() {
  for (let i = 0; i < 5; i++) {
    const numeroCasuale = Math.floor(Math.random() * 50) + 1;
    NumberRandom.push(numeroCasuale);
  }
  return NumberRandom;
}
GenerateArrayRandom();
console.log(NumberRandom);

const numbersList = document.getElementById("numbers-list");

for (let i = 0; i < NumberRandom.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = NumberRandom[i];
  numbersList.appendChild(li);
}

const answersForm = document.getElementById("answers-form");
const inputUno = document.getElementById("input-uno");
const inputDue = document.getElementById("input-due");
const inputTre = document.getElementById("input-tre");
const inputQuattro = document.getElementById("input-quattro");
const inputCinque = document.getElementById("input-cinque");
const message = document.getElementById("message");

let truecheck = 0;

answersForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userInput = [
    (numbersInputUno = inputUno.value),
    (numbersInputDue = inputDue.value),
    (numbersInputTre = inputTre.value),
    (numbersInputQuattro = inputQuattro.value),
    (numbersInputCinque = inputCinque.value),
  ];

  truecheck = 0;
  let correctNumber = [];
  userInput.forEach((userInput, i) => {
    if (parseInt(userInput) === NumberRandom[i]) {
      truecheck += 1;
      correctNumber.push(userInput);
    }
  });
  console.log(truecheck);

  console.log(numbersInputUno);
  console.log(numbersInputDue);
  console.log(numbersInputTre);
  console.log(numbersInputQuattro);
  console.log(numbersInputCinque);

  message.innerHTML = `${truecheck} numeri indovinati: ${correctNumber} `;
});

message.innerHTML = "clicca per vedere quanti numeri hai indovinato";
