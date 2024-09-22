const capitalInput = document.getElementsByClassName("capitalInput")[0];
const checkButton = document.getElementsByClassName("checkButton")[0];
const showResult = document.getElementById("resultBlock");

checkButton.addEventListener("click", function () {
  let capital = capitalInput.value.toLowerCase().trim();
  switch (capital) {
    case "стамбул":
      showResult.innerHTML = "Крупный город, но не столица";
      showResult.style.backgroundColor = "red";
      break;
    case "анталия":
      showResult.innerHTML = "Это туристический центр, но не столица";
      showResult.style.backgroundColor = "red";
      break;
    case "памуккале":
      showResult.innerHTML = "Это памятник природы, а не город";
      showResult.style.backgroundColor = "red";
      break;
    case "анкара":
      showResult.innerHTML = "Верно";
      showResult.style.backgroundColor = "#078507";
      break;
    default:
      showResult.innerHTML = "Ну, это вряд ли!";
      showResult.style.backgroundColor = "red";
      break;
  }
});
