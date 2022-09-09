var getacctitle = document.querySelectorAll(".acctitle");

var getacccontent = document.querySelectorAll(".acccontent");

for(var x = 0; x < getacctitle.length; x++){
    getacctitle[x].addEventListener("click" , function() {

        this.classList.toggle("active");

        var getcontent = this.nextElementSibling;

        // console.log(getcontent);
        if(getcontent.style.height){
            getcontent.style.height = null;
        }else{
            getcontent.style.height = getcontent.scrollHeight + "px";
        }
    });

    if(getacctitle[x].classList.contains("active")){
        getacccontent[x].style.height = getacccontent[x].scrollHeight + "px";
    }
}