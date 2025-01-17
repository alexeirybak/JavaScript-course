import { getAuth, onAuthStateChanged } from "../firebaseConfig.js";

const auth = getAuth();

/**
 * Получает информацию о текущем авторизованном пользователе.
 * @returns {Promise<{ uid: string, token: string }>} Объект с uid и токеном пользователя.
 * @throws {Error} Если пользователь не авторизован.
 */
export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken(); // Получаем токен
          resolve({ uid: user.uid, token }); // Возвращаем объект с uid и токеном
        } catch (error) {
          reject(new Error("Не удалось получить токен."));
        }
      } else {
        reject(new Error("Пользователь не авторизован."));
      }
    });
  });
};
