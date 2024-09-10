function deleteTodo(event) {
  document.getElementById('ul').removeChild(event.target);
}

function createTodo() {
  const newTodoText = document.getElementById('input').value;
  const newLi = document.createElement('li');
  newLi.textContent = newTodoText;

  document.getElementById('ul').appendChild(newLi);
  newLi.addEventListener('click', (event) => {
    deleteTodo(event);
  });
}

document.getElementById('submit').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createTodo();
  }
});

document.getElementById('submit').addEventListener('click', () => {
  createTodo();
});
