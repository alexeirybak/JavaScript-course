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
  if (a.type === "аксессуары" && b.type === "велосипеды") return 1;
  if (a.type === "велосипеды" && b.type === "аксессуары") return -1;
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

function renderProducts(discountedProducts) {
  if (discountedProducts.length === 0) {
    productsContainer.innerHTML = "<p class='message'>Товар не найден</p>";
    return;
  }

  const productsHTML = discountedProducts
    .map((product) => {
      return `
  <div class="product">
        <h2>${product.name}</h2>
        <p><strong>Производитель:</strong> ${product.brand}</p>
        <img src="../img/${product.img}" alt="" />
        <p class="product-price">
          <strong>Цена:</strong>
          <span class="new-price">${product.newPrice} руб.</span>
        </p>
        ${
          product.price !== product.newPrice
            ? `<p class="product-old-price">
          <strong>Старая цена:</strong>
          <!--Не вставил старую цену в уроке ((-->
          <span class="old-price">${product.price} руб.</span>
        </p>`
            : ""
        }
        <p><strong>Цвет:</strong> ${product.color}</p>
        <p class="product-description">
          <strong>Описание:</strong> ${product.description}
        </p>
        ${
          product.size
            ? `<p class="product-size"><strong>Размер:</strong> M</p>`
            : ""
        }
        
        <p class="product-weight"><strong>Вес:</strong> ${product.weight} кг</p>
      </div>`;
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
  renderProducts(discountedProducts);
  hideLoader();
}, 2000);

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const searchQuery = searchInput.value.toLocaleLowerCase().trim();
  const foundProducts = discountedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  showLoader();

  setTimeout(() => {
    renderProducts(foundProducts);
    hideLoader();
  }, 2000);
}
