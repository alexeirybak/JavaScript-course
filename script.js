// запоминаем область перетаскивания файлов
const dropFileZone = document.querySelector(".upload-zone__dragover");
// запоминаем инпут для выбора файлов
const uploadInput = document.getElementById("upload-form__file");
// запоминаем блок для выведения информации о загруженных файлах
const filesInfoElement = document.getElementById("file-info");
// Элемент для отображения информации о отправленных файлах
const filesSentElement = document.getElementById("files-sent");
// Элемент для отображения информации о файлах
const fileListElement = document.getElementById("file-list");
// запоминаем кнопку отправки
const submitButton = document.querySelector(".form-upload__submit");
 
// добавляем обработчик события для входа в зону перетаскивания файлов
dropFileZone.addEventListener("dragenter", () => {
  // добавляем класс стиля, красим форму
  dropFileZone.classList.add("active");
});
 
// добавляем обработчик события для выхода из зону перетаскивания файлов
dropFileZone.addEventListener("dragleave", () => {
  // возвращаем цвет неактивной формы
  dropFileZone.classList.remove("active");
});
 
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});
 
document.addEventListener("drop", (e) => {
  e.preventDefault();
});
 
["dragover", "drop"].forEach((event) => {
  document.addEventListener(event, (e) => {
    e.preventDefault();
  });
});
 
// добавляем обработчик события "drop" для зоны перетаскивания
dropFileZone.addEventListener("drop", (e) => {
  // останавливаем стандартное поведение браузера
  e.preventDefault();
  // удаляем класс активности при сбросе файлов
  dropFileZone.classList.remove("active");
  submitButton.style.display = "block";
  filesSentElement.style.display = "none";
  // получаем файлы из события
  console.log(e.dataTransfer.files);
  const files = e.dataTransfer.files;
  // проверяем, что файлы есть
  if (files.length > 0) {
    // сохраняем файлы в инпут
    saveFilesToInput(files);
    // отображаем информацию о файлах
    displayFilesInfo(files);
  }
});
 
// функция для сохранения файлов в инпут
function saveFilesToInput(files) {
  console.log(uploadInput.files);
  // Создаём временный массив для хранения всех файлов
  const allFiles = Array.from(uploadInput.files); // Получаем текущие файлы
  allFiles.push(...files); // Добавляем новые файлы
 
  // Создаём новый объект DataTransfer и добавляем все файлы туда
  // Объект DataTransfer используется для хранения данных, перетаскиваемых мышью во время операции drag and drop. Он может хранить от одного до нескольких элементов данных, вне зависимости от их типа.
  const tempInput = new DataTransfer();
  console.log(tempInput);
  allFiles.forEach((file) => tempInput.items.add(file));
 
  // Сохраняем файлы в uploadInput
  uploadInput.files = tempInput.files;
 
  // Логируем файлы, чтобы убедиться, что они добавлены
  console.log("Файлы добавлены в uploadInput:", uploadInput.files);
}
 
uploadInput.addEventListener("change", () => {
  // получаем файлы из инпута
  const files = uploadInput.files;
  // проверяем, что файлы есть
  if (files.length > 0) {
    // отображаем информацию о файлах
    displayFilesInfo(files);
  }
});
 
// функция для отображения информации о файлах
function displayFilesInfo(files) {
  filesInfoElement.style.display = "block";
  submitButton.style.display = "block";
  // перебираем файлы
  for (const file of files) {
    // создаем элемент списка
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>Загружен файл:</span> ${file.name}<br>
      <span>размером:</span> ${file.size} байт<br>
    `;
    // добавляем элемент в список
    fileListElement.append(listItem);
  }
}
 
// функция для очистки инпута с файлами
function clearUploadInput() {
  // создаем новый объект DataTransfer
  const tempInput = new DataTransfer();
  // очищаем инпут
  uploadInput.files = tempInput.files;
}
 
// добавляем обработчик события "click" для кнопки отправки
submitButton.addEventListener("click", (e) => {
  // блокируем стандартное поведение кнопки (отправку формы)
  e.preventDefault();
  // получаем файлы из инпута
  const files = uploadInput.files;
 
  // выводим сообщение об отправке
  filesSentElement.style.display = "block";
  submitButton.style.display = "none";
 
  // Создаем массив объектов с информацией о файлах
  const filesInfo = Array.from(files).map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type,
  }));
 
  // Выводим информацию о файлах в консоль
  console.log("Файлы отправлены:", filesInfo);
 
  // очищаем инпут с файлами
  clearUploadInput();
 
  // очищаем список файлов
  fileListElement.innerHTML = "";
  // скрываем блок с информацией о файлах
  filesInfoElement.style.display = "none";
  // Показываем сообщение об отправке файлов
  filesSentElement.style.display = "block";
});

