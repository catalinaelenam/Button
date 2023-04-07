const btn = document.getElementById('btn');

let index = 0;
const colors = ['yellow', 'green', 'red'];


btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});

function changeColor() {
    btn.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
}

setInterval(changeColor, 10000);
