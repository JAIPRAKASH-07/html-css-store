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

// Function to build the layout
function buildLayout() {
    // Create the header
    const header = createElement('header', { style: 'background-color: #333; color: white; padding: 15px; text-align: center;' }, document.body);
    createElement('h1', {}, header, 'My Website');
    createElement('p', {}, header, 'Welcome to my basic website layout!');

    // Create the navigation bar
    const nav = createElement('nav', { style: 'background-color: #444; color: white; padding: 10px; text-align: center;' }, document.body);
    createElement('a', { href: '#home', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'Home');
    createElement('a', { href: '#about', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'About');
    createElement('a', { href: '#services', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'Services');
    createElement('a', { href: '#contact', style: 'color: white; margin: 0 15px; text-decoration: none;' }, nav, 'Contact');

    // Create the main content area
    const main = createElement('main', { style: 'display: flex; flex: 1; padding: 20px;' }, document.body);

    // Create the sidebar
    const aside = createElement('aside', { style: 'background-color: #f4f4f4; padding: 20px; width: 250px; box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);' }, main);
    createElement('h2', {}, aside, 'Sidebar');
    createElement('p', {}, aside, 'This is the sidebar content. You can include links, ads, or other information here.');

    // Create the main section
    const section = createElement('section', { style: 'flex: 1; padding: 20px;' }, main);
    createElement('h2', {}, section, 'Main Content');
    createElement('p', {}, section, 'This is where the main content of the website goes. You can include articles, images, or anything else you want.');
    createElement('p', {}, section, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.');

    // Create the footer
    const footer = createElement('footer', { style: 'background-color: #333; color: white; text-align: center; padding: 10px; position: relative; bottom: 0; width: 100%;' }, document.body);
    createElement('p', {}, footer, '© 2024 My Website. All rights reserved.');
}

// Build the website layout when the document is loaded
document.addEventListener('DOMContentLoaded', buildLayout);
