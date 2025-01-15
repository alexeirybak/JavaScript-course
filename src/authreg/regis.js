import { SUPABASE_URL } from "../../API/host.js";
import { SUPABASE_KEY } from "../../API/host.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log(123);

  const regButton = document.getElementById("signup-form");
  console.log(regButton);

  regButton.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("signup-email");
    const passwordInput = document.getElementById("signup-password");

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка регистрации");
      }

      const data = await response.json();
      console.log("Пользователь зарегистрирован:", data);
      alert("Регистрация прошла успешно!");
    } catch (error) {
      console.error("Ошибка регистрации:", error.message);
      alert("Ошибка регистрации: " + error.message);
    }
  });
});
console.log(regButton);
regButton.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ошибка регистрации");
    }

    const data = await response.json();
    console.log("Пользователь зарегистрирован:", data);
    alert("Регистрация прошла успешно!");
  } catch (error) {
    console.error("Ошибка регистрации:", error.message);
    alert("Ошибка регистрации: " + error.message);
  }
});
console.log(regButton);
