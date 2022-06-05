let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("li");

window.addEventListener("mousemove", cursorHandler);

function cursorHandler(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  console.log(link);
  link.addEventListener("mouseover", (e) => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", (e) => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});
