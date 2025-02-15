const toggler = document.getElementById("toggler");

const form = document.querySelector("form");

toggler.addEventListener("click", handleClick);

function handleClick() {
  if (form.style.opacity === "0") {
    anime({
      targets: ".reg-form",
      opacity: 1,
      height: form.scrollHeight,
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: toggler,
      color: "#ff5722",
      rotate: "360deg",
      scale: 1.5,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  } else {
    anime({
      targets: form,
      opacity: 0,
      height: 0,
      duration: 1000,
      easing: "easeOutExpo",
    });
    anime({
      targets: toggler,
      color: "#123c69",
      rotate: "0deg",
      scale: 1,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }
}
