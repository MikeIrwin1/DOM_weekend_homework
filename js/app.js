document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form = document.querySelector('#form-wrapper');
  form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  console.dir(event);

  const list = document.querySelector('#read-list');
  const newListItem = document.createElement('li');
  const title = document.createElement('h1');
  const author = document.createElement('h3');
  const genre = document.createElement('h4');

  title.textContent = `${event.target.title.value}`;
  author.textContent = `${event.target.author.value}`;
  genre.textContent = `${event.target.genre.value}`;
  list.appendChild(newListItem);
  newListItem.appendChild(title);
  newListItem.appendChild(author);
  newListItem.appendChild(genre);
  event.target.reset();
};
