document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const lightBtn = document.querySelector('.light-btn');
  const darkBtn = document.querySelector('.dark-btn');

  lightBtn.addEventListener('click', () => {
    body.classList.add('light');
    body.classList.remove('dark');
    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
  });

  darkBtn.addEventListener('click', () => {
    body.classList.add('dark');
    body.classList.remove('light');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
  });
});