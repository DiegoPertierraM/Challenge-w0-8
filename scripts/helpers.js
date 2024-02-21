export const orderPizza = () => {
  const sendBtn = document.querySelector('.send-btn');
  const selectPizzaSize = document.querySelector('#pizza-size');
  const selectBreadOptions = document.querySelector('#bread-options');
  const result = document.querySelector('.result');

  const onSubmit = (event) => {
    const checkboxValues = [];
    event.preventDefault();
    const pizzaSize = selectPizzaSize.value;
    const breadOptions = selectBreadOptions.value;
    document.querySelectorAll('.checkbox').forEach((checkbox) => {
      if (checkbox.checked === true) {
        checkboxValues.push(checkbox.name);
      }
    });
    if (checkboxValues.length >= 1) {
      result.innerHTML = `Has pedido una pizza ${pizzaSize} con masa ${breadOptions}
  con los siguientes ingredientes: ${checkboxValues.join(', ')}`;
      sendBtn.value = 'Pedir otra pizza';
    } else {
      result.innerHTML = 'Debes introducir al menos 1 ingrediente!';
    }
  };
  sendBtn.addEventListener('click', onSubmit);
};
