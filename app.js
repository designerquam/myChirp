const exitBtn = document.querySelector('.exit-btn')
const nav = document.querySelector('nav')
const menuBtn = document.querySelector('.menu-btn')
const overLay = document.querySelector('.overlay')
const navItems = document.querySelectorAll('.navs')


menuBtn.addEventListener('click', ()=>{
    if(!nav.classList.contains('nav-show')){
        nav.classList.add('nav-show')
    } else{
        nav.classList.remove('nav-show')
    }
    overLay.classList.add('overlay-show')
}) 

function closeNav(){
    nav.classList.remove('nav-show')
    overLay.classList.remove('overlay-show')
}

navItems.forEach( item => {
    item.addEventListener('click', closeNav )
})

exitBtn.addEventListener('click', closeNav) 


