const newspaper = {
  sports: 'Сколько "стоит" футболист?',
  sportsWriters: ["Евгений Лодыгин", "Михаил Старков", "Жанна Ларионова"],
  business: "Банкроство или кредитное рабство?",
  businessWriters: ["Роман Цветков", "Ибрагим Мамедов", "Владимир Левин"],
  health: "Жиросжигатель из сладкого?",
  healthWriters: ["Ирина Волан", "Екатерина Заостровцева", "Тимур Голаев"],
};

// Преобразование объекта
const transformedNewspaper = {};

Object.keys(newspaper).forEach((key) => {
  // Используем метод Object.keys(newspaper) для получения массива ключей исходного объекта.
  if (key.endsWith("Writers")) {
    //Перебираем ключи и проверяем, заканчивается ли ключ на Writers.
    const section = key.slice(0, -7); // Если ключ заканчивается на Writers, извлекаем соответствующий раздел, удаляя последние 7 символов (Writers) с помощью метода slice(0, -7).
    transformedNewspaper[section] = { // Создаем объект для каждого раздела с двумя свойствами: title (заголовок статьи) и writers (массив авторов).
      // transformedNewspaper.sports = {
      //title: 'Сколько "стоит" футболист?',
      //writers: ["Евгений Лодыгин", "Михаил Старков", "Жанна Ларионова"],
      title: newspaper[section],
      writers: newspaper[key],
    };
  }
});

console.log(transformedNewspaper);

// Вывод информации о разделах и их авторах 
Object.entries(transformedNewspaper).forEach(([section, info]) => { // Используем метод Object.entries() для перебора пар [ключ, значение] объекта transformedNewspaper и вывода информации о каждом разделе.
  console.log(`Раздел: ${section}`);
  console.log(`Заголовок: ${info.title}`);
  console.log(`Авторы: ${info.writers}`);
  console.log("---");
});
