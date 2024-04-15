const formEl = document.querySelector(".js-form");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
}
