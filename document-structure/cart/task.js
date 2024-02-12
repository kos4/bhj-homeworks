document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.cart');
  const cartProducts = cart.querySelector('.cart__products');

  if (cartProducts.childElementCount === 0) {
    hideCart(cart);
  }

  document.querySelectorAll('.product__quantity-control').forEach(item => {
    item.addEventListener('click', e => {
      const parent = item.closest('.product__quantity-controls');
      const elementQuantity = parent.querySelector('.product__quantity-value');
      let quantity = Number(elementQuantity.textContent);

      if (item.classList.contains('product__quantity-control_dec')) {
        quantity--;

        if (quantity < 1) {
          quantity = 1;
        }
      } else {
        quantity++;
      }

      elementQuantity.textContent = quantity;
    });
  });

  document.querySelectorAll('.product__add').forEach(item => {
    item.addEventListener('click', e => {
      const parent =  item.closest('.product');
      const elementProductImg = parent.querySelector('.product__image');
      const product = {
        id: parent.dataset.id,
        quantity: Number(parent.querySelector('.product__quantity-value').textContent),
        img: elementProductImg.src,
      };

      if (cartProducts.childElementCount === 0) {
        cart.style.cssText = '';
      }

      const productInCart = cartProducts.querySelector(`.cart__product[data-id="${product.id}"]`);

      if (productInCart) {
        const elementQuantity = productInCart.querySelector('.cart__product-count');
        elementQuantity.textContent = Number(elementQuantity.textContent) + product.quantity;

        const cartImg = productInCart.querySelector('.cart__product-image').getBoundingClientRect();
        const productImg = elementProductImg.getBoundingClientRect();
        const cloneProductImg = elementProductImg.cloneNode(true);
        cloneProductImg.style.cssText = `position: fixed;top: ${productImg.y}px;left: ${productImg.x}px;z-index: 1;`;
        elementProductImg.insertAdjacentElement('afterend', cloneProductImg);
        const offset = {
          x: Math.abs(cartImg.x - productImg.x),
          y: Math.abs(cartImg.y - productImg.y),
        };
        offset.step = Math.max(offset.x, offset.y)/Math.min(offset.x, offset.y);
        offset.offsetX = offset.x / offset.step;
        offset.offsetY = offset.y / offset.step;
        const intervalId = setInterval(() => {
          offset.step--;
          const item = cloneProductImg.getBoundingClientRect();
          cloneProductImg.style.left = item.x + offset.offsetX + 'px';
          cloneProductImg.style.top = item.y - offset.offsetY + 'px';
          if (offset.step < 0) {
            cloneProductImg.remove();
            clearInterval(intervalId);
          }
        }, 150);
      } else {
        const cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = product.id;
        cartProduct.innerHTML = `
          <img class="cart__product-image" src="${product.img}" alt="">
          <div class="cart__product-count">${product.quantity}</div>
        `;
        const elementDelete = document.createElement('div');
        elementDelete.className = 'cart__product-delete'
        elementDelete.innerHTML = '&times;';
        elementDelete.addEventListener('click', e => {
          const deleteProduct = e.currentTarget.closest('.cart__product');
          deleteProduct.remove();
          if (cartProducts.childElementCount === 0) {
            hideCart(cart);
          }
        });
        cartProduct.append(elementDelete);
        cartProducts.append(cartProduct);
      }
    });
  });
});

function hideCart(cart) {
  cart.style.cssText = 'display: none;';
}