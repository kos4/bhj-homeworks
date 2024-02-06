document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(rotator => {
    const rotatorItems = rotator.querySelectorAll('.rotator__case');
    let start = -1;
    const intervalId = setInterval(() => {
      start++;
      rotatorItems[start].classList.remove('rotator__case_active');
      if (start === rotatorItems.length - 1) {
        start = -1;
      }
      rotatorItems[start+1].classList.add('rotator__case_active');
    }, 1000);
  });

  const rotatorsColor = document.querySelectorAll('.rotator-color');
  rotatorsColor.forEach(rotator => {
    setTimeout(rotate, 0, rotator.lastElementChild);
  });

});

function rotate(item) {
  item.classList.remove('rotator__case_active');
  item.removeAttribute('style');
  let nextItem = item.nextElementSibling;

  if (!nextItem) {
    nextItem = item.parentElement.firstElementChild;
  }

  nextItem.classList.add('rotator__case_active');
  nextItem.style.color = nextItem.dataset.color;

  setTimeout(rotate, nextItem.dataset.speed, nextItem);
}