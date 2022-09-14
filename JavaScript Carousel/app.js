var slides = document.getElementsByClassName('carousel-item');

var dots = document.querySelectorAll('.dot');

var currslide = 1;

document.getElementById('prev').addEventListener('click', function() {
    carousel(currslide -= 1)
})

document.getElementById('next').addEventListener('click', function() {
    carousel(currslide += 1)
})

for(var q = 0; q < dots.length; q++) {
    // console.log(q);

    dots[q].addEventListener('click', function() {
        currslide = this.getAttribute('data-bs-slide-to')
        carousel(currslide);
    })
}

carousel(currslide)

function carousel(slidenum) {
    // console.log(slidenum);

    var x,y;
    for(x = 0; x < slides.length; x++){
        slides[x].style.display = "none"
    }

    for(y=0; y < dots.length; y++) {
        dots[y].classList.remove('active');

    }

    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    slides[currslide - 1].style.display = "block";

    dots[currslide - 1].className = "dot active";

    // dots[currslide - 1].classList.add("active")

    console.log(slides[currslide - 1]);
    console.log(currslide);
    
}