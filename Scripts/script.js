// Settings
const siteTitle = "いえもんくんのGitHubページ";
const menuItems = [
  { text: "Home", href: "#" },
  { text: "Profile", href: "#" },
  { text: "Works", href: "#" },
  { text: "Contact", href: "#" },
];

// 汎用クラス切り替え関数
function toggleClass(element, className, onText, offText) {
  if (!element) return;
  element.classList.toggle(className);
  element.textContent = element.classList.contains(className) ? onText : offText;
}

// メニュートグル
const menu = document.querySelector("#menu-btn");
const header = document.querySelector(".header");
if (menu && header) {
  menu.onclick = () => {
    menu.classList.toggle("open");
    header.classList.toggle("active");
    menu.textContent = header.classList.contains("active") ? "✕" : "三";
  };
}

// ダークモードボタン
const themeToggler = document.querySelector("#theme-toggler");
if (themeToggler) {
  themeToggler.onclick = () => {
    themeToggler.classList.toggle("dark");
    document.body.classList.toggle("dark", themeToggler.classList.contains("dark"));
    themeToggler.textContent = themeToggler.classList.contains("dark") ? "明" : "暗";
  };
}

// 左右モードボタン
const handToggler = document.querySelector("#lr-toggler");
if (handToggler && header && menu) {
  handToggler.onclick = () => {
    handToggler.classList.toggle("right");
    header.classList.toggle("header-right");
    header.classList.toggle("header-left");
    menu.classList.toggle("menu-left");
    menu.classList.toggle("menu-right");
    document.body.classList.toggle("body-left");
    document.body.classList.toggle("body-right");
    handToggler.textContent = handToggler.classList.contains("right") ? "左" : "右";
  };
}

// 上下モードボタン
const topBottomToggler = document.querySelector("#tb-toggler");
if (topBottomToggler && menu) {
  topBottomToggler.onclick = () => {
    topBottomToggler.classList.toggle("top");
    menu.classList.toggle("menu-top");
    menu.classList.toggle("menu-bottom");
    topBottomToggler.textContent = topBottomToggler.classList.contains("top") ? "下" : "上";
  };
}

// main部分
function updateMain(content) {
  const mainElement = document.querySelector("main");
  if (mainElement) mainElement.innerHTML = content;
}

// ナビゲーションメニューのリンクにイベントリスナーを設定
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    updateMain(`内容: ${event.target.textContent}`);
  });
});

// footer部分
function updateFooter() {
  const footerElement = document.querySelector("footer");
  if (footerElement) {
    const year = new Date().getFullYear();
    footerElement.innerHTML = `&copy; ${year} いえもんくんの錬処 All Rights Reserved`;
  }
}

document.addEventListener("DOMContentLoaded", updateFooter);