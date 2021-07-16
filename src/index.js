import './style.css';
import { statusUpdate } from './statusUpdate.js';

function buildElementandShow() {
  const getAdd = document.getElementById('getAdd'); // grab input text
  const show = document.getElementById('show'); // grab ul

  const createLi = document.createElement('li');
  createLi.classList.add('item');

  const createCheckBox = document.createElement('input');
  createCheckBox.type = 'checkbox';
  createCheckBox.name = 'checkbox';
  createCheckBox.id = `item${globalIndex}`;

  createCheckBox.classList.add('space-right');
  createCheckBox.classList.add('checked');

  const createLabel = document.createElement('label');
  createLabel.htmlFor = 'checked';
  createLabel.appendChild(document.createTextNode(getAdd.value));

  show.appendChild(createLi);
  createLi.appendChild(createCheckBox);
  createLi.appendChild(createLabel);
}

export const list = [];

// eslint-disable-next-line import/prefer-default-export
export let globalIndex = 1;

function buildToPush() {
  const getAdd = document.getElementById('getAdd');

  list.push({
    description: getAdd.value,
    completed: false,
    globalIndex,
  });

  globalIndex += 1;
}

function storeLocally() {
  const stringifyList = JSON.stringify(list[globalIndex - 2]);
  localStorage.setItem(globalIndex - 1, stringifyList);
}

export function resultFunction() {
  const result = list.filter((obj) => obj.globalIndex === globalIndex - 1)[0];
  return result;
}

document.getElementById('getAdd').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    buildElementandShow();
    buildToPush();
    storeLocally();
  }
});

document.getElementById('getAdd-btn').addEventListener('click', () => {
  buildElementandShow();
  buildToPush();
  storeLocally();
});

document.getElementById('show').addEventListener('click', (e) => {
  if (e.target && e.target.id) {
    if (list.length > 0) {
      statusUpdate(e.target);
    }
  }
});
