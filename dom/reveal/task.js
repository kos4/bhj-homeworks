document.addEventListener('DOMContentLoaded', () => {
  const elementsReveal = document.querySelectorAll('.reveal');
  const viewportHeight = window.innerHeight;

  document.addEventListener('scroll', e => {
    elementsReveal.forEach(item => {
      const elementPosition = item.getBoundingClientRect();

      if (elementPosition.top > 0 && elementPosition.top < viewportHeight) {
        item.classList.add('reveal_active');
      } else {
        item.classList.remove('reveal_active');
      }
    });
  });
});