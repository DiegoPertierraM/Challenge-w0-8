const sendBtn = document.querySelector('.send-btn');
const form = document.querySelector('form');
const selectPizzaSize = document.querySelector('#pizza-size');
const selectBreadOptions = document.querySelector('#bread-options');
const pepperoni = document.querySelector('#pepperoni');
const mushrooms = document.querySelector('#mushrooms');
const onion = document.querySelector('#onion');
const pepper = document.querySelector('#pepper');
const pineapple = document.querySelector('#pineapple');
const result = document.querySelector('.result');
const checkboxValues = [];

document.querySelectorAll('.custom-checkbox').forEach((checkbox) => {
  if (checkbox.checked === true) {
    console.log(true);
  }
});

const onSubmit = (event) => {
  event.preventDefault();
  const pizzaSize = selectPizzaSize.value;
  const breadOptions = selectBreadOptions.value;
  result.innerHTML = `Has pedido una pizza ${pizzaSize} de masa ${breadOptions}
  con: `;
  console.log(checkboxValues);
};

sendBtn.addEventListener('click', onSubmit);
