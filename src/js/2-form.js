const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localData) {
  const { email, message } = localData;
  formData.email = email;
  formData.message = message;
  document.querySelector('input[name="email"]').value = email;
  document.querySelector('textarea[name="message"]').value = message;
}

form.addEventListener('input', event => {
  formData[event.target.getAttribute('name')] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    !(event.target.elements.email.value && event.target.elements.message.value)
  ) {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.clear();
    event.target.reset();
    formData.email = '';
    formData.message = '';
  }
});
