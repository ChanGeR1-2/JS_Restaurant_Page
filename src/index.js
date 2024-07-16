import './style.css';
import {aboutPage} from "./about";
import iconURL from './img/icon.svg';

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});


const header = document.querySelector('header');

const icon = new Image();
icon.src = iconURL;
icon.alt = 'icon';
icon.setAttribute('id', 'icon');

header.prepend(icon);

header.addEventListener('click', (e) => {
    const target = e.target;
    switch (target.id) {
        case 'about':
            generatePage(aboutPage());
            break;
        case 'menu':
    }
});

async function generatePage(page) {
    const content = document.querySelector('#content');

    if (content.firstElementChild) {
        content.lastElementChild.classList.toggle('visible');

        await wait(0.25);

        content.removeChild(content.lastElementChild);
    }

    content.appendChild(page);
    window.setTimeout(function () {
        page.classList.add('visible');
    }, 100);
}

function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}