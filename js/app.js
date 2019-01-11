document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form = document.querySelector('#form-wrapper');
  form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  console.dir(event);
  
};
