const form = document.querySelector(".js-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  console.log(event);

  // const info = {
  //   email: elements.email.value,
  //   password: elements.password.value,
  //   comment: elements.comment.value,
  // };
  // console.log(info);
  // event.target.reset();
}
