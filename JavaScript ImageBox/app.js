const getimageboxes = document.querySelectorAll(".imagebox");
console.log(getimageboxes);

getimageboxes.forEach((getimagebox, idx) => {
  getimagebox.addEventListener("click", () => {
    showbox(idx);
  });
});

function showbox(idx) {
  getimageboxes.forEach((getimagebox, curridx) => {
    if (idx === curridx) {
      getimagebox.classList.add("show");

      getimagebox.addEventListener("click", function (e) {
        if (e.target.className === "btn-close") {
          getimagebox.classList.remove("show");
        }

        if (e.target.className === "btn") {
          const subbtn = getimageboxes[idx].querySelector(".btn");
          subbtn.textContent = "Subscribed";
        }
      });
    } else {
      getimagebox.classList.remove("show");
    }
  });
}
