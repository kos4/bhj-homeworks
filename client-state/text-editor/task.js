document.addEventListener('DOMContentLoaded', () => {
  const nodeTextEditor = document.getElementById('editor');

  setTextTextEditor(nodeTextEditor);
  saveTextTextEditor(nodeTextEditor);
  clearEditor(nodeTextEditor);
});

const setTextTextEditor = nodeTextEditor => {
  nodeTextEditor.value = localStorage.getItem('textEditor');
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