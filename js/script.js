const form = document.getElementById('form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const expressions = {
  empty: /^[^]+$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function validateForm() {
  let isValid = true;

  if (!expressions.empty.test(firstName.firstElementChild.value.trim())) {
    firstName.classList.add('form__field--error');
    firstName.firstElementChild.placeholder = '';
    isValid = false;
  }
  if (!expressions.empty.test(lastName.firstElementChild.value.trim())) {
    lastName.classList.add('form__field--error');
    lastName.firstElementChild.placeholder = '';
    isValid = false;
  }
  if (!expressions.email.test(email.firstElementChild.value.trim())) {
    email.classList.add('form__field--error');
    email.firstElementChild.placeholder = 'email@example/com';
    isValid = false;
  }
  if (!expressions.empty.test(password.firstElementChild.value.trim())) {
    password.classList.add('form__field--error');
    password.firstElementChild.placeholder = '';
    isValid = false;
  }
  if (isValid) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    // envio de datos
    form.reset();
  }
});
firstName.firstElementChild.addEventListener('focus', () => {
  firstName.classList.remove('form__field--error');
  firstName.firstElementChild.placeholder = 'First name';
});
lastName.firstElementChild.addEventListener('focus', () => {
  lastName.classList.remove('form__field--error');
  lastName.firstElementChild.placeholder = 'Last name';
});
email.firstElementChild.addEventListener('focus', () => {
  email.classList.remove('form__field--error');
  email.firstElementChild.placeholder = 'Email Address';
});
password.firstElementChild.addEventListener('focus', () => {
  password.classList.remove('form__field--error');
  password.firstElementChild.placeholder = 'Password';
});
