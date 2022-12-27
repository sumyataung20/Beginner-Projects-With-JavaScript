var getpages = document.getElementsByClassName("page");
var getdots = document.getElementsByClassName("dot");
var getform = document.getElementById("form");
var getnextbtn = document.getElementById("nextbtn");
var getprevbtn = document.getElementById("prevbtn");

var getresult = document.getElementById("result-container");

var curidx = 0;

var objkeys = [
  "email",
  "password",
  "firstname",
  "lastname",
  "dob",
  "phone",
  "address",
];

var datas = [];

showpage(curidx);

function showpage(num) {
  for (var x = 0; x < getpages.length; x++) {
    getpages[num].style.display = "block";
  }

  num === 0
    ? (getprevbtn.style.display = "none")
    : (getprevbtn.style.display = "block");
  num === getpages.length - 1
    ? (getnextbtn.textContent = "Submit")
    : (getnextbtn.textContent = "Next");

  dotindicator(num);
}

function dotindicator(num) {
  for (var y = 0; y < getdots.length; y++) {
    getdots[y].classList.remove("active");
  }

  getdots[num].classList.add("active");
}

function* genfun() {
  var index = 0;

  while (index < objkeys.length) {
    yield index++;
  }
}

let gen = genfun();

function gonow(num) {
  if (!formvalidation()) {
    return false;
  }

  getpages[curidx].style.display = "none";

  curidx = curidx + num;

  if (curidx >= getpages.length) {
    getform.style.display = "none";
    getresult.style.display = "block";
    result(datas);
    return true;
  }

  showpage(curidx);
}
function formvalidation() {
  var valid = true;

  var getcurrinput = getpages[curidx].getElementsByTagName("input");

  for (var x = 0; x < getcurrinput.length; x++) {
    if (getcurrinput[x].value === "") {
      getcurrinput[x].classList.add("invalid");
      valid = false;
    } else {
      const keys = objkeys[gen.next().value];
      const values = getcurrinput[x].value;
      var obj = {};
      obj[keys] = values;
      datas.push(obj);
      console.log(datas);
    }

    if (valid) {
      getdots[curidx].classList.add("done");
    }
  }
  return valid;
}

function result(data) {
  getresult.innerHTML = `
    <ul>
    <li>Name: ${data[2].firstname} ${data[3].lastname} </li>
    <li>Email: ${data[0].email}</li>
    <li>Password: ${data[1].password}</li>
    <li>Date of Birth: ${data[4].dob} </li>
    <li>Phone : ${data[5].phone} </li>
    <li>Address : ${data[6].address} </li>
    </ul>

    <button type="button" class="submit-btn" onclick="submitbtn()">Apply Now</button>

    
    `;
}

function submitbtn() {
  getform.submit();
}
