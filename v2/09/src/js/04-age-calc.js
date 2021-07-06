const mSecondsPerYear = 31_556_952_000;
const form = document.querySelector('.age-calculator');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { month, day, year } = form.elements;
  const birthDay = new Date(year.value, month.value - 1, day.value);

  if (
    birthDay.getDate() != day.value ||
    birthDay.getMonth() != month.value - 1 ||
    birthDay.getFullYear() != year.value
  ) {
    return alert('Пожалуйста, введите правильную дату рождения');
  }

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);

  if (birthDay > today) {
    return alert('Вы из будущего, что за магия?');
  }

  alert(Math.floor((today - birthDay) / mSecondsPerYear));
  form.reset();
});
