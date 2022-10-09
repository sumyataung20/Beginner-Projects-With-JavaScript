const languages = ["Nodejs", "Reactjs", "Vuejs", "Laravel"];

const colors = ["red", "skyblue", "violet", "yellow"];

const gettxtani = document.querySelector(".txtani");

function* generator() {
  var idx = 0;

  while (true) {
    yield idx++;

    if (idx > 3) {
      idx = 0;
    }
  }
}

let gen = generator();
showwords(languages[gen.next().value]);

function showwords(word) {
  let x = 0;

  gettxtani.innerHTML = "";
  gettxtani.classList.add(colors[languages.indexOf(word)]);

  let showinterval = setInterval(function () {
    if (x >= word.length) {
      clearInterval(showinterval);
      deletewords();
    } else {
      gettxtani.innerHTML += word[x];
      x++;
    }
  }, 500);
}

function deletewords() {
  let getword = gettxtani.innerHTML;

  let getlastidx = getword.length - 1;

  let delintval = setInterval(function () {
    if (getlastidx >= 0) {
      gettxtani.innerHTML = gettxtani.innerHTML.substring(
        0,
        gettxtani.innerHTML.length - 1
      );
      getlastidx--;
    } else {
      gettxtani.classList.remove(colors[languages.indexOf(getword)]);
      showwords(languages[gen.next().value]);
      clearInterval(delintval);
    }
  }, 500);
}

//p and h3 tag

let gettxtlights = document.querySelectorAll(".text-light");

gettxtlights.forEach((gettxtlight) => {
  let arrtexts = gettxtlight.textContent.split("");

  gettxtlight.textContent = "";

  arrtexts.forEach(function (arrtext, idx) {
    let newem = document.createElement("em");

    newem.textContent = arrtext;
    newem.style.animationDelay = `${idx * 0.05}s`;

    gettxtlight.append(newem);
  });
});
