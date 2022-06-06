const btn = document.querySelector(".btn");
const more = document.querySelector(".more-content");
const dots = document.querySelector(".dots");

btn.addEventListener("click", clickHandler);

function clickHandler() {
	dots.classList.toggle("hidden");
	more.classList.toggle("hidden");
	if (btn.innerHTML === "READ MORE") btn.innerHTML = "READ LESS";
	else btn.innerHTML = "READ MORE";
}
