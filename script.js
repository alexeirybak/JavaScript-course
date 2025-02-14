const imgs = document.querySelectorAll("img, iframe");

imgs.forEach((img, index) => {
  img.classList.add("lazyload");
  const src = img.getAttribute("src");
  img.setAttribute("data-src", src);
  img.removeAttribute("src");
  img.style.width = "500px";
  img.style.height = "300px";
  img.setAttribute("data-expand", "-100");
  if (index % 2 === 0) {
    img.classList.add("blur-up-right");
  } else {
    img.classList.add("blur-up-left");
  }
});
