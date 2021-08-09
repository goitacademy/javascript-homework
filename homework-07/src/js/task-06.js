const inputRef = document.querySelector('#validation-input');
const wrongText = document.querySelector('#wrong-text')


inputRef.addEventListener('blur', checkInputLength);

function checkInputLength() {
if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    wrongText.textContent = 'Вы ввели правильное количество символов';
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid');
        };

}   if (inputRef.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add('invalid');
        wrongText.textContent = 'Вы ввели не правильное количество символов';

        if (inputRef.classList.contains('valid)')) {
            inputRef.classList.remove('valid');
        }