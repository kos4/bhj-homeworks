const defaultCurrency = 'руб.';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
document.addEventListener('DOMContentLoaded', () => {
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const data = JSON.parse(xhr.responseText).response.Valute;
      const elementCurrency = document.querySelector('#items');
      elementCurrency.textContent = '';
      for (const key in data) {
        creatItemCurrency(key, data, elementCurrency);
      }
      hideLoader();
    }
  });
});

const creatItemCurrency = (key, data, elementCurrency) => {
  const elementItem = {
    item: document.createElement('div'),
    code: document.createElement('div'),
    value: document.createElement('div'),
    currency: document.createElement('div'),
  };
  for (const index in elementItem) {
    if (index === 'item') {
      elementItem[index].className = 'item';
    } else {
      elementItem[index].className = 'item__' + index;
    }

    switch (index) {
      case 'code':
        elementItem[index].textContent = data[key].CharCode;
        break;
      case 'value':
        elementItem[index].textContent = data[key].Value;
        break;
      case 'currency':
        elementItem[index].textContent = defaultCurrency;
        break;
    }
  }
  elementItem.item.append(elementItem.code);
  elementItem.item.append(elementItem.value);
  elementItem.item.append(elementItem.currency);
  elementCurrency.append(elementItem.item);
};

const hideLoader = () => {
  const loader = document.getElementById('loader');
  loader.classList.remove('loader_active');
};