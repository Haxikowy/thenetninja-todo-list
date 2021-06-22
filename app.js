const todos = document.querySelector('.todos');
const addForm = document.querySelector('.add');
const searchForm = document.querySelector('.search')


// Event listener needed to add some todo's
addForm.addEventListener('submit', e => {
  e.preventDefault();

  const HTMLTemplate = `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${addForm.add.value.trim()}</span>
                        <i class="far fa-trash-alt delete"></i>
                       </li>`
  todos.innerHTML += HTMLTemplate;
  addForm.reset();
});

// Event Listener needed to remove todo's
todos.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// Search & filter todos

const filterTodos = text => {
  Array.from(todos.children)
    .filter(todo => !todo.textContent.toUpperCase().includes(text))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(todos.children)
    .filter(todo => todo.textContent.toUpperCase().includes(text))
    .forEach(todo => todo.classList.remove('filtered'));
}

searchForm.addEventListener('keyup', e => {
  let text = e.target.value.trim().toUpperCase();

  filterTodos(text);
});

searchForm.addEventListener('submit', e => e.preventDefault());