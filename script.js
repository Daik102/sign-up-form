function toggleLogoColor() {
  if (!logo.classList.contains('light-purple-mode')) {
    face.classList.toggle('light-blue-border');
    chars.forEach((char) => char.classList.toggle('light-blue-color'));
    ears.forEach((ear) => ear.classList.toggle('light-blue-background'));
  } else {
    face.classList.toggle('light-blue-border');
    face.classList.toggle('light-purple-border');
    chars.forEach((char) => char.classList.toggle('light-blue-color'));
    chars.forEach((char) => char.classList.toggle('light-purple-color'));
    ears.forEach((ear) => ear.classList.toggle('light-blue-background'));
    ears.forEach((ear) => ear.classList.toggle('light-purple-background'));
  }
}

function toggleFormColor() {
  logo.classList.toggle('light-purple-mode');
  face.classList.toggle('light-purple-border');
  chars.forEach((char) => char.classList.toggle('light-purple-color'));
  ears.forEach((ear) => ear.classList.toggle('light-purple-background'));
  formHeader.classList.toggle('light-purple-color');
  labels.forEach((label) => label.classList.toggle('light-purple-color'));
  inputs.forEach((input) => input.classList.toggle('light-purple-background'));
  createBtn.classList.toggle('light-purple-color');
}

function toggleBtnColor() {
  createBtn.classList.toggle('create-btn-hover');
}

function checkValidity(e) {
  e.preventDefault();

  if (createBtn.classList.contains('created-successfully')) {
    return;
  }

  tel.setCustomValidity(tel.validity.patternMismatch ? 'Please fill out a 10 or 11 digit number.' : '');
  confirmPw.setCustomValidity(pw.value !== confirmPw.value ? 'The confirmed password is different from the original password.' : '');

  // Clear custom validity when it matches
  tel.addEventListener('input', () => {
    if (!tel.validity.patternMismatch) {
      tel.setCustomValidity('');
    }
  });

  confirmPw.addEventListener('input', () => {
    if (confirmPw.value === pw.value) {
      confirmPw.setCustomValidity('');
    }
  });

  const fields = [firstName, lastName, email, tel, pw, confirmPw];
  const invalidField = fields.find(field => !field.checkValidity());

  if (invalidField) {
    invalidField.reportValidity();
    return;
  }

  firstName.value = '';
  lastName.value = '';
  email.value = '';
  tel.value = '';
  pw.value = '';
  confirmPw.value = '';
  createBtn.classList.remove('create-btn-hover');
  createBtn.classList.add('created-successfully');
  createBtn.textContent = 'Created Successfully!';

  setTimeout(() => {
    createBtn.classList.remove('created-successfully');
    createBtn.textContent = 'Create Account';
  }, 3000);
}

const logo = document.querySelector('.logo');
const chars = document.querySelectorAll('.char');
const face = document.querySelector('.face');
const ears = document.querySelectorAll('.ear');
const form = document.querySelector('.form');
const formHeader = document.querySelector('.form-header');
const labels = document.querySelectorAll('.label');
const inputs = document.querySelectorAll('.input');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const pw = document.getElementById('pw');
const confirmPw = document.getElementById('confirm-pw');
const createBtn = document.querySelector('.create-btn');

logo.addEventListener('mouseenter', toggleLogoColor);
logo.addEventListener('mouseleave', toggleLogoColor);
logo.addEventListener('click', toggleFormColor);
createBtn.addEventListener('mouseenter', toggleBtnColor);
createBtn.addEventListener('mouseleave', toggleBtnColor);
form.addEventListener('submit', checkValidity);
