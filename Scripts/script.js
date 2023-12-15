// Settings
const siteTitle = "いえもんくんのGitHubページ";
const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'Profile', href: '#' },
    { text: 'Works', href: '#' },
    { text: 'Contact', href: '#' }
];

// メニュートグル
const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');
menu.onclick = () => {
    menu.classList.toggle('open');
    header.classList.toggle('active');
    if(header.classList.contains('active')){
        menu.textContent = "✕";
    }else{
        menu.textContent = "三";
    }
}

// ダークモードボタン
const themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('dark');
    if(themeToggler.classList.contains('dark')){
        document.body.classList.add('dark');
        themeToggler.textContent = "暗";
    }else{
        document.body.classList.remove('dark');
        themeToggler.textContent = "明";
    }
}

// 右手モードボタン
const handToggler = document.querySelector('#hand-toggler');
handToggler.onclick = () => {
    handToggler.classList.toggle('right');
    header.classList.toggle('header-right'); // この行を追加
    header.classList.toggle('header-left');

    if(handToggler.classList.contains('right')){
        handToggler.textContent = "右";
    }else{
        handToggler.textContent = "左";
    }
}

/* header部分
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
*/

// main部分
function updateMain(content) {
    // main要素の内容を動的に更新するコード
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = content;
}

// ナビゲーションメニューのリンクにイベントリスナーを設定
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const content = `内容: ${event.target.textContent}`; // ここで新しいコンテンツを取得
        updateMain(content);
    });
});

// footer部分
function updateFooter() {
    // footer要素の内容を更新するコード
    // 例: コピーライト情報の更新、SNSリンクの追加など
    const headerElement = document.querySelector('footer');
}

document.addEventListener('DOMContentLoaded', updateFooter);
