const request = new Promise((resolve, reject) => {
  const success = 0.9; // Меняйте значение, например, 0,4, 0.6, 0.9
  if (success > 0.5) {
    resolve(success);
  } else {
    reject("Ошибка на первом этапе");
  }
});

request
  .then((result) => {
    console.log("Первый then:", result);
    if (result < 0.7) {
      throw new Error("Ошибка во втором then");
    }
    return result * 2;
  })
  .then((result) => {
    console.log("Второй then:", result);
    return result * 2;
  })
  .catch((error) => {
    console.error("Первый catch:", error);
    return "Значение по умолчанию"; // Возвращаем значение для продолжения
  })
  .then((result) => {
    console.log("Третий then:", result);
    throw new Error("Ошибка в третьем then"); // Пробрасываем новую ошибку
  })
  .catch((error) => {
    console.error("Второй catch:", error.message);
    return "Новое значение по умолчанию"; // Возвращаем значение для продолжения
  })
  .then((result) => {
    console.log("Четвертый then:", result);
  });
