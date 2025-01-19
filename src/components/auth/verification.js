import { getUserInfo } from "../../utils/authHelper.js";

const checkUserVerification = async () => {
  try {
    const userInfo = await getUserInfo();
    console.log("User Info:", userInfo);

    if (!userInfo.emailVerified) {
      alert(
        "Ваш email не верифицирован. Пожалуйста, проверьте вашу почту и перейдите по ссылке для верификации."
      );
      // Здесь можно добавить логику для повторной отправки письма для верификации
    }
  } catch (error) {
    console.error(
      "Ошибка при получении информации о пользователе:",
      error.message
    );
  }
};

// Вызов функции проверки верификации
checkUserVerification();
