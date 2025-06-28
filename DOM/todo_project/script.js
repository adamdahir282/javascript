const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll(".filters button");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos(filter = "all") {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    if (
      (filter === "completed" && !todo.completed) ||
      (filter === "incomplete" && todo.completed)
    )
      return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;
    if (todo.completed) span.classList.add("completed");
    span.addEventListener("click", () => toggleComplete(index));

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", () => deleteTodo(index));

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    todos.push({ text, completed: false });
    input.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

form.addEventListener("submit", addTodo);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    renderTodos(filter);
  });
});

// Initial render
renderTodos();
