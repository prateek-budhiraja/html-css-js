var width = window.innerWidth - 100;
var height = window.innerHeight - 50;

const btn = document.getElementsByClassName("button");
btn[0].addEventListener("mouseover", () => {
	btn[0].style.top = Math.floor(Math.random() * height) + "px";
	btn[0].style.left = Math.floor(Math.random() * width) + "px";
});
