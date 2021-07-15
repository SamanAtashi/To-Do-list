import './style.css';

const list = [];

let index = 1;

function Build() {
  const getAdd = document.getElementById('getAdd');

  list.push({
    description: getAdd.value,
    completed: false,
    index,
  });

  index += 1;
}
console.log(list);
console.log(list.keys[0]);
console.log(window.localStorage.setItem(index, list[index]));

function showInList() {
  const getAdd = document.getElementById('getAdd');
  const show = document.getElementById('show');
  const createLi = document.createElement('li');
  createLi.classList.add('item');

  const createCheckBox = document.createElement('input');
  createCheckBox.type = 'checkbox';
  createCheckBox.name = 'name';
  createCheckBox.id = 'checkboxId';
  createCheckBox.classList.add('space-right');

  const createLabel = document.createElement('label');
  createLabel.htmlFor = 'checkboxId';
  createLabel.appendChild(document.createTextNode(getAdd.value));

  createLi.appendChild(createCheckBox);
  createLi.appendChild(createLabel);
  show.appendChild(createLi);
}

document.getElementById('getAdd').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    // document.getElementById('myBtn').click();
    showInList();
    Build();
  }
});

document.getElementById('getAdd-btn').addEventListener('click', () => {
  showInList();
  Build();
});
