// darkmode.js

const btn = document.getElementById('modeToggle');
const currentTheme = localStorage.getItem('theme');

// 1. ページ読み込み時に保存されたテーマを適用
if (currentTheme === 'dark') {
    document.body.classList.add('darkMode');
    btn.textContent = '☀️ ライトモードへ';
}

// 2. ボタンクリック時の処理
btn.addEventListener('click', () => {
    // bodyの dark-mode クラスを反転（あれば消す、なければ足す）
    document.body.classList.toggle('darkMode');
    
    let theme = 'light';
    if (document.body.classList.contains('darkMode')) {
        theme = 'dark';
        btn.textContent = '☀️ ライトモードへ';
    } else {
        btn.textContent = '🌙 ダークモードへ';
    }
    
    // 3. ユーザーの選択を保存
    localStorage.setItem('theme', theme);
});