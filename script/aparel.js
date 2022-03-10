const input = document.getElementById("email-input");

const button = document
  .getElementById("submit-button")
  .addEventListener("click", () => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    input.value.match(pattern) ? removeErrors() : displayError();
  });

function removeErrors() {
  return document.querySelectorAll(".visible").forEach((obj) => {
    obj.classList.remove("visible");
    obj.classList.add("invisible");
  });
}

function displayError() {
  return document.querySelectorAll(".invisible").forEach((obj) => {
    obj.classList.remove("invisible");
    obj.classList.add("visible");
  });
}