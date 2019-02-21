function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getELementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(li);

    newToDoText.value = '';

    let deleteButton = document.createElement('input');

    letonClick = document.createAttribute("onclick");
    onClick.value ="deleteButton(this)";

    let type = document.createAttribute("type");
    type.value = "button";

    let inputValue = document.createAttribute("value");

    deleteButton.setAttributeNode(onClick);
    deleteButton.setAttributeNode(type);
    deleteButton.setAttributeNode(inputValue);
    newLi.appendChild(deleteButton);

  });
}

window.onload = function() {
  onReady();
};
