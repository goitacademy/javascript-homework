let currentId = 0;

const getTask = text => `
    <li id="task-${++currentId}"">
    <span>${text}</span>
    <button type="button" class="done" aria-label="Done">
        &radic;
    </button>
    <button type="button" class="close" aria-label="Close">
        &times;
    </button>
    </li>
`;

const listRef = document.querySelector('ol');
const inputRef = document.querySelector('#add-input');

const createTask = text => {
  listRef.insertAdjacentHTML('beforeend', getTask(text));

  const task = listRef.querySelector(`#task-${currentId}`);
  task.querySelector('.close').addEventListener('click', e => {
    task.remove();
  });

  const done = task.querySelector('.done');
  const doneEvent = () => {
    task.style.background = 'green';
    done.removeEventListener('click', doneEvent);
  };
  done.addEventListener('click', doneEvent);
};

document.getElementById('add-btn').addEventListener('click', () => {
  const text = inputRef.value;
  inputRef.value = '';
  createTask(text);
});