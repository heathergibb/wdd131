const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    console.log(event);
    console.log("This is the log")
    const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey)

function logKey(e) {
    console.log(e);
}