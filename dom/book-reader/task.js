document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');
  changeBtn(book, 'book', 'font-size', 'book__control_font-size');
  changeBtn(book, 'book', 'color', 'book__control_color');
  changeBtn(book, 'book', 'color', 'book__control_background');
});

function changeBtn(book, className, btnClass, parent) {
  const btn = book.querySelectorAll('.' + parent + ' .'+btnClass);
  btn.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const btnActive = book.querySelectorAll('.' + parent + ' .'+btnClass + '_active');
      if (btnActive.length) {
        btnActive.forEach(el => {
          el.classList.remove(btnClass + '_active');
        });
      }
      item.classList.add(btnClass + '_active');
      changeBook(book, className);
    });
  });
}

function changeBook(book, className) {
  book.className = className;
  const fontSize = book.querySelector('.font-size_active').dataset.size;
  if (fontSize) {
    book.classList.add('book_fs-' + fontSize);
  }
  const color = book.querySelector('.book__control_color .color_active').dataset.textColor;
  book.classList.add('book_color-' + color);
  const bg = book.querySelector('.book__control_background .color_active').dataset.bgColor;
  book.classList.add('book_bg-' + bg);
}