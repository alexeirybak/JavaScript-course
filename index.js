function addNotification(message) {
  const notificationsDiv = document.getElementById("notifications");
  notificationsDiv.textContent = message;
}

function uploadCompleted() {
  addNotification("Загрузка файла успешно завершена");

  addNotification("Файл обрабатывается...");
  setTimeout(() => {
    addNotification("Файл обработан");
    addNotification("Сохранение файла...");
    
    setTimeout(() => {
      addNotification("Файл успешно сохранен и готов к использованию");
    }, 2000);
  }, 2000);
}

function startUpload(callback) {
  addNotification("Файл загружается...");

  document.getElementById("progressBar").style.display = "block";

  let progress = 0;

  const intervalId = setInterval(() => {
    const increment = Math.floor(Math.random() * 6) + 5;
    progress += increment;

    if (progress >= 100) {
      progress = 100;
    }

    document.getElementById("progressFill").style.width = `${progress}%`;
    document.getElementById(
      "progressText"
    ).textContent = `Прогресс: ${progress}%`;

    if (progress >= 100) {
      clearInterval(intervalId);
      addNotification("Загрузка файла завершена");

      document.getElementById("progressBar").style.display = "none";
      document.getElementById("progressText").style.display = "none";

      if (callback) {
        callback();
      }
    }
  }, 1000);
}

startUpload(uploadCompleted);
