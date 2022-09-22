var getinput = document.getElementById("search");
var getul = document.getElementById("members");
var getli = getul.getElementsByTagName("li");

var getsortazm1btn = document.getElementById("sortazm1");
var getsortzam1btn = document.getElementById("sortzam1");
var getsortazm2btn = document.getElementById("sortazm2");
var getsortzam2btn = document.getElementById("sortzam2");

// console.log(getli);
getinput.addEventListener("keyup", filter);
getsortazm1btn.addEventListener("click", sortingazm1);
getsortzam1btn.addEventListener("click", sortingzam1);
getsortazm2btn.addEventListener("click", sortingazm2);
getsortzam2btn.addEventListener("click", sortingzam2);

function filter() {
  var input = this.value.toLowerCase();

  for (var x = 0; x < getli.length; x++) {
    var getavalue = getli[x].querySelector("a").textContent.toLowerCase();
    if (getavalue.indexOf(input) > -1) {
      getli[x].style.display = "block";
    } else {
      getli[x].style.display = "none";
    }
  }
}

function sortingazm1() {
  var lis = [];

  for (var i = 0; i < getli.length; i++) {
    lis.push(getli[i].textContent);
  }

  getul.innerHTML = "";
  var azlis = lis.sort();

  azlis.forEach(function (azli) {
    const newli = document.createElement("li");
    const newlink = document.createElement("a");
    newlink.href = `javascript:void(0);`;
    newlink.appendChild(document.createTextNode(azli));
    newli.appendChild(newlink);
    getul.appendChild(newli);
  });
}

function sortingzam1() {
  var lis = [];

  for (var i = 0; i < getli.length; i++) {
    lis.push(getli[i].textContent);
  }

  var zalis = lis.sort().reverse();

  getul.innerHTML = "";
  zalis.forEach(function (zali) {
    const newli = document.createElement("li");
    const newlink = document.createElement("a");
    newlink.href = `javascript:void(0);`;
    newlink.appendChild(document.createTextNode(zali));
    newli.appendChild(newlink);

    getul.appendChild(newli);
  });
}

function sortingazm2() {
  var shouldswitch = true;
  var switching = true;

  do {
    switching = false;
    var i = 0;

    for (i; i < getli.length - 1; i++) {
      shouldswitch = false;

      if (
        getli[i].textContent.toLowerCase() >
        getli[i + 1].textContent.toLowerCase()
      ) {
        shouldswitch = true;
        break;
      }
    }

    if (shouldswitch) {
      // Element.insertBefore(new,existing) , node.insertBefore(new,existing);

      getli[i].parentElement.insertBefore(getli[i + 1], getli[i]);
      switching = true;
    }
  } while (switching);
}

function sortingzam2() {
  var shouldswitch = true;
  var switching = true;

  do {
    switching = false;
    var i = 0;

    for (i; i < getli.length - 1; i++) {
      shouldswitch = false;

      if (
        getli[i].textContent.toLowerCase() <
        getli[i + 1].textContent.toLowerCase()
      ) {
        shouldswitch = true;
        break;
      }
    }

    if (shouldswitch) {
      // Element.insertBefore(new,existing) , node.insertBefore(new,existing);

      getli[i].parentElement.insertBefore(getli[i + 1], getli[i]);
      switching = true;
    }
  } while (switching);
}
