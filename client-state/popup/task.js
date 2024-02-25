document.addEventListener('DOMContentLoaded', () => {
  showModal();
});

const showModal = () => {
  const nodeModal = document.querySelector('.modal');

  if (!getCookie('closeModal')) {
    nodeModal.classList.toggle('modal_active');
  }

  closeModal(nodeModal);
};

const closeModal = nodeModal => {
  const nodeButtonClose = nodeModal.querySelector('.modal__close');
  nodeButtonClose.addEventListener('click', () => {
    nodeModal.classList.toggle('modal_active');
    setCookie('closeModal', true, 60*60*24);
  });
};

const setCookie = (name, value, second = 0, path = '', domain = '') => {
  value = encodeURIComponent(value);

  let date = '';
  if (second > 0) {
    date = new Date(Date.now() + second * 1000).toUTCString();
  }

  document.cookie = `${name}=${value}; Expires=${date}; Path=${path}; Domain=${domain}`;
};

const deleteCookie = name => {
  const date = new Date (1).toUTCString();
  document.cookie = `${name}=; Expires=${date}`;
};

const getCookie = name => {
  return document.cookie
    .split("; ")
    .find(str => str.startsWith(`${name}=`))
    ?.split("=")[1];
};