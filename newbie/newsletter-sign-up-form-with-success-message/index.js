/** @type {HTMLDivElement} */
const slot = getById('info__slot');

[
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!'
].forEach(text => {
  const span = document.createElement('span');
  span.innerText = text;
  slot.appendChild(span);
});

/** @type {HTMLDivElement} */
const signUp = getById('sign-up');

/** @type {HTMLLabelElement} */
const formError = getById('form-message');

/** @type {HTMLDivElement} */
const successMessage = getById('success-message');

/** @type {HTMLSpanElement} */
const resultEmail = getById('result-email');

/** @type {HTMLFormElement} */
const form = getById('my-form');

/** @type {HTMLInputElement} */
const emailInput = form.elements['email'];

emailInput.addEventListener('invalid', function (ev) {
  ev.preventDefault();

  display(formError);
  this.classList.add('error-input');

  this.addEventListener('input', function (e) {
    e.preventDefault();

    hide(formError);
    this.classList.remove('error-input');
  }, { once: true });
});

form.addEventListener('submit', function (ev) {
  ev.preventDefault();

  resultEmail.innerText = emailInput.value;

  hide(signUp);
  display(successMessage);

  this.reset();
});

getById('success-button')
  .addEventListener('click', function (ev) {
    ev.preventDefault();

    hide(successMessage);
    display(signUp);
  });

/**
 * @param {string} id
 * @return {HTMLElement}
 */
function getById(id) {
  return document.getElementById(id);
}

/** @param {HTMLElement} element */
function display(element) {
  element.style.display = 'flex';
}

/** @param {HTMLElement} element */
function hide(element) {
  element.style.display = 'none';
}
