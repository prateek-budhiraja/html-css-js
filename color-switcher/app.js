var button = document.querySelector("button");
var body = document.querySelector("body");
var hex = document.querySelector(".color");

const colors = [
	"#f6abb6",
	"#03396c",
	"#6497b1",
	"#dec3c3",
	"#fe8a71",
	"#54b2a9 ",
	"#D6A2E8",
	"#82589F",
	"#40407a",
	"#ff5252",
];

button.addEventListener("click", colorChanger);

function colorChanger(e) {
	let color = Math.floor(Math.random() * colors.length);
	hex.innerHTML = colors[color];
	hex.style.color = colors[color];
	body.style.backgroundColor = colors[color];
}
