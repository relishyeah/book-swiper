//Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const face = document.querySelector('.face img');
const title = document.querySelector('.info h1');
const buttons = document.querySelector('.contact');
//Triggers
container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth/2 - e.pageX) / 15;
    let yAxis = (window.innerHeight/2 - e.pageY) / 15;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'all 0.1s ease';
    face.style.transform = `translateZ(70px)`;
    title.style.transform = `translateZ(70px)`;
    buttons.style.transform = `translateZ(70px)`;
})

//animate out
container.addEventListener('mouseleave', (e) =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    face.style.transform = `translateZ(0)`;
    title.style.transform = `translateZ(0px)`;
    buttons.style.transform = `translateZ(0px)`;
});