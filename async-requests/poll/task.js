document.addEventListener('DOMContentLoaded', () => {
  getQuestion();
});

const getQuestion = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.send();
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const response = JSON.parse(xhr.responseText);
      setQuestionTitle(response.data.title);
      setQuestionAnswers(response);
    }
  });
};

const setQuestionTitle = (title) => {
  const element = document.getElementById('poll__title');
  element.textContent = title;
};

const setQuestionAnswers = (response) => {
  const element = document.getElementById('poll__answers');
  element.textContent = '';
  response.data.answers.forEach((item, index) => {
    const answer = document.createElement('button');
    answer.className = 'poll__answer';
    answer.textContent = item;
    answer.dataset.id = index;
    answer.addEventListener('click', e => {
      const that = e.target;
      alert('Спасибо, ваш голос засчитан!');
      sendAnswer(response.id, that.dataset.id, element);
    });
    element.append(answer);
  });
};

const sendAnswer = (questionId, answerId, element) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`vote=${questionId}&answer=${answerId}`);
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const response = JSON.parse(xhr.responseText);
      setQuestionResult(element, response);
    }
  });
};

const setQuestionResult = (element, response) => {
  element.textContent = '';
  const sumResult = getSumResult(response.stat);
  response.stat.forEach(item => {
    const elementResult = document.createElement('div');
    elementResult.className = 'poll__result';
    elementResult.innerHTML = `${item.answer}: <b>${getResultPercent(sumResult, item.votes)}%</b>`;
    element.append(elementResult);
  });
};

const getSumResult = result => {
  return result.reduce((acc, item) => acc += item.votes, 0);
};

const getResultPercent = (sum, value) => {
  let n = 2;
  value = Number(value) * 100 / sum;

  if (value % 1 === 0) {
    n = 0;
  }

  return value.toFixed(n);
};