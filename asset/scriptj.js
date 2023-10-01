let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 1000,
    reset: true
});
sr.reveal('.serif-text', { delay: 200, origin: 'top' });
sr.reveal('.serif-img', { delay: 400, origin: 'top' });
sr.reveal('.serif-icon', { delay: 500, origin: 'left' });