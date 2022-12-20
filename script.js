const input = document.getElementById("newTodoInput");
const addButton = document.getElementById("addTodoBtn");
const olList = document.getElementById("todoList");

addButton.addEventListener("click", addItemToList);
function addItemToList() {
  let value = input.value.trim();
  if (value.length == 0) return;

  let li = document.createElement("li");
  li.innerText = value;
  olList.append(li);
  // reset input
  input.value = "";
}
