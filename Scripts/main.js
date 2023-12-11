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
