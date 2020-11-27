var menu = document.querySelector('.menu'),
    hamburger = document.getElementById('hamburger'),
    div = document.querySelector('#background');

function menuToggle(){
    if(menu.classList.contains('active')){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        div.classList.toggle('active');
    }
}

if(hamburger){
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        div.classList.toggle('active');
    });
}
div.addEventListener('click', ()=>{
    if(menu.classList.contains('active')){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        div.classList.toggle('active');
    }
});
menu.addEventListener('click', ()=>{
    if(menu.classList.contains('active')){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        div.classList.toggle('active');
    }
});