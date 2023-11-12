const form = getById('my-form');

const dayInput = form.elements['day'];
const monthInput = form.elements['month'];
const yearInput = form.elements['year'];

const currentYear = new Date().getFullYear()
yearInput.setAttribute('max', currentYear);

const ERRORS = {
  day: {
    valueMissing: 'This field is required',
    rangeOverflow: 'Must be a valid day',
    default: 'Must be a valid day'
  },
  month: {
    valueMissing: 'This field is required',
    rangeOverflow: 'Must be a valid month',
    default: 'Must be a valid month'
  },
  year: {
    valueMissing: 'This field is required',
    rangeOverflow: 'Must be in the past',
    default: 'Must be a valid year'
  }
}

inspectError(dayInput, 'day');
inspectError(monthInput, 'month');
inspectError(yearInput, 'year');

form.addEventListener('submit', function (ev) {
  ev.preventDefault();

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1, day);

  const { days, months, years } = dateDiff(date);

  getById('years-result').innerText = `${years}`;
  getById('months-result').innerText = `${months}`;
  getById('days-result').innerText = `${days}`;
});

function dateDiff(date) {
  const diffMs = new Date().getTime() - date.getTime();

  const oneDayMs = 1000 * 60 * 60 * 24;
  const diffDays = diffMs / oneDayMs;

  return {
    years: Math.floor(diffDays / 365),
    months: Math.floor((diffDays % 365) / 30.44),
    days: Math.floor((diffDays % 365) % 30.44)
  };
}

function inspectError(ctx, key) {
  ctx.addEventListener('invalid', function (ev) {
    ev.preventDefault();

    const { valueMissing, rangeOverflow } = ev.target.validity;
    const span = getById(`${key}-error-msg`);

    if (valueMissing) span.innerText = ERRORS[key].valueMissing;
    else if (rangeOverflow) span.innerText = ERRORS[key].rangeOverflow;
    else span.innerText = ERRORS[key].default;

    getById(`${key}-field`).classList.add('invalid-state');

    this.addEventListener('input', function () {
      getById(`${key}-field`).classList.remove('invalid-state');
      span.innerText = '';
    }, { once: true });
  });
}

function getById(id) {
  return document.getElementById(id);
}
