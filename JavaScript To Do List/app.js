var getform = document.getElementById("form");
var gettextbox = document.getElementById("textbox");
var getul = document.getElementById("list-group");

getform.addEventListener("submit", function (e) {
  addnew();
  e.preventDefault();
});

function addnew() {
  var todotext = gettextbox.value;

  // console.log(todotext);

  if (todotext) {
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(todotext));

    getul.appendChild(li);
    gettextbox.value = "";
    updatelocalstorage();

    li.addEventListener("click", function () {
      this.classList.toggle("done");
      updatelocalstorage();
    });

    li.addEventListener("contextmenu", function () {
      this.remove();
      updatelocalstorage();
    });
  }
}

function updatelocalstorage() {
  var getalllis = document.querySelectorAll("li");

  const todos = [];

  getalllis.forEach((li) => {
    todos.push({
      text: li.textContent,
      done: li.classList.contains("done"),
    });
  });

  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

var getlstodos = JSON.parse(localStorage.getItem("todos"));

if (getlstodos) {
  getlstodos.forEach((lsdo) => {
    console.log(lsdo);
    console.log(lsdo.text);
  });
}
