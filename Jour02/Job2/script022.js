var btnCallFunction = document.getElementById("button");
var text = document.getElementById("citation");

function showhide() {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

btnCallFunction.addEventListener("click", showhide);