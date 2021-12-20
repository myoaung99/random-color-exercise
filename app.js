const body = document.querySelector("body");
const btn = document.querySelector("#btnChange");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
let rgb = [];

const makeRGB = () => {
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.round(Math.random() * 255));
  }
};

const changeText = () => {
  for (let i = 0; i < 3; i++) {
    h2.children[i].innerHTML = `${rgb[i]}`;
  }
};

const changeColor = () => {
  body.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
};

const clearRGB = () => {
  rgb.splice(0, 3);
};

btn.addEventListener("click", () => {
  clearRGB();
  makeRGB();
  changeText();
  changeColor();
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += rgb[i] + sum;
  }

  if (sum <= 60) {
    h1.style.color = "white";
    h2.style.color = "white";
  }
});
