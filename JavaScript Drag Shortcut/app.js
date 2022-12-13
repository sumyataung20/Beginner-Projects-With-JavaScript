const getbox = document.querySelector(".box");

dragbox(getbox);

function dragbox(getele) {
  //   console.log(getele);

  var getclientx, getclienty, setclientx, setclienty;

  getele.onmousedown = function getmousedown(e) {
    // console.log("I am working");
    // console.log(e.target);

    getclientx = e.clientX;
    getclienty = e.clientY;

    console.log(getclientx, getclienty);

    document.onmousemove = dragme;
    document.onmouseup = stopdragme;
  };
  function dragme(e) {
    //   console.log("hi");

    setclientx = getclientx - e.clientX;
    setclienty = getclienty - e.clientY;

    getclientx = e.clientX;
    getclienty = e.clientY;

    // console.log(getclientx, setclientx);
    // console.log(getclienty, setclienty);

    const btnleft = getbox.offsetLeft;
    const btntop = getbox.offsetTop;

    // console.log(btnleft, btntop);

    getele.style.left = btnleft - setclientx + "px";
    getele.style.top = btntop - setclienty + "px";
  }

  function stopdragme() {
    // console.log("stop");
    document.onmousemove = null;
    document.onmouseup = null;
  }
}
