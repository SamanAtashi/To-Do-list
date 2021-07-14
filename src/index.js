import "./style.css";

const list = [];

// iterate array and show them in html
let index = 1;

function Build() {
  const getAdd = document.getElementById("getAdd");

  list.push({
    description: getAdd.value,
    completed: false,
    index: index,
  });
  index++;

  console.log(list);
}

function showInList() {
  const getAdd = document.getElementById("getAdd");
  const show = document.getElementById("show");
  console.log(show);
  // add li element into the ul
  // add class of item to it as well
  const createLi = document.createElement("li");
  createLi.classList.add("item");

  const createCheckBox = document.createElement("input");
  createCheckBox.type = "checkbox";
  createCheckBox.name = "name";
  createCheckBox.id = "checkboxId";
  createCheckBox.classList.add("space-right");

  let createLabel = document.createElement("label");
  createLabel.htmlFor = "checkboxId";
  createLabel.appendChild(document.createTextNode(getAdd.value));

  createLi.appendChild(createCheckBox);
  createLi.appendChild(createLabel);
  show.appendChild(createLi);
}

const enterBtn = document.getElementById("getAdd");

enterBtn.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    // document.getElementById('myBtn').click();
    showInList();
    Build();
  }
});
