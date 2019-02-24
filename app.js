function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newToDoText.value ='';

    let deleteButton = document.createELement('input');

    let onClick = document.createAttribute("onclick");
    onClick.value = "deleteButton(this)";

    let type = document.createAttribute("type");
    deleteButton.value = "button";

    let inputValue = document.createAttribute("value");
    inputValue.value = "Delete"

    deleteButton.setAttributeNode(onclick);
    deleteButton.setAttributeNode(type);
    deleteButton.setAttributeNode(inputValue);
    newLi.appendChild(deleteButton);
});
}

window.onload = function() {
  onReady();
};

function deleteButton(btn) {
  var row = btn.parentNode;
  row.parentNode.removeChild(row);
}
