window.addEventListener('load', function() { window.scrollTo(0, 0); });

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✅ Request Sent! We\'ll be in touch soon.';
  btn.style.background = '#22c55e';
  btn.style.color = '#fff';
  btn.disabled = true;
}
