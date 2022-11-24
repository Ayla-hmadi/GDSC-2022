const slider = document.querySelector('#containerWr');
let mouseDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown',(e) =>  {
    mouseDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', ()=>{
    mouseDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mouseup',()=>{
    mouseDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mousemove',(e)=>{
    if(!mouseDown) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = x-startX; //if we want to fasten it, we multiply it by the ratio
    slider.scrollLeft= scrollLeft- walk;
});

//For the header animation
var typed = new Typed(".typing_header",{
    strings: [ ,'Developer','LU Student','GDSC member'],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true,
    cursorChar: '|',
});
