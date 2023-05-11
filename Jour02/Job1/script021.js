document.querySelector('#button').addEventListener('click', citation);

function citation() {
  let citationText = document.querySelector('#citation').textContent;
  console.log(citationText);
}