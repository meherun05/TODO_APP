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
      <i class="fa-solid fa-pen-to-square" style="color: rgb(42, 106, 245);"></i>
      <i onClick ="deleteTask(this)" class="fa-solid fa-trash" style="color: tomato;"></i>
  </span>
</div>
  `;
};

let resetForm = () => {
  taskName.value = "";
  data.value = "";
  desc.value = "";
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};
