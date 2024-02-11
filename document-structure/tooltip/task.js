document.addEventListener("DOMContentLoaded", () => {
  const tooltipElements = document.querySelectorAll('.has-tooltip');
  tooltipElements.forEach(tooltipElement => {
    tooltipElement.addEventListener('click', e => {
      e.preventDefault();
      let tooltip = tooltipElement.nextElementSibling;

      if (tooltip && tooltip.classList.contains('tooltip')) {
        tooltip.classList.toggle('tooltip_active');
      } else {
        const tooltipElementPosition = tooltipElement.getBoundingClientRect();
        tooltip = document.createElement('div');
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.innerText = tooltipElement.title;
        tooltipElement.insertAdjacentElement('afterend', tooltip);
        const positionCss = {
          top: `top: ${tooltipElementPosition.top - tooltip.offsetHeight}px;left: ${tooltipElementPosition.left}px;`,
          bottom: `top: ${tooltipElementPosition.top + tooltipElementPosition.height}px;left: ${tooltipElementPosition.left}px;`,
          left: `top: ${tooltipElementPosition.top - tooltipElementPosition.height / 2}px;left: ${tooltipElementPosition.left - tooltip.offsetWidth}px;`,
          right: `top: ${tooltipElementPosition.top - tooltipElementPosition.height / 2}px;left: ${tooltipElementPosition.left + tooltipElementPosition.width}px;`,
        };

        if (tooltipElement.dataset.position) {
          tooltip.style.cssText = positionCss[tooltipElement.dataset.position];
        } else {
          tooltip.style.cssText = positionCss.bottom;
        }
      }
    });
  });
});