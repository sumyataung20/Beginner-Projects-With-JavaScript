var getimgs = document.querySelectorAll(".img");

var getmodal = document.querySelector(".modal");
var getviews = document.querySelectorAll(".view");
var getcounter = document.querySelector(".counter");
var getcaption = document.querySelector(".caption");
var getbtnclose = document.querySelector(".btn-close");
var getprevbtn = document.querySelector(".prev");
var getnextbtn = document.querySelector(".next");
var getnoactives = document.querySelectorAll(".noactive");
// console.log(getnoactives);
// console.log(getviews);
// console.log(getimgs);
var curidx = 1;

for (var i = 0; i < getimgs.length; i++) {
  getimgs[i].addEventListener("click", function (e) {
    showmodal();

    const findids = this.alt.split("").filter((rm) => rm.trim() !== "");

    curidx = Number(findids[findids.length - 1]);
    slideshow(curidx);
    // console.log(findids);

    // curidx = Number(findids[findids.length - 1]);

    // slideshow(curidx);
  });
}
function currentview(num) {
  slideshow(num);
}

function showmodal() {
  getmodal.style.display = "block";
}

getbtnclose.onclick = () => {
  getmodal.style.display = "none";
};

document.onclick = (e) => {
  if (e.target === getmodal) {
    getmodal.style.display = "none";
  }
};

getprevbtn.addEventListener("click", function () {
  slideshow((curidx -= 1));

  if (curidx < 1) {
    curidx = getviews.length;
  }
});

getnextbtn.addEventListener("click", () => {
  slideshow((curidx += 1));
});

slideshow(curidx);

function slideshow(num) {
  var x;

  for (x = 0; x < getviews.length; x++) {
    getviews[x].style.display = "none";
  }

  for (x = 0; x < getnoactives.length; x++) {
    getnoactives[x].classList.remove("active");
  }

  if (num > getviews.length) {
    num = 1;
    curidx = 1;
  }

  if (num < 1) {
    num = getviews.length;
    curidx = getviews.length;
  }

  getcounter.textContent = `${num} / ${getviews.length}`;

  getcaption.textContent = getnoactives[num - 1].alt;

  getviews[num - 1].style.display = "block";

  getnoactives[num - 1].classList.add("active");
}
