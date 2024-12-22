/*========== toggle icon navbar ============*/

function changeicon(){
    let navbar = document.querySelector('.navbarhide');
    let close = document.querySelector('#menu-close');
    const menu = document.querySelector('#menu-icon');
    menu.style.display = 'none';
    close.style.display = 'block';
    navbar.style.display = 'block';
}

function baricon(){
    let navbar = document.querySelector('.navbarhide');
    let close = document.querySelector('#menu-close');
    const menu = document.querySelector('#menu-icon');
    menu.style.display = 'block';
    close.style.display = 'none';
    navbar.style.display = 'none';
}

/*========== Scroll section autive link ============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a,header .navbarhide a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                document.querySelector('header .navbarhide a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
}; 

/*=========== sticky navbar ==============*/
let header = document.querySelector('header');

header.classList.toogle('sticky', window.scroll > 100);

/*================= remove toggle icon and navbar wen click navbar link (scroll) ============*/

function remove(){
    let navbar = document.querySelectorAll('navbar');
    navbar.style.display = "flex";
};


/*====closin====*/

