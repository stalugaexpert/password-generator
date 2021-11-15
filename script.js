const passwordEl = document.getElementById('password');
const passwordLengthEl = document.getElementById('length');
const copyBtn = document.getElementById('copy-btn');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const numberEl = document.getElementById('number');
const specialEl = document.getElementById('special');
const generateBtn = document.getElementById('generate-btn');

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const special = ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

const getLowercase = () =>
  lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

const getUppercase = () =>
  upperLetters[Math.floor(Math.random() * upperLetters.length)];

const getNumbers = () => numbers[Math.floor(Math.random() * numbers.length)];

const getSpecial = () => special[Math.floor(Math.random() * special.length)];

//console.log(getLowercase(), getUppercase(), getNumbers(), getSpecial());

function generatePassword() {
  let password = '';

  if (lowerEl.checked) {
    password += getLowercase();
  }

  if (upperEl.checked) {
    password += getUppercase();
  }

  if (numberEl.checked) {
    password += getNumbers();
  }

  if (specialEl.checked) {
    password += getSpecial();
  }

  for (let i = password.length; i < passwordLengthEl.value; i++) {
    const draw = generateDraw();
    password += draw;
  }
  passwordEl.innerText = password;
}

function generateDraw() {
  const x = [];

  if (lowerEl.checked) {
    x.push(getLowercase());
  }

  if (upperEl.checked) {
    x.push(getUppercase());
  }

  if (numberEl.checked) {
    x.push(getNumbers());
  }

  if (specialEl.checked) {
    x.push(getSpecial());
  }

  if (x.length === 0) {
    return '';
  }

  return x[Math.floor(Math.random() * x.length)];
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = passwordEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});
