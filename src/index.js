document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    buildToDo(e.target.querySelector('#new-task-description').value);
  })
});

function buildToDo(task) {
  let p = document.createElement('p');
  p.textContent = `${task} `;
  let btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click',handleDelete)
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
