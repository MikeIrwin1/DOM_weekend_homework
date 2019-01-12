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
  const product = document.createElement('h1');
  const loc_purch = document.createElement('p');
  const date_purch = document.createElement('p');
  const condition = document.createElement('p');

  product.textContent = `${event.target.product.value}`;
  loc_purch.textContent = `${event.target.loc_purch.value}`;
  date_purch.textContent = `${event.target.date_purch.value}`;
  condition.textContent = `${event.target.condition.value}`;
  list.appendChild(newListItem);
  newListItem.appendChild(product);
  newListItem.appendChild(loc_purch);
  newListItem.appendChild(date_purch);
  newListItem.appendChild(condition);
  event.target.reset();
};
