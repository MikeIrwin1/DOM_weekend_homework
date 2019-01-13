document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form = document.querySelector('#form-wrapper');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  console.dir(event);

  const newListItem = createListItem(event.target);
  const list = document.querySelector('#inventory-list');
  list.appendChild(newListItem);
  event.target.reset();
};

const createListItem = function (form) {
  const newListItem = document.createElement('li');
  newListItem.classList.add('inventory-list-item')

  const product = document.createElement('p');
  product.textContent = `Product: ${form.product.value}`;
  newListItem.appendChild(product);

  const loc_purch = document.createElement('p');
  loc_purch.textContent = `Location Purchased: ${form.loc_purch.value}`;
  newListItem.appendChild(loc_purch);

  const date_purch = document.createElement('p');
  date_purch.textContent = `Purchase Date: ${form.date_purch.value}`;
  newListItem.appendChild(date_purch);

  const condition = document.createElement('p');
  condition.textContent = `Item Condition: ${form.condition.value}`;
  newListItem.appendChild(condition);

  const price = document.createElement('p');
  price.textContent = `Item Price: £${form.price.value}`;
  newListItem.appendChild(price);

  return newListItem;
};

const handleDeleteAll = function (event) {
  const inventoryList = document.querySelector('#inventory-list');
  inventoryList.innerHTML = '';
}
