const toggle = document.querySelector(".container");
const button = document.querySelector(".button");
const position = button.style.left;

toggle.addEventListener("click", changeToggleState);

function changeToggleState() {
	button.classList.toggle("active");
}
