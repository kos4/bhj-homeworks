document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.signin__form;
  const nodeWelcome = document.getElementById('welcome');
  let user_id = localStorage.getItem('user_id');
  const nodeButtonLogout = document.getElementById('logout');

  if (user_id > 0) {
    accessLogin(user_id, form, nodeWelcome);
  }

  nodeButtonLogout.addEventListener('click', () => {
    logout(form, nodeWelcome);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn = form.querySelector('#signin__btn');
    btn.setAttribute('disabled', '');
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.addEventListener('load', () => {
      let response = xhr.response;

      if (xhr.status.toString()[0] === '2') {
        if (response.success) {
          user_id = response['user_id'];
          accessLogin(user_id, form, nodeWelcome);
          localStorage.setItem('user_id', user_id);
        } else {
          alert('Неверный логин/пароль');
        }
      } else {
        alert(response.message);
      }
    });

    xhr.addEventListener('error', () => {
      alert(`Во время выполнения запроса произошла ошибка ${xhr.status}. ${xhr.statusText}.`);
      console.log(xhr);
    });

    xhr.addEventListener('loadend', () => {
      btn.removeAttribute('disabled');
    });
  });
});

const accessLogin = (userId, form, nodeWelcome) => {
  const nodeUserId = nodeWelcome.querySelector('#user_id');
  nodeUserId.textContent = userId;
  nodeWelcome.classList.toggle('welcome_active');
  form.closest('.signin').classList.toggle('signin_active');
};

const logout = (form, nodeWelcome) => {
  localStorage.removeItem('user_id');
  nodeWelcome.classList.toggle('welcome_active');
  form.reset();
  form.closest('.signin').classList.toggle('signin_active');
}

