export const showNotification = (message, type, customTitle) => {
  const titles = {
    error: "Ошибка!",
    success: "Успех!",
    warning: "Внимание!",
    info: "Информация",
  };

  const title = customTitle || titles[type] || "Уведомление";

  Swal.fire({
    title,
    text: message,
    icon: type,
    showConfirmButton: true,
    confirmButtonText: 'ОК'
  });
};

export const showError = (message) => {
  showNotification(message, "error", "Ошибка!");
};

export const showSuccess = (message) => {
  showNotification(message, "success");
};

export const showWarning = (message) => {
  showNotification(message, "warning");
};

export const showInfo = (message) => {
  showNotification(message, "info");
};

export const showConfirmation = async (
  message,
  customTitle = "Подтвердите действие"
) => {
  const result = await Swal.fire({
    icon: "question",
    title: customTitle,
    text: message,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Да",
    cancelButtonText: "Нет",
  });
  return result.isConfirmed;
};
