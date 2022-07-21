//menu button 
const menuBtn = document.querySelector('.nav-icon')
const navlinks = document.querySelector('.mainTag')
// adding eventt listener
menuBtn.addEventListener('click', ()=>{
navlinks.classList.toggle('mobile-menu')
})