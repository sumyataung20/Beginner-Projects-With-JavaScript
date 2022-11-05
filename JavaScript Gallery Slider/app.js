var getimgs = document.querySelectorAll(".img");

var getmodal = document.querySelector(".modal");

var getmodalimg = document.querySelector(".modal-img");

var getcaption = document.querySelector(".caption");

var getbtnclose = document.querySelector(".btn-close");

for (var x = 0; x < getimgs.length; x++) {
  getimgs[x].addEventListener("click", function () {
    shownow(this);
  });
}

function shownow(ele) {
  getmodal.style.display = "block";
  getmodalimg.src = ele.src;
  getcaption.textContent = ele.alt;
}

getbtnclose.onclick = function () {
  getmodal.style.display = "none";
};

document.addEventListener("click", function (e) {
  if (e.target === getmodal) {
    getmodal.style.display = "none";
  }
});
