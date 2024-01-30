document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(item => {
    item.addEventListener('click', e => {
      const that = e.currentTarget;
      const parent = that.closest('.tabs');
      const currentIndex = Array.from(parent.querySelectorAll('.tab')).indexOf(that);
      const currentContent = Array.from(parent.querySelectorAll('.tab__content'));

      parent.querySelectorAll('.tab.tab_active').forEach(item => {
        item.classList.remove('tab_active');
      });
      parent.querySelectorAll('.tab__content.tab__content_active').forEach(item => {
        item.classList.remove('tab__content_active');
      });
      that.classList.add('tab_active');
      currentContent[currentIndex].classList.add('tab__content_active');
    });
  });
});