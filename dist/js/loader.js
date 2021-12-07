const loader = document.querySelector('.loader');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

function init() {
    setTimeout(() => {

        loader.style.opacity = 0;
        loader.style.display = 'none';
        
        nav.style.display = 'block';
        setTimeout( () => (nav.style.opacity = 1), 50);
        
        header.style.display = 'block';
        setTimeout( () => (header.style.opacity = 1), 50);

        main.style.display = 'block';
        setTimeout( () => (main.style.opacity = 1), 50);

        footer.style.display = 'block';
        setTimeout( () => (footer.style.opacity = 1), 50);


    }, 5000);
}


init();