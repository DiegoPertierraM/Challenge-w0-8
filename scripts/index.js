const sendBtn = document.querySelector('.send-btn');
const form = document.querySelector('form');
const selectPizzaSize = document.querySelector('#pizza-size');
const selectBreadOptions = document.querySelector('#bread-options');
const result = document.querySelector('.result');

const onSubmit = (event) => {
  const checkboxValues = [];
  event.preventDefault();
  const pizzaSize = selectPizzaSize.value;
  const breadOptions = selectBreadOptions.value;
  document.querySelectorAll('.custom-checkbox').forEach((checkbox) => {
    if (checkbox.checked === true) {
      checkboxValues.push(checkbox.name);
    }
  });
  if (checkboxValues.length >= 1) {
    result.innerHTML = `Has pedido una pizza ${pizzaSize} con masa ${breadOptions}
  con los siguientes ingredientes: ${checkboxValues.join(', ')}`;
  } else {
    result.innerHTML = 'Debes introducir al menos 1 ingrediente!';
  }
  sendBtn.value = 'Pedir otra pizza';
};

sendBtn.addEventListener('click', onSubmit);
