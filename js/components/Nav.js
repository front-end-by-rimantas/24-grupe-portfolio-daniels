const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    burger.addEventListener('click', () => {
        //Toggle Now
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    

};

const sections = document.querySelectorAll('section');
const underline = document.querySelector('.underline');
const color = ['#000']; // add gradients or colors for the underline

const options = {
    threshold: 1
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        console.log(className);
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const colorIndex = entry.target.getAttribute('data-index'); //with gradients or diferent colors
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        if (entry.isIntersecting) {
            underline.style.setPropery('left', `${directions.left}px`);
            underline.style.setPropery('top', `${directions.top}px`);
            underline.style.setPropery('width', `${directions.width}px`);
            underline.style.setPropery('height', `${directions.height}px`);
            underline.style.background = color[colorIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});


export { navSlide }
export { navCheck }

//TODO: pataisyti javascript kai bus pataisyti sectionai