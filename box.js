const btn = document.querySelector(".js-click");
const boxEl = document.querySelector(".box");

let step = 0;

btn.addEventListener("click", handleClick);

function handleClick() {
  step += 50;
  boxEl.style.marginTop = `${step}px`;
  boxEl.style.marginLeft = `${step}px`;
}
