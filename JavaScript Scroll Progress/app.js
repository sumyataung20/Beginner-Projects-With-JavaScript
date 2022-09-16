var getprogressbar = document.getElementById('progress-bar')

window.onscroll = function() {
    scrollpoint();
}

function scrollpoint() {
    // console.log('i am working')

    var getscrolltop = document.documentElement.scrollTop;
    console.log(getscrolltop)
    var getscrollheight = document.documentElement.scrollHeight;
    var getclientheight = document.documentElement.clientHeight;

    var calcheight = getscrollheight - getclientheight;

    var getfinal = Math.round((getscrolltop/calcheight) * 100)

    getprogressbar.style.width = `${getfinal}%`;
}

function printme() {
    window.print();
}