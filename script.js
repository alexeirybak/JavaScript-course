const img = document.createElement('img');
img.src = 'img/image.png';
img.alt = 'Рисунок';

document.body.append(img);

const block = document.getElementById('block');
const heading = document.createElement('h1');
heading.innerText = 'Привет, разработчики!';
heading.classlist.add('heading');
block.append(heading);
