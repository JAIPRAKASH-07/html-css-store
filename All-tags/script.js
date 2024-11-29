// Function to create and append elements
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

// Function to build the entire webpage
function buildWebpage() {
    // Create the <header>
    const header = createElement('header', { style: 'background-color: #333; color: white; padding: 15px; text-align: center;' }, document.body);
    createElement('h1', {}, header, 'My Dynamic Website');
    createElement('p', {}, header, 'This website was created entirely with JavaScript.');

    // Create the <nav>
    const nav = createElement('nav', { style: 'background-color: #444; color: white; padding: 10px; text-align: center;' }, document.body);
    createElement('a', { href: '#home', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'Home');
    createElement('a', { href: '#about', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'About');
    createElement('a', { href: '#services', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'Services');
    createElement('a', { href: '#contact', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'Contact');

    // Create the <main> content area
    const main = createElement('main', { style: 'display: flex; flex: 1; padding: 20px;' }, document.body);

    // Create the <aside>
    const aside = createElement('aside', { style: 'background-color: #f4f4f4; padding: 20px; width: 250px; box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);' }, main);
    createElement('h2', {}, aside, 'Sidebar');
    createElement('p', {}, aside, 'This is the sidebar, created dynamically using JavaScript.');

    // Create a <section> inside the <main>
    const section = createElement('section', { style: 'flex: 1; padding: 20px;' }, main);
    createElement('h2', {}, section, 'Main Content');
    createElement('p', {}, section, 'This is the main content area.');
    
    // Add some semantic tags
    const article = createElement('article', { style: 'margin-top: 20px;' }, section);
    createElement('h3', {}, article, 'Article Title');
    createElement('p', {}, article, 'This is an article within the main content area.');

    const figure = createElement('figure', {}, article);
    const img = createElement('img', { src: 'https://via.placeholder.com/150', alt: 'Placeholder Image', style: 'display: block; margin: 0 auto;' }, figure);
    createElement('figcaption', {}, figure, 'Figure 1: This is a caption for the image.');

    // Add a form element
    const form = createElement('form', { action: '#', method: 'post', style: 'margin-top: 20px;' }, section);
    createElement('label', { for: 'name' }, form, 'Name: ');
    createElement('input', { type: 'text', id: 'name', name: 'name', style: 'margin-left: 10px;' }, form);
    createElement('br', {}, form);
    createElement('label', { for: 'email' }, form, 'Email: ');
    createElement('input', { type: 'email', id: 'email', name: 'email', style: 'margin-left: 10px;' }, form);
    createElement('br', {}, form);
    createElement('button', { type: 'submit', style: 'margin-top: 10px;' }, form, 'Submit');

    // Add an embedded video
    const video = createElement('video', { controls: '', style: 'display: block; margin-top: 20px; width: 100%; max-width: 600px;' }, section);
    createElement('source', { src: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'video/mp4' }, video);
    createElement('p', {}, section, 'Your browser does not support the video tag.');

    // Create the <footer>
    const footer = createElement('footer', { style: 'background-color: #333; color: white; text-align: center; padding: 10px; position: relative; bottom: 0; width: 100%;' }, document.body);
    createElement('p', {}, footer, '© 2024 My Website. All rights reserved.');
}

// Build the webpage when the document is loaded
document.addEventListener('DOMContentLoaded', buildWebpage);
