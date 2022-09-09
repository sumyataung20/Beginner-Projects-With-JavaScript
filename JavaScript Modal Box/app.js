var getmodal = document.getElementById('signupmodal');

var getbtnclose = document.querySelector('.btn-close');

var getbtnfullscreen = document.getElementById('full-btn');

var getbtnclosescreen = document.getElementById('close-btn');

var signupbtn = document.getElementById('signup-btn');

signupbtn.addEventListener('click',function() {
    getmodal.style.display = "block";
})

getbtnclose.addEventListener('click', function() {
    getmodal.style.display = "none";
})

window.onclick = function(e) {
    if(e.target === getmodal) {
        getmodal.style.display = "none"
    }
}

var getde = document.documentElement;

getbtnfullscreen.addEventListener('click', ()=>{
    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.webkitRequestFullscreen();
    }

    getbtnclosescreen.style.display = "inline-block"
})

getbtnclosescreen.addEventListener('click', function (){

    // if(document.existFullscreen){
    //     document.existFullscreen();
    // }else if(document.msExistFullscreen){
    //     document.msExistFullscreen();
    // }else if(document.webkitExistFullscreen){
    //     document.webkitExistFullscreen();
    // }
 
    document.exitFullscreen();
  

    getbtnclosescreen.style.display = "inline-block"
})

