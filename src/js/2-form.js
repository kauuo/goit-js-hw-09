const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.form-email');
const messageInput = document.querySelector('.form-text-area');

form.addEventListener('submit', handleSubmit);
emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();

  console.log(formData);
  event.target.reset();
  localStorage.removeItem('formData');
}

function handleInput() {
  formData.email = emailInput.value;
  formData.message = messageInput.value;

  localStorage.setItem('formData', JSON.stringify(formData));
}

function populateFormData() {
  const savedFormData = localStorage.getItem('formData');

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    emailInput.value = parsedFormData.email;
    messageInput.value = parsedFormData.message;
    Object.assign(formData, parsedFormData);
  }
}












//__________________________________________________//

// const formData = {
//   email: '',
//   message: '',
// };

// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageInput = form.querySelector('textarea');

// form.addEventListener('submit', handleSubmit);
// emailInput.addEventListener('input', handleInput);
// messageInput.addEventListener('input', handleInput);
// populateFormData();

// function handleSubmit(event) {
//   event.preventDefault();

//   console.log(formData);

//   event.target.reset();
//   localStorage.removeItem('formData');
// }

// function handleInput() {
//   formData.email = emailInput.value;
//   formData.message = messageInput.value;

//   localStorage.setItem('formData', JSON.stringify(formData));
// }

// function populateFormData() {
//   const savedFormData = localStorage.getItem('formData');

//   if (savedFormData) {
//     const parsedFormData = JSON.parse(savedFormData);
//     emailInput.value = parsedFormData.email;
//     messageInput.value = parsedFormData.message;
//     Object.assign(formData, parsedFormData);
//   }
// }
