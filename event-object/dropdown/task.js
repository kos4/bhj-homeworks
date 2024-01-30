document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.querySelectorAll('.dropdown__value');
  dropdownBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      const parent = item.parentElement;
      const list = parent.querySelector('.dropdown__list');
      list.classList.toggle('dropdown__list_active');
    });
  });

  const dropdownLink = document.querySelectorAll('.dropdown .dropdown__link');
  dropdownLink.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const parent = item.closest('.dropdown');
      parent.querySelector('.dropdown__value').textContent = item.textContent;
      parent.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    });
  });
});