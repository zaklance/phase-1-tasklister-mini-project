document.addEventListener("DOMContentLoaded", () => {
  const toDo = document.querySelector('#create-task-form');
  toDo.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = e.target['new-task-description'].value;
    const list = document.querySelector('#tasks');
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = 'x'
    li.textContent = inputValue;
    list.append(li);
    li.appendChild(btn);
  });
  // toRemove = document.querySelector('#tasks.li.btn');
  // toRemove.addEventListener('click', (e) => {
    // e.preventDefault();
    // console.log('clicky');
  // });
});
