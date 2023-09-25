const scoreNumber = document.getElementById("scoreNumber");
const ennonce = document.querySelector(".ennonce");
const reponse = document.getElementById("reponse");
const correction = document.getElementById("correction");
const submitAction = document.getElementById("container");
let a = Math.floor(Math.random() * (1, 10)) + 1;
let b = Math.floor(Math.random() * (1, 10)) + 1;
ennonce.innerHTML = `Combien font ${a} fois ${b} ?`;
let bonneReponce = a * b;
let score = JSON.parse(localStorage.getItem("score"));
scoreNumber.innerHTML = score;

submitAction.addEventListener("submit", () => {
  let reponseValue = reponse.value;

  if (reponseValue == bonneReponce) {
    score++;
    updateLocalStorage();
  }
  else {
    score--;
    updateLocalStorage();
  }
  return;
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
