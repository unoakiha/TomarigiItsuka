const toggleBtn = document.getElementById('menu-toggle'); // ボタン取得
const navMenu = document.getElementById('nav-menu'); // メニュー取得

toggleBtn.addEventListener('click', () => {
 navMenu.classList.toggle('open');
});

const menuBar = document.querySelector('.menuBar');

// 既存のスクロール監視
window.addEventListener('scroll', () => {
  // スクロール時に shrink クラス（今は不要）を操作してた場所に…

  // メニューが開いてたら閉じる
  if (navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
  }
});

// なめらかで遅めのスクロール（500ms〜800ms程度）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 160;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});