// Buttons used to toggle dark and light mode
var icon = document.getElementById('icon');

icon.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = './images/sun.png';
        document.getElementById('bd').style.backgroundImage='url(./images/light-textured-wall-min.jpg)';
    }else{
        icon.src='./images/moon.png';
        document.getElementById('bd').style.backgroundImage='url(./images/dark-textured-wall-min.jpg)';
    };
}); 

const primaryNav = document.querySelector('.nav--list');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navBar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === 'false'){
        navBar.id = "visible";
        primaryNav.setAttribute('data-visible', true);
    }else{
        navBar.id = "invisible";
        primaryNav.setAttribute('data-visible', false);
    }

});


/*intersection observer detects the scroll position of the html page*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

const activeElements = document.querySelectorAll('.active-animation');
activeElements.forEach((el) => observer.observe(el));

