const database = [
  {
    question: "Choose Traffic Light ?",
    a: "./l15img/img/traffic.jpg",
    b: "./l15img/img/mountain.jpg",
    c: "./l15img/img/ambulance.jpg",
    d: "./l15img/img/airport.jpg",
    correctanswer: "a",
  },

  {
    question: "Choose Mountain ?",
    a: "./l15img/img/ambulance.jpg",
    b: "./l15img/img/mountain.jpg",
    c: "./l15img/img/traffic.jpg",
    d: "./l15img/img/airport.jpg",
    correctanswer: "b",
  },

  {
    question: "Choose Ambulance Truck?",
    a: "./l15img/img/airport.jpg",
    b: "./l15img/img/mountain.jpg",
    c: "./l15img/img/ambulance.jpg",
    d: "./l15img/img/traffic.jpg",
    correctanswer: "a",
  },

  {
    question: "Choose Airport ?",
    a: "./l15img/img/ambulance.jpg",
    b: "./l15img/img/traffic.jpg",
    c: "./l15img/img/mountain.jpg",
    d: "./l15img/img/airport.jpg",
    correctanswer: "a",
  },
];
// console.log(database);

const getcontainer = document.querySelector(".container");
const getquestion = document.querySelector(".question");
const getanswers = document.querySelectorAll(".answer");
// console.log(getanswers);
const geta_img = document.getElementById("a_img");
const getb_img = document.getElementById("b_img");
const getc_img = document.getElementById("c_img");
const getd_img = document.getElementById("d_img");
const getbtn = document.querySelector(".btn");

let currentidx = 0;
let score = 0;

startquestion();

function startquestion() {
  removeselects();
  const currentqes = database[currentidx];

  getquestion.textContent = currentqes.question;
  geta_img.src = currentqes.a;
  getb_img.src = currentqes.b;
  getc_img.src = currentqes.c;
  getd_img.src = currentqes.d;
}

function getsingleanswer() {
  let answer;

  getanswers.forEach((getanswer) => {
    if (getanswer.checked) {
      answer = getanswer.id;
    }
  });
  return answer;
}

getbtn.addEventListener("click", function () {
  const answer = getsingleanswer();
  //   console.log(answer);

  if (answer) {
    if (answer === database[currentidx].correctanswer) {
      score++;
    }

    currentidx++;

    if (currentidx < database.length) {
      startquestion();
    } else {
      getcontainer.innerHTML = `<h3>Total Score : ${score * 25} </h3>
     <h4>You answered correctly at ${score} / ${database.length} questions</h4>
     <button type="button" class="btn" onclick="doubleclick()">Double Click To Reload</button>`;
    }
  } else {
    window.alert("Choose One Answer");
  }
});

function removeselects() {
  getanswers.forEach(function (getanswer) {
    return (getanswer.checked = false);
  });
}

let clicktimes = 0;

function doubleclick() {
  if (clicktimes === 0) {
    clicktimes = Date.now();
    console.log(clicktimes);
  } else {
    if (Date.now() - clicktimes < 1000) {
      location.reload();
      clicktimes = 0;
    } else {
      clicktimes = Date.now();
    }
  }
}
