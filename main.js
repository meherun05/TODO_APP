let form = document.getElementById("form");
let taskName = document.getElementById("taskName");
let msg = document.getElementById("msg");
let date = document.getElementById("date");
let desc = document.getElementById("desc");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = (e) => {
  if (taskName.value === "") {
    msg.innerHTML =
      "<span style= 'color:red'>Task Title can't be empty!</span>";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["title"] = taskName.value;
  data["date"] = date.value;
  data["desc"] = desc.value;
  createTasks();
  add.setAttribute("data-bs-dismiss", "modal");
  add.click();
  (() => {
    add.setAttribute("data-bs-dismiss", "");
  })();
  resetForm();
};

let createTasks = () => {
  tasks.innerHTML += `
  <div>
  <span class="fw-bold">${data.title}</span>
  <span class="small text-secendory">${data.date}</span>
  <p>${data.desc}</p>
  <span class="actions">
      <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square" style="color: rgb(42, 106, 245);"></i>
      <i onClick ="deleteTask(this)" class="fa-solid fa-trash" style="color: tomato;"></i>
  </span>
</div>
  `;
};

let resetForm = () => {
  taskName.value = "";
  date.value = "";
  desc.value = "";
};

let editTask = (e) => {
  let selectedElement = e.parentElement.parentElement;
  taskName.value = selectedElement.children[0].innerHTML;
  let dateString = selectedElement.children[1].innerHTML;
  let dateObj = new Date(dateString);
  let formattedDate = `${dateObj.getFullYear()}-${String(
    dateObj.getMonth() + 1
  ).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;
  date.value = formattedDate;
  desc.value = selectedElement.children[2].innerHTML;
  deleteTask(e);
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};
