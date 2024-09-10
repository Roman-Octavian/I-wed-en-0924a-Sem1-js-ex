const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const error = document.getElementById('error');
const success = document.getElementById('success');
const submit = document.getElementById('submit');

nameInput.addEventListener('focus', () => {
  error.style.display = 'none';
  success.style.display = 'none';
});

emailInput.addEventListener('focus', () => {
  error.style.display = 'none';
  success.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (nameInput.value == null || nameInput.value === '') {
    error.textContent = `'${nameInput.value}' is not a valid name`;
    error.style.display = 'inherit';
    return;
  }

  if (
    nameInput.value.toLowerCase().includes('france') ||
    nameInput.value.toLowerCase().includes('french')
  ) {
    error.textContent = `PROFANITY DETECTED!\n'${nameInput.value}' contains profanity`;
    error.style.display = 'inherit';
    return;
  }

  const localStorageName = localStorage.getItem('name');

  if (nameInput.value === localStorageName) {
    error.textContent = `'${localStorageName}' is your name already`;
    success.style.display = 'none';
    error.style.display = 'inherit';
    return;
  }

  if (!emailInput.value.includes('@cphbusiness.dk')) {
    error.textContent = `'${emailInput.value}' is invalid. Only "cphbusiness.dk" mails are allowed`;
    success.style.display = 'none';
    error.style.display = 'inherit';
    return;
  }

  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
  success.textContent = `Name and email set to "${nameInput.value}" and "${emailInput.value}" respectively`;
  success.style.display = 'inherit';
});
