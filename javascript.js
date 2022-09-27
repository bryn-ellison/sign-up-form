const submit = document.querySelector("#submit-button");
const passField = document.querySelector("#password");
const confirmField = document.querySelector("#confirm_password");
const form = document.querySelector("#form");
const error = document.getElementById("error");

const errorMsg = document.createElement("p");
errorMsg.classList.add("error-msg");
errorMsg.textContent = "";
error.appendChild(errorMsg);

submit.addEventListener("click", () => {
  const password1Value = document.getElementById("password").value;
  const password2Value = document.getElementById("confirm_password").value;
  if (password1Value !== password2Value) {
    passField.classList.add("input-error");
    confirmField.classList.add("input-error");
    errorMsg.textContent = "* passwords do not match";
    return false;
  } else {
    if (error !== "") {
      errorMsg.textContent = "";
      passField.classList.remove("input-error");
      confirmField.classList.remove("input-error");
      form.requestSubmit();
    } else {
      form.requestSubmit();
    }
  }
});
