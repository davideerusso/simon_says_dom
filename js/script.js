// TIMER

const countdown = document.getElementById("countdown");

let remainingMs = 30000;
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
  }
};
const timer = () => {
  updateTimer();
  countdownIntervalId = setInterval(handleCountdown, 1000);
};

timer();

// GENERARE 5 NUMERI RANDOM
let NumberRandom = [];
function GenerateArrayRandom() {
  for (let i = 0; i < 4; i++) {
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

const numeroCasuale = Math.floor(Math.random() * 50) + 1;

const li = document.createElement("li");
li.innerHTML = numeroCasuale;
numbersList.appendChild(li);

const RandomUno = Math.round(Math.random() * 50 + 1);
countdown.innerText = "Tempo scaduto!";

const answersForm = document.getElementById("answers-form");
const inputUno = document.getElementById("input-uno");
const inputDue = document.getElementById("input-due");
const inputTre = document.getElementById("input-tre");
const inputQuattro = document.getElementById("input-quattro");
const inputCinque = document.getElementById("input-cinque");

answersForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const numbersInputUno = inputUno.value;
  const numbersInputDue = inputDue.value;
  const numbersInputTre = inputTre.value;
  const numbersInputQuattro = inputQuattro.value;
  const numbersInputCinque = inputCinque.value;

  console.log(numbersInputUno);
  console.log(numbersInputDue);
  console.log(numbersInputTre);
  console.log(numbersInputQuattro);
  console.log(numbersInputCinque);
});
