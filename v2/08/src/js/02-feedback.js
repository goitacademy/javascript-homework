import '../css/common.css';
import '../css/02-feedback.css';

const LS_KEY = 'form-state';
const form = document.querySelector('.feedback-form');
const savedState = JSON.parse(localStorage.getItem(LS_KEY));
const defaultValues = { email: '', message: '' };
const formState = savedState || defaultValues;

populateFormFields();

form.addEventListener('input', () => {
  populateFormState();
  localStorage.setItem(LS_KEY, JSON.stringify(formState));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  localStorage.removeItem(LS_KEY);
});

function populateFormFields() {
  Object.entries(formState).forEach(
    ([key, value]) => (form.elements[key].value = value)
  );
}

function populateFormState() {
  Object.entries(form.elements).forEach(
    ([key, element]) =>
      Number.isNaN(Number(key)) && (formState[key] = element.value)
  );
}
