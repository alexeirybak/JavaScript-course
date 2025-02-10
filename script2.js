const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const age = document.getElementById("age");
const dateInput = document.getElementById("date");
// Функция для создания маски
const createNameMask = (element) => {
  return IMask(element, {
    mask: /^[А-Яа-яЁё\s]*$/, // Разрешаем только кириллицу и пробелы
    prepare: (value) => value, // Не изменяем регистр на этом этапе
    commit: (value, masked) => {
      // Приводим первую букву к верхнему регистру, остальные — к нижнему
      const formattedValue = value
        .toLowerCase()
        .replace(/(^|\s)[а-яё]/g, (char) => char.toUpperCase());
      masked._value = formattedValue; // Обновляем значение через masked._value
      return formattedValue;
    },
  });
};

createNameMask(firstName);

createNameMask(lastName);

IMask(age, {
  mask: Number,
  min: 0,
  max: 120,
});

IMask(emailInput, {
  mask: function () {
    // Разрешаем ввод любых символов, но проверяем на валидность email
    return true;
  },
  commit: (value, masked) => {
    // Проверяем, соответствует ли ввод формату email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      console.log("Некорректный email");
      // Можно очистить поле или вывести сообщение об ошибке
      masked._value = ""; // Очищаем поле (опционально)
    }
    return value;
  },
});

IMask(phone, { mask: "+{7}(000)000-00-00" });

IMask(dateInput, {
  mask: Date,
  pattern: "d{.}`m{.}`Y",
  autofix: true,
  lazy: false,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
      placeholderChar: "d",
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
      placeholderChar: "m",
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2050,
      maxLength: 4, 
      placeholderChar: "Y",
    },
  },
});
