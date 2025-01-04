const people = [
  {
    name: "Михаил",
    age: 27,
    isMarried: true,
    hasCar: false,
  },
  {
    name: "Анна",
    age: 29,
    isMarried: true,
    hasCar: true,
  },
  {
    name: "Сергей",
    age: 33,
    isMarried: false,
    hasCar: false,
  },
  {
    name: "Елена",
    age: 26,
    isMarried: false,
    hasCar: true,
  },
];

const listElement = document.getElementById("list");
const moreInfo = document.querySelector(".know-more");

const renderPeople = () => {
  const peopleHtml = people
    .map((person, index) => {
      return `
    <li class='person'>
    <p>Имя: ${person.name}</p>
    <button data-age='${person.age}' data-status='${
        person.isMarried
      }' data-has-car='${person.hasCar}' data-position='${
        index + 1
      }'>Узнать больше</button>
    </li>
    `;
    })
    .join("");

  listElement.innerHTML = peopleHtml;
};

renderPeople();

const dataPeople = document.querySelectorAll("button");

dataPeople.forEach((dataPerson) => {
  dataPerson.addEventListener("click", () => {
    const age = dataPerson.dataset.age;
    const status = dataPerson.dataset.status === "true"; // Преобразуем строку в булево значение
    const car = dataPerson.dataset.hasCar === "true"; // Преобразуем строку в булево значение
    const position = dataPerson.dataset.position;

    moreInfo.innerHTML = "";

    moreInfo.insertAdjacentHTML(
      "beforeend",
      `<p>Место в списке: ${position}</p>
      <p>Возраст: ${age}</p>
      <p>Семейное положение: ${
        status ? "Женат/Замужем" : "Xолост/Незамужем"
      }</p>
      <p>Наличие машины: ${car ? "Да" : "Нет"}</p>
      <button id='close'>Закрыть</button>
      `
    );

    moreInfo.style.display = "block";

    document.getElementById("close").addEventListener("click", () => {
      moreInfo.innerHTML = "";
      moreInfo.style.display = "none";
    });
  });
});
