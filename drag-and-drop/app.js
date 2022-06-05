var draggables = document.querySelectorAll(".draggable");
var containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
	draggable.addEventListener("dragstart", (e) => {
		draggable.classList.add("dragging");
	});
	draggable.addEventListener("dragend", (e) => {
		draggable.classList.remove("dragging");
	});
});

containers.forEach((container) => {
	container.addEventListener("dragover", (e) => {
		e.preventDefault();
	});
	container.addEventListener("drop", (e) => {
		const item = document.querySelector(".dragging");
		container.appendChild(item);
	});
});
