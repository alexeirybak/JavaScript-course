// 1. Получаем элементы DOM для отображения времени
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// 5. Создаем массив месяцев, чтобы вводимый пользователем месяц преобразовать в числовой формат
const monthNames = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const formatNumber = (number) => String(number).padStart(2, "0");

const timer = (year, month, day, hours, minutes) => {
  const monthIndex = monthNames.indexOf(month);

  const targetDate = new Date(year, monthIndex, day, hours, minutes);

  const now = new Date();

  let timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    alert("Время истекло!");
    return;
  }

  const interval = setInterval(() => {
    timeLeft -= 1000;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedDays = formatNumber(days);
    const formattedHours = formatNumber(hours);
    const formattedMinutes = formatNumber(minutes);
    const formattedSeconds = formatNumber(seconds);

    daysElement.textContent = formattedDays;
    hoursElement.textContent = formattedHours;
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;

    if (timeLeft <= 0) {
      clearInterval(interval);
      alert("Время истекло!");
    }
  }, 1000);
};

const year = prompt("Введите год:").trim();
const month = prompt(
  "Введите месяц (например, 'Январь', 'Февраль' и т.д.):"
).toLowerCase().trim();
const day = prompt("Введите число месяца:").trim();
const time = prompt("Введите время в формате ЧЧ:ММ:").trim();

if (year && month && day && time) {
  const timeParts = time.split(":");
  const hours = timeParts[0];
  const minutes = timeParts[1];
  timer(year, month, day, hours, minutes);
} else {
  alert("Вы не ввели все необходимые данные.");
}
