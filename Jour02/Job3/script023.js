let click = 0;

function addone() {
  click++;
  document.querySelector("#compteur").textContent = click;
}

document.querySelector("#button").addEventListener("click", addone);