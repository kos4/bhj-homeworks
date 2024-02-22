document.addEventListener('DOMContentLoaded', () => {
  const nodeTextEditor = document.getElementById('editor');

  setTextTextEditor(nodeTextEditor);
  saveTextTextEditor(nodeTextEditor);
  clearEditor(nodeTextEditor);
});

const setTextTextEditor = nodeTextEditor => {
  const text = localStorage.getItem('textEditor');

  if (text) {
    nodeTextEditor.value = text;
  }
};

const saveTextTextEditor = nodeTextEditor => {
  nodeTextEditor.addEventListener('keyup', () => {
    const text = nodeTextEditor.value;
    localStorage.setItem('textEditor', text);
  });
};

const clearEditor = nodeTextEditor => {
  const nodeButton = document.getElementById('editorClear');

  nodeButton.addEventListener('click', () => {
    nodeTextEditor.value = '';
    localStorage.removeItem('textEditor');
  });
};