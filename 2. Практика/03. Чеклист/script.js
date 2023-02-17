let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    let li = document.createElement("li");

    let task = document.createElement("span");
    task.classList.add("task");
    task.textContent = this.value;
    task.addEventListener('dblclick', function() {
      let text = this.textContent;
      this.textContent = '';

      let edit = document.createElement('input');
      edit.value = text;
      this.appendChild(edit);

      let self = this;

      edit.addEventListener('keypress', function(event) {
        if (event.key == 'Enter') {
          self.textContent = this.value;
          
        }
      })
    })
    li.appendChild(task);

    let remove = document.createElement("span");
    remove.classList.add("remove");
    remove.textContent = "Удалить";
    remove.addEventListener('click', function() {
      li.remove()
    })
    li.appendChild(remove);

    let mark = document.createElement("span");
    mark.classList.add("mark");
    mark.textContent = "Сделано";
    mark.addEventListener('click', function() {
      task.classList.add('done')
    })
    li.appendChild(mark);

    list.appendChild(li);

    this.value = "";
  }
});
