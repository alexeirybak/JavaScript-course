export const quiz = {
  questions: [
    {
      id: 1,
      question: "Что такое свойство объекта в JavaScript?",
      options: ["Строка", "Число", "Пара ключ-значение", "Массив"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "В каком выражении присутствует опциональная цепочка?",
      options: [
        "user.contacts.phone",
        "user.contacts??.phone",
        "user.contacts?.phone",
        "user.contacts.phone()",
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Оператор for...in предназначен для обхода:",
      options: [
        "массивов",
        "регулярных выражений",
        "объектов",
        "многомерных массивов",
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "С какими операторами нет работает forEach?",
      options: ["break", "return", "continue", "со всеми перечисленными"],
      correctAnswer: 3,
    },
    {
      id: 5,
      question: "Как добавить элемент в конец массива?",
      options: [
        "array.push(element)",
        "array.add(element)",
        "array.append(element)",
        "array.insert(element)",
      ],
      correctAnswer: 0,
    },
    {
      id: 6,
      question: "Как получить длину массива?",
      options: ["array.length()", "array.size", "array.count", "array.length"],
      correctAnswer: 3,
    },
    {
      id: 7,
      question: "Как удалить последний элемент из массива?",
      options: [
        "array.pop()",
        "array.remove()",
        "array.delete()",
        "array.shift()",
      ],
      correctAnswer: 0,
    },
    {
      id: 8,
      question: `Как получить номер группы Ивана Петрова? 
<p>const students = [</p>
  <p class="question-item">["Сергей Лобанов", true, 521301],</p>
  <p class="question-item">["Юлия Трофимова", true, 521401],</p>
  <p class="question-item">["Иван Петров", false, 521201],</p>
  <p class="question-item">["Мария Сидорова", false, 521101],</p>
<p>];</p>`,
      options: [
        "students.Object.key()",
        "students.Object.key(3);",
        "students[2][2];",
        "students[1][2];",
      ],
      correctAnswer: 2,
    },
    {
      id: 9,
      question: "Какой метод используется для объединения двух массивов?",
      options: [
        "array.concat()",
        "array.merge()",
        "array.join()",
        "array.combine()",
      ],
      correctAnswer: 0,
    },
    {
      id: 10,
      question: "Как удалить элемент из массива по индексу?",
      options: [
        "array.remove(index)",
        "array.splice(index, 1)",
        "array.delete(index)",
        "array.pop(index)",
      ],
      correctAnswer: 1,
    },
    {
      id: 11,
      question:
        "Какой метод используется для преобразования массива в строку с разделителем?",
      options: [
        "array.join()",
        "array.toString()",
        "array.split()",
        "array.combine()",
      ],
      correctAnswer: 0,
    },
    {
      id: 12,
      question: "Как проверить, является ли переменная массивом?",
      options: [
        "Array.isArray(variable)",
        "variable.isArray()",
        "typeof variable === 'array'",
        "variable instanceof Array",
      ],
      correctAnswer: 0,
    },
    {
      id: 13,
      question:
        "Какой метод используется для получения массива значений перечисляемых свойств объекта?",
      options: [
        "Object.key()",
        "Object.keys()",
        "Object.entries",
        "Object.values()",
      ],
      correctAnswer: 3,
    },
    {
      id: 14,
      question:
        "Какой метод объекта используется для получения всех ключей объекта?",
      options: [
        "Object.keys()",
        "Object.values()",
        "Object.entries()",
        "Object.getKeys()",
      ],
      correctAnswer: 0,
    },
    {
      id: 15,
      question: "Какой метод массива используется для фильтрации элементов?",
      options: [
        "array.filter()",
        "array.find()",
        "array.search()",
        "array.select()",
      ],
      correctAnswer: 0,
    },
    {
      id: 16,
      question: "Какой метод используется для вызова ошибки в JavaScript?",
      options: [
        "throw new Error()",
        "raise Error()",
        "create Error()",
        "new Error()",
      ],
      correctAnswer: 0,
    },
    {
      id: 17,
      question: "Какой метод используется для обработки ошибок в JavaScript?",
      options: ["if...else", "switch...case", "while...do", "try...catch"],
      correctAnswer: 3,
    },
    {
      id: 18,
      question:
        "Какой метод используется для поиска совпадения в строке с помощью регулярного выражения?",
      options: [
        "string.indexOf()",
        "string.concat()",
        "string.match()",
        "string.find()",
      ],
      correctAnswer: 2,
    },
    {
      id: 19,
      question:
        "Какой метод используется для замены части строки с помощью регулярного выражения?",
      options: [
        "string.substitute()",
        "string.replace()",
        "string.change()",
        "string.modify()",
      ],
      correctAnswer: 1,
    },
    {
      id: 20,
      question:
        "Какой флаг регулярного выражения используется для игнорирования регистра?",
      options: ["g", "i", "m", "s"],
      correctAnswer: 1,
    },
  ],
};
