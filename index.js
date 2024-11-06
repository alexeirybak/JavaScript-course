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

// const formatNumber = (number) => String(number).padStart(2, "0");

// 4. Создаем функцию timer
const timer = (year, month, day, hours, minutes) => {
  // 6. Ищем месяц по индексу в массиве
  const monthIndex = monthNames.indexOf(month);

  // 7. Создаем объект Date, чтобы получить количество миллисекунд, которые пройдут с 1 января 1970 г. до момента, который будет определен как точка обратного отсчета
  const targetDate = new Date(year, monthIndex, day, hours, minutes);

  // 8. Текущее время
  const now = new Date();

  // 9. Вычисляем разницу в миллисекундах
  let timeLeft = targetDate - now;

  // 10. Если время уже прошло, выводим сообщение и завершаем функцию
  if (timeLeft <= 0) {
    alert("Время истекло!");
    return;
  }

  // 11. Запускаем интервал для обновления таймера каждую секунду
  const interval = setInterval(() => {
    timeLeft -= 1000;

    // 12. Вычисляем количество оставшихся дней, часов, минут и секунд
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    // 13. Часы получатся как остаток от деления количества всех миллисекунд на количество миллисекунд в сутках, поделенный на количество миллисекунд в часе
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    // 14.Минуты получатся как остаток от деления количества всех миллисекунд на количество миллисекунд в часе, поделенный на количество миллисекунд в минуте 
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    // 15.Секунды получатся как остаток от деления количества всех миллисекунд на количество миллисекунд в минуте, поделенный на 1000 
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 16. Форматируем числа, чтобы они всегда имели два символа
    const formattedDays = String(days).padStart(2, "0");
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    // const formattedDays = formatNumber(days);
    // const formattedHours = formatNumber(hours);
    // const formattedMinutes = formatNumber(minutes);
    // const formattedSeconds = formatNumber(seconds);

    // 17. Обновляем текст элементов DOM
    daysElement.textContent = formattedDays;
    hoursElement.textContent = formattedHours;
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;

    // 18. Если время истекло, останавливаем интервал и выводим сообщение
    if (timeLeft <= 0) {
      clearInterval(interval);
      alert("Время истекло!");
    }
  }, 1000);
};

// 2. Запрашиваем у пользователя год, месяц, дату и время через prompt
const year = prompt("Введите год:");
const month = prompt(
  "Введите месяц (например, 'Январь', 'Февраль' и т.д.):"
).toLowerCase();
const day = prompt("Введите число месяца:");
const time = prompt("Введите время в формате ЧЧ:ММ:");

// 3. Проверяем, что пользователь ввел данные
if (year && month && day && time) {
  const timeParts = time.split(":");
  const hours = timeParts[0];
  const minutes = timeParts[1];
  timer(year, month, day, hours, minutes);
} else {
  alert("Вы не ввели все необходимые данные.");
}
