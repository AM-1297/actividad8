const btn = document.querySelector('.off');

btn.addEventListener('click', () => {
  if (btn.textContent === 'Off') {
    btn.textContent = 'On';
  } else {
    btn.textContent = 'Off';
  }
});
