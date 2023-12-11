// Settings
const siteTitle = "いえもんくんのGitHubページ";
const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'Profile', href: '#' },
    { text: 'Works', href: '#' },
    { text: 'Contact', href: '#' }
];

// 関数
document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header');
    addPageTitle(headerElement, siteTitle);
    addNavigationMenu(headerElement);
});

function addPageTitle(headerElement, titleText) {
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = titleText;
    headerElement.appendChild(pageTitle);
}

function addNavigationMenu(headerElement) {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    headerElement.appendChild(nav);
}
