const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('header nav');
btn.addEventListener('click' , () => { 
    menu.classList.toggle('open');
})