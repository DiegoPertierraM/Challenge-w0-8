export const orderPizza = () => {
  const sendBtn = document.querySelector('.send-btn');

  const onClick = (event) => {
    const resultText = document.querySelector('.result');
    const checkboxValues = [];
    event.preventDefault();
    const pizzaSize = document.querySelector('#pizza-size').value;
    const breadOptions = document.querySelector('#bread-options').value;

    document.querySelectorAll('.checkbox').forEach((checkbox) => {
      if (checkbox.checked === true) {
        checkboxValues.push(checkbox.name);
      }
    });

    if (checkboxValues.length >= 1) {
      resultText.innerHTML = `Has pedido una pizza ${pizzaSize} con masa ${breadOptions}
  con los siguientes ingredientes: ${checkboxValues.join(', ')}`;
      sendBtn.value = 'Pedir otra pizza';
    } else {
      resultText.innerHTML = 'Debes introducir al menos 1 ingrediente!';
    }
    resultText.removeAttribute('hidden');
  };

  sendBtn.addEventListener('click', onClick);
};
