
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STATE_KEY = 'feedback-form-state';



const saveStateToLocalStorage = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
};

const fillFormFromState = () => {
  const state = JSON.parse(localStorage.getItem(STATE_KEY));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log('Feedback submitted:', state);
  localStorage.removeItem(STATE_KEY);
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', throttle(saveStateToLocalStorage, 500));

fillFormFromState();

form.addEventListener('submit', handleSubmit);
