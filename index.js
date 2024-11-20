import { products1 } from "./data1.js";
import { products2 } from "./data2.js";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const productsContainer = document.getElementById("products-container");
const loader = document.getElementById("loader");

const data1 = JSON.parse(products1);
const data2 = JSON.parse(products2);

const allProducts = data1.concat(data2);

const sortedProducts = allProducts.sort((a, b) => {
  if (a.type === "велосипеды" && b.type === "аксессуары") return -1;
  if (a.type === "аксессуары" && b.type === "велосипеды") return 1;
  return 0;
});

const currentDate = new Date();

const discountedProducts = sortedProducts.map((product) => {
  const arrivalDate = new Date(product.arrival_date);
  const timeDifference = currentDate - arrivalDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let discountedPrice = product.price;

  if (daysDifference > 180) {
    discountedPrice *= 0.8;
  } else if (daysDifference > 90) {
    discountedPrice *= 0.9;
  }

  return {
    ...product,
    newPrice: discountedPrice,
  };
});

// Упорядочиваем id товаров

const productsWithNewIds = discountedProducts.map((product, index) => {
  return {
    ...product,
    id: index + 1,
  };
});

function renderProducts(productsWithNewIds) {
  if (productsWithNewIds.length === 0) {
    productsContainer.innerHTML = '<p class="message">Товар не найден</p>';
    return;
  }

  const productsHTML = productsWithNewIds
    .map((product) => {
      // Деструктурируем объект product
      const {
        name,
        brand,
        price,
        newPrice,
        color,
        description,
        quantity,
        size,
        weight,
        img,
      } = product;

      return `
      <div class="product">
          <h2>${name}</h2>
          <p><strong>Производитель:</strong> ${brand}</p>
          <img src="../img/${img}" alt="">
          <p class="product-price"><strong>Цена:</strong> <span class="new-price">${newPrice} руб.</span></p>
          <!--Старую цену (применение скидки) показываем только если товар, к которому применено снижение цены, есть на складе-->
          ${
            price !== newPrice && quantity
              ? `<p class="product-old-price"><strong>Старая цена:</strong> <span class="old-price">${price} руб.</span></p>`
              : ""
          }
          <p><strong>Цвет:</strong> ${color}</p>
          <p class="product-description"><strong>Описание:</strong> ${description}</p>
          <!--Если товар есть на складе, ничего не указываем, а если нет, выводим сообщение-->
          ${!quantity ? `<p><strong>Товар закончился</strong></p>` : ""}
          ${
            size
              ? `<p class="product-size"><strong>Размер:</strong> ${size}</p>`
              : ""
          }
          <p class="product-weight"><strong>Вес:</strong> ${weight} кг</p>
      </div>
    `;
    })
    .join("");

  productsContainer.innerHTML = productsHTML;
}

function showLoader() {
  loader.style.display = "block";
  productsContainer.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
  productsContainer.style.display = "flex";
}

showLoader();

setTimeout(() => {
  renderProducts(productsWithNewIds);
  hideLoader();
}, 2000);

function performSearch() {
  const searchQuery = searchInput.value.toLowerCase().trim();
  const foundProducts = productsWithNewIds.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  showLoader();

  setTimeout(() => {
    renderProducts(foundProducts);
    hideLoader();
  }, 2000);
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});
