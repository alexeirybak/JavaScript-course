document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  // Получение значений всех элементов формы
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const search = document.getElementById("search").value;
  const number = document.getElementById("number").value;
  const date = document.getElementById("date").value;
  const remember = document.getElementById("remember").checked;
  const gender = document.querySelector('input[name="gender"]:checked')
    ? document.querySelector('input[name="gender"]:checked').value
    : null; // Этот код ищет первый элемент <input> с атрибутом name="gender" и состоянием :checked (то есть выбранный элемент). Если такой элемент найден, он возвращается; если нет, возвращается null.
  const volume = document.getElementById("volume").value;
  const color = document.getElementById("color").value;
  const comment = document.getElementById("comment").value;
  const country = document.getElementById("country").value;
  const file = document.getElementById("file").files;

  // Создание массива для хранения имен файлов
  const fileNames = [];
  if (file.length > 0) {
    for (let i = 0; i < file.length; i++) {
      fileNames.push(file[i]);
    }
  }

  // Создание объекта для хранения всех значений
  const formData = {
    username,
    password,
    email,
    phone,
    search,
    number,
    date,
    remember,
    gender,
    volume,
    color,
    comment,
    country,
    files: fileNames,
  };

  // Очистка формы

  document.getElementById("myForm").reset();

  console.log(formData);
});
