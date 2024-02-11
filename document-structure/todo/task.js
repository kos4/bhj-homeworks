document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tasks__form');
  const btnAddTask = form.tasks__add;
  const inputTextTask = form.task__input;
  const taskList = document.getElementById('tasks__list');

  btnAddTask.addEventListener('click', e => {
    addTask(e, inputTextTask, taskList);
  });
  inputTextTask.addEventListener('keyup', e => {
    if (e.code === 'Enter') {
      addTask(e, inputTextTask, taskList);
    }
  });

});

function addTask(e, inputTextTask, taskList) {
  e.preventDefault();
  const form = inputTextTask.form;
  const taskText = inputTextTask.value.trim();

  if (taskText !== '') {
    const elementTask = document.createElement('div');
    elementTask.className = 'task';

    const elementTaskText = document.createElement('div');
    elementTaskText.className = 'task__title';
    elementTaskText.textContent = taskText;

    const elementTaskBtnRemove = document.createElement('a');
    elementTaskBtnRemove.href = '#';
    elementTaskBtnRemove.className = 'task__remove';
    elementTaskBtnRemove.innerHTML = '&times;';
    elementTaskBtnRemove.addEventListener('click', e => {
      e.preventDefault();
      const task = elementTaskBtnRemove.closest('.task');
      task.remove();
    });

    elementTask.appendChild(elementTaskText);
    elementTask.appendChild(elementTaskBtnRemove);
    taskList.appendChild(elementTask);
    form.reset();
  }
}