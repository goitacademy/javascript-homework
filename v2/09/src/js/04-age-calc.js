const form = document.querySelector('.age-calculator');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { month, day, year } = form.elements;
  const birthDay = new Date(year.value, month.value, day.value);

  if (
    birthDay.getDate() != day ||
    birthDay.getMonth() != month ||
    birthDay.getFullYear() != year
  ) {
    return alert('Пожалуйста, введите правильную дату рождения');
  }

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);

  if (birthDay > today) {
    return alert('Вы из будущего или ещё не родились');
  }

  alert(Math.floor((today - birthDay) / 31556952000));
});
