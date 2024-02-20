document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms.form;
  const elementProgress = document.getElementById('progress');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.getAttribute('action'));
    xhr.upload.addEventListener('loadstart', e => {
      setProgress(elementProgress);
    });
    xhr.upload.addEventListener('progress', e => {
      setProgress(elementProgress, e);
    });
    xhr.send(formData);
  });

  form.file.addEventListener('change', () => {
    setProgress(elementProgress);
  });
});

const setProgress = (element, event = null) => {
  let value = '0.0'
  if (event) {
    value = (event.loaded / event.total).toFixed(1);
  }
  element.setAttribute('value', value);
};