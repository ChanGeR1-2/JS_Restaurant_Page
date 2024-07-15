import './style.css';
import {aboutPage} from "./about";
import iconURL from './img/icon.svg';

const nav = document.querySelector('#menu-buttons');

const icon = new Image();
icon.src = iconURL;
icon.alt = 'icon';
icon.setAttribute('id', 'icon');

document.querySelector('header').prepend(icon);

nav.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'about':
            generatePage(aboutPage());
    }
});

function generatePage(page) {
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    content.appendChild(page);
}