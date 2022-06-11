const toggle = document.querySelector(".toggle-container");
const button = document.querySelector(".toggle-button");
const position = button.style.left;

toggle.addEventListener("click", changeToggleState);

function changeToggleState() {
	button.classList.toggle("active");
	toggle.classList.toggle("active-container");
}
