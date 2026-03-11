function handleLogoEnter() {
  if (logo.classList.contains('light-blue-mode')) {
    face.classList.add('light-blue-border');
    chars.forEach((char) => char.classList.add('light-blue-color'));
    ears.forEach((ear) => ear.classList.add('light-blue-background'));
  } else {
    face.classList.add('light-purple-border');
    chars.forEach((char) => char.classList.add('light-purple-color'));
    ears.forEach((ear) => ear.classList.add('light-purple-background'));
  }
}

function handleLogoLeave() {
  face.classList.remove('light-blue-border', 'light-purple-border');
  chars.forEach((char) => char.classList.remove('light-blue-color', 'light-purple-color'));
  ears.forEach((ear) => ear.classList.remove('light-blue-background', 'light-purple-background'));
}

function changeNeonColor() {
  if (logo.classList.contains('light-blue-mode')) {
    logo.classList.replace('light-blue-mode', 'light-purple-mode');
    face.classList.add('light-purple-border');
    chars.forEach((char) => char.classList.add('light-purple-color'));
    ears.forEach((ear) => ear.classList.add('light-purple-background'));
    formHeader.classList.add('light-purple-color');
    labels.forEach((label) => label.classList.add('light-purple-color'));
    inputs.forEach((input) => input.classList.add('light-purple-background'));
    createBtn.classList.add('light-purple-color');
  } else {
    logo.classList.replace('light-purple-mode', 'light-blue-mode');
    face.classList.replace('light-purple-border', 'light-blue-border');
    chars.forEach((char) => char.classList.replace('light-purple-color', 'light-blue-color'));
    ears.forEach((ear) => ear.classList.replace('light-purple-background', 'light-blue-background'));
    formHeader.classList.replace('light-purple-color', 'light-blue-color');
    labels.forEach((label) => label.classList.replace('light-purple-color', 'light-blue-color'));
    inputs.forEach((input) => input.classList.replace('light-purple-background', 'light-blue-background'));
    createBtn.classList.replace('light-purple-color', 'light-blue-color');
  }
}

function handleBtnEnter() {
  createBtn.classList.add('create-btn-hover');
}

function handleBtnLeave() {
  createBtn.classList.remove('create-btn-hover');
}

function checkValidity() {
  if (createBtn.classList.contains('created-successfully')) {
    return;
  }

  if (firstName.validity.valueMissing) {
    firstName.reportValidity();
    return;
  } else if (lastName.validity.valueMissing) {
    lastName.reportValidity();
    return;
  } else if (email.validity.valueMissing) {
    email.reportValidity();
    return;
  } else if (email.validity.typeMismatch) {
    email.reportValidity();
    return;
  } else if (tel.validity.valueMissing) {
    tel.reportValidity();
    return;
  } else if (tel.validity.patternMismatch) {
    tel.setCustomValidity('Please fill out a 10 or 11 digit number.');
    tel.reportValidity();
    return;
  } else if (pw.validity.valueMissing) {
    pw.reportValidity();
    return;
  } else if (pw.validity.tooShort) {
    pw.reportValidity();
    return;
  } else if (confirmPw.validity.valueMissing) {
    confirmPw.reportValidity();
    return;
  } else if (confirmPw.validity.tooShort) {
    confirmPw.reportValidity();
    return;
  } else if (pw.value !== confirmPw.value) {
    confirmPw.setCustomValidity('The confirmed password is different from the original password.');
    confirmPw.reportValidity();
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

logo.addEventListener('mouseenter', handleLogoEnter);
logo.addEventListener('mouseleave', handleLogoLeave);
logo.addEventListener('click', changeNeonColor);
createBtn.addEventListener('mouseenter', handleBtnEnter);
createBtn.addEventListener('mouseleave', handleBtnLeave);
createBtn.addEventListener('click', checkValidity);
