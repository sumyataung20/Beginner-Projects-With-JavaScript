const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        let value = e.target.getAttribute("data-num");
        screen.value += value;
        
    })
})

equal.addEventListener("click" ,(e)=> {
    if(screen.value === ''){
        screen.value = "Please Enter";

    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener('click', (e) => {
    screen.value = "";
})


        
