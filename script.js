const img = document.createElement('img');
img.src = 'img/image.png';
img.alt = 'Рисунок';

document.body.append(img);

const block = document.getElementById('block');
const heading = document.createElement('h1');
heading.innerText = 'Привет, разработчики!';
heading.classList.add('heading');
block.append(heading);

let a = 5;
let b = 5;

if (a == b) {
  let c = a + b;
  console.log(c);
}

const initialArray = [];

const getArray = () => {
  const array = initialArray.push[1];
  console.log(array);
};

getArray();
