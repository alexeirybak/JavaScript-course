import {
  auth,
  signInWithPopup,
  GoogleAuthProvider,
} from "../../firebaseConfig.js";

export async function signWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    if (result._tokenResponse.isNewUser) {
      console.log("Регистрация через Google прошла успешно");
    } else {
      console.log("Вход через Google выполнен успешно");
    }
  } catch (error) {
    console.error("Ошибка входа через Google: ", error.message);
  }
}
