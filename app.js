function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getELementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit',() =>) {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDOList.appendChild(li);

    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
