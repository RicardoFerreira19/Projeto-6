function imgSlider(anything){
    document.querySelector(`.big-cup`).src=anything

}
function changeCircleColor (color) {
    const circle = document.querySelector(`.circle`)
    circle.style.backgroundColor = color
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 1600,
    delay: 450,
    reset:true
});
sr.reveal('header',{
    delay: 200,
    origin: 'top'
});
sr.reveal('.scroll-left',{
    delay: 600,
    origin: 'left'
});
sr.reveal('.big-cup',{
    delay: 600,
    origin: 'right'
});
sr.reveal('.circle',{
    delay: 300,
    origin: 'bottom'
});

sr.reveal('.nav-img',{
    delay: 800,
    origin: 'bottom'
});



