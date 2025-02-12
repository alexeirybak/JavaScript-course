const easeFunctions = {
  easeInQuad: function (t, b, c, d) {
    t /= d;
    return c * t * t + b;
  },
  easeOutQuad: function (t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  },
};

const moveTo = new MoveTo(
  { duration: 1000, easing: "easeInQuad" },
  easeFunctions
);

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => moveTo.registerTrigger(btn));

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.getElementById("persons");
  moveTo.move(target, {
    duration: 1000,
  });
});

const moveInBlock = new MoveTo();

const linkInBlock = document.querySelector(".scroll-link");
const scrollContainer = document.querySelector(".scroll-container");

linkInBlock.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.getElementById("section1");
  moveInBlock.move(target, {
    duration: 300,
    container: scrollContainer,
    callback: (target) => {
      target.classList.add("fade-in-animation");
    },
  });
});
