"use strict";
const submit = document.querySelector(".submit");
const email = document.querySelector(".input-email");
const invalidPara = document.querySelector(".para-invalid");
const successModal = document.querySelector(".modal-container");
const container = document.querySelector(".container");
const btnDismiss = document.querySelector(".btn-dismiss");
const successMail = document.querySelector(".success");
let validity = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//Starting Conditions
invalidPara.classList.add("hidden");
submit.addEventListener("click", function () {
  //console.log(email.value);
  if (!validateEmail(email.value)) {
    email.classList.add("invalid");
    invalidPara.classList.remove("hidden");
  } else {
    successModal.classList.remove("hidden");
    container.classList.add("hidden");
    successMail.textContent = email.value;
  }
});
const validateEmail = function (mail) {
  if (validity.test(mail) === true) {
    return true;
  } else {
    return false;
  }
};

btnDismiss.addEventListener("click", function () {
  successModal.classList.add("hidden");
  container.classList.remove("hidden");
  window.location.reload();
});
