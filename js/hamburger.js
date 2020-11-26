var menu = document.querySelector('.menu');
var hamburger = document.getElementById('hamburger');
var div = document.querySelector('#background');


if(hamburger){
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        div.classList.toggle('active');
    });
}
div.addEventListener('click', ()=>{
    if(div.classList.contains('active')){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        div.classList.toggle('active');
    }
});