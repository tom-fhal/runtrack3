let button = document.querySelector("#myButton");
let text = document.querySelector("#text");

button.addEventListener("click", function() {
 text.innerHTML = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";
});

$("#hideButton").click(function(){
  $("#text").hide();
});
