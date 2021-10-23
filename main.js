const $message = document.querySelector('#message');
const $textMessage = document.querySelector('#text-message');
const $button = document.querySelector('#button');
const $msgError = document.querySelector('.alert');

$button.addEventListener('click', () => {
  let message = $message.value;
  if (message === '' || message === ' ') {
    $msgError.classList.add('show');
  } else {
    $msgError.classList.remove('show');
    
    $textMessage.textContent = message;
  }
});
