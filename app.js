const todos = document.querySelector('.todos');
const addTodoForm = document.querySelector('.add');



todos.addEventListener('click', e => {
  if (e.target.classList[2] === "delete") {
    e.target.parentElement.remove();
  }
});

addTodoForm.addEventListener('submit', e => {
  e.preventDefault();

  const HTMLTemplate = `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${e.target[0].value.trim()}</span>
                        <i class="far fa-trash-alt delete"></i>
                       </li>`

  todos.innerHTML += HTMLTemplate;

  e.target[0].value = "";
});