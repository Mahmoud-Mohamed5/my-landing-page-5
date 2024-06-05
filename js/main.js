// Select NavBar
let nav = document.querySelector("nav");
// Selecte All Items
let items = Array.from(document.querySelectorAll('nav ul li'))
// Select Bars 
let bars = document.querySelector('nav .bars');
// select Ul
let ul = document.querySelector('nav ul');



window.onscroll =  () =>{
    
    if (window.innerWidth >= 1024) {
        
        if (window.scrollY >= 200) {
            nav.classList.add('scroll')
        } else {
            nav.classList.remove('scroll')
        }
    }
}

items.forEach(item => {
    item.onclick = function (ele) {
        items.forEach(ele => {
            ele.classList.remove('active')
        })
        this.classList.add('active')
    }
})

bars.addEventListener('click', () => {
    if (!bars.classList.contains('open')) {
        bars.classList.add('open');
        ul.style.display = 'flex';

    } else {
        ul.style.display = 'none';
        bars.classList.remove('open')
    }
});
