import { auth, onAuthStateChanged } from "../firebaseConfig.js";

/**
 * Получает информацию о текущем авторизованном пользователе
 * @returns {Promise<{uid: string, token: string}} Объект с uid и токеном пользователя
 * @throws {Error} Если пользователь не авторизован
 */

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          resolve({ uid: user.uid, token, emailVerified: user.emailVerified });
        } catch (error) {
          reject(new Error("Не удалось получить token"));
        }
      } else {
        reject(new Error("Пользователь не авторизован"));
      }
    });
  });
};
