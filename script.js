window.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fadein');

  function checkVisibility() {
    const windowBottom = window.innerHeight + window.scrollY;
    fadeElems.forEach(elem => {
      const elemTop = elem.offsetTop;
      if (windowBottom > elemTop + 100) { // 100px 手前で表示
        elem.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // 初回チェック
});
