// Function to create and append elements with attributes and inner text
function createElement(tag, attributes = {}, parent, innerText = '') {
    const element = document.createElement(tag);
    
    // Set attributes
    for (const key in attributes) {
        if (key === 'class') {
            element.className = attributes[key];
        } else if (key === 'style') {
            element.style.cssText = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    
    // Set inner text if provided
    if (innerText) {
        element.innerText = innerText;
    }
    
    // Append to parent if provided
    if (parent) {
        parent.appendChild(element);
    }
    
    return element;
}

// Function to build the webpage
function buildResponsiveWebpage() {
    const body = document.body;

    // Header
    const header = createElement('header', {}, body);
    createElement('h1', {}, header, 'Responsive HTML5 Website');
    
    // Navigation
    const nav = createElement('nav', {}, body);
    createElement('a', { href: '#home' }, nav, 'Home');
    createElement('a', { href: '#about' }, nav, 'About');
    createElement('a', { href: '#services' }, nav, 'Services');
    createElement('a', { href: '#contact' }, nav, 'Contact');

    // Main Content
    const main = createElement('main', {}, body);
    
    // Section
    const section = createElement('section', {}, main);
    createElement('h2', {}, section, 'Main Section');
    
    // Article
    const article1 = createElement('article', {}, section);
    createElement('h3', {}, article1, 'Article 1');
    createElement('p', {}, article1, 'This is an article demonstrating responsive design.');
    createElement('img', { src: 'https://via.placeholder.com/600x300', alt: 'Placeholder Image' }, article1);
    
    const article2 = createElement('article', {}, section);
    createElement('h3', {}, article2, 'Article 2');
    createElement('p', {}, article2, 'This is another article with a video.');
    createElement('video', { controls: true, src: 'https://www.w3schools.com/html/mov_bbb.mp4' }, article2);
    
    // Aside
    const aside = createElement('aside', {}, main);
    createElement('h2', {}, aside, 'Sidebar');
    createElement('p', {}, aside, 'This is an aside element.');

    // Footer
    const footer = createElement('footer', {}, body);
    createElement('p', {}, footer, '© 2024 Responsive HTML5 Website. All rights reserved.');
}

// Build the webpage when the document is loaded
document.addEventListener('DOMContentLoaded', buildResponsiveWebpage);
