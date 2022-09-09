var getdownloadbtn = document.querySelector('.download-btn');

var getprogressbar = document.querySelector('.progress-bar');

var seturl = "https://facebook.com"

getdownloadbtn.addEventListener('click',() => {

    getdownloadbtn.setAttribute('disabled', true)
    
    var setwidth = 0;

    var setinv = setInterval(increaseprogress, 100);

    function increaseprogress() {
        if(setwidth >= 100){
            clearInterval(setinv);
            window.location.href = seturl;
        }else{
            setwidth++;

            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute("data-inc", `${setwidth}%`)
        }
    }
})