const cal = document.getElementById("cal");
cal.addEventListener("click", () => {
  const output = document.getElementById("tip");
  const input = document.getElementById("input");
  const result = (input.value * 0.15).toFixed(2);
  output.innerHTML = `<h1>You should pay ₹${result} tip for your ₹${input.value} order.</h1>`;
});
