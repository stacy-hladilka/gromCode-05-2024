// // так можно получить данные формы - ВАРИАНТ 1:
// // eslint-disable-next-line no-undef
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// // более простой формат считывания формы - ВАРИАНТ 2:
// // const formData = Object.fromEntries(new FormData(formElem));

const form = document.querySelector(".login-form");
const errorTextEmail = document.querySelector(".error-text_email");
const errorTextPassword = document.querySelector(".error-text_password");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const isRequired = (value) => (value ? undefined : "Required");
const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};
const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};

const onEmailChange = (event) => {
  const errorResult = validate("email", event.target.value);

  errorTextEmail.textContent = errorResult;
};

const onPasswordChange = (event) => {
  const errorResult = validate("password", event.target.value);

  errorTextPassword.textContent = errorResult;
};

emailInput.addEventListener("input", onEmailChange);
passwordInput.addEventListener("input", onPasswordChange);

const handleSubmitForm = (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(form));

  alert(JSON.stringify(formData));
};

form.addEventListener("submit", handleSubmitForm);
