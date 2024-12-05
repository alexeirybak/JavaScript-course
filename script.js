const form = document.getElementById("myForm");
const dataInputs = form.querySelectorAll("input, select");
const yearSelect = form.querySelector("#year");
const passwordInput = form.querySelector("#password");
const repeatPasswordInput = form.querySelector("#repeatPassword");
const passwordErrorMessage = form.querySelector("#passwordError");
const confirmErrorMessage = form.querySelector("#confirm-password");
const requiredFieldsMessage = form.querySelector("#requiredFieldsMessage");
const successMessage = form.querySelector("#successMessage");
let validatePassword = false;
let passwordEqual = false;

const currentYear = new Date().getFullYear();
for (let year = currentYear; year > currentYear - 40; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.append(option);
}

dataInputs.forEach((dataInput, index) => {
  dataInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextIndex = (index + 1) % dataInputs.length;
      dataInputs[nextIndex].focus();
    }
  });
});

passwordInput.addEventListener("input", checkPasswordValidity);

function checkPasswordValidity() {
  checkPasswordMatch();
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordErrorMessage.style.display = "block";
    validatePassword = false;
  } else {
    passwordErrorMessage.style.display = "none";
    validatePassword = true;
  }
}

repeatPasswordInput.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
  if (passwordInput.value !== repeatPasswordInput.value) {
    confirmErrorMessage.style.display = "block";
    repeatPasswordInput.style.color = "red";
    passwordEqual = false;
  } else {
    confirmErrorMessage.style.display = "none";
    repeatPasswordInput.style.color = "green";
    passwordEqual = true;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const allFieldsFilled = Array.from(dataInputs).every((dataInput) =>
    dataInput.value.trim()
  );

  if (!allFieldsFilled || !passwordEqual || !validatePassword) {
    requiredFieldsMessage.style.display = "block";
    return;
  } else {
    requiredFieldsMessage.style.display = "none";
    const formData = new FormData(form);

    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    form.reset();

    console.log(JSON.stringify(formObject, null, 2));
    successMessage.style.display = "block";
  }
});
