// const body = document.querySelector(".body"); by class name
// const body = document.querySelector("#body"); by ID name
// const body = document.querySelector("body"); by tag name
const body = document.querySelector("body");
console.log(body);
const hex = document.querySelector(".hex");
console.log(hex);
const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  const randomColor = Math.random().toString(16).slice(2, 8);
  hex.innerHTML = "#" + randomColor;
  //   console.log(randomColor);
  body.style.backgroundColor = "#" + randomColor;
});
body.addEventListener("mousewheel", () => {
  const randomColor = Math.random().toString(16).slice(2, 8);
  hex.innerHTML = "#" + randomColor;
  //   console.log(randomColor);
  body.style.backgroundColor = "#" + randomColor;
});
