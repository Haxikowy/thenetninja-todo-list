const HTMLTemplate = `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${'spanContent'}</span>
                        <i class="far fa-trash-alt delete"></i>
                      </li>`
const todos = document.querySelector('.todos');

todos.addEventListener('click', (e) => {
  if (e.target.classList[2] === "delete") {
    e.target.parentElement.remove();
  }
});