window.addEventListener('load', function() { window.scrollTo(0, 0); });

async function submitForm(e) {
  e.preventDefault();
  const btn    = document.getElementById('cf-btn');
  const status = document.getElementById('cf-status');

  btn.disabled = true;
  btn.textContent = 'Sending...';
  status.textContent = '';

  const payload = {
    first_name:   document.getElementById('cf-name').value.trim(),
    email:        document.getElementById('cf-email').value.trim(),
    phone_number: document.getElementById('cf-phone').value.trim(),
    message:      document.getElementById('cf-message').value.trim(),
  };

  try {
    const res = await fetch('https://joyjunk-form.mikedurighello.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (data.success) {
      btn.textContent = '✅ Request Sent!';
      btn.style.background = '#22c55e';
      btn.style.color = '#fff';
      status.textContent = "Thank you! We'll be in touch shortly.";
      status.style.color = '#22c55e';
      document.getElementById('contact-form').reset();
    } else {
      throw new Error('failed');
    }
  } catch {
    btn.disabled = false;
    btn.textContent = 'Submit';
    status.textContent = 'Something went wrong. Please call us at (805) 424-5727.';
    status.style.color = '#f87171';
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✅ Request Sent! We\'ll be in touch soon.';
  btn.style.background = '#22c55e';
  btn.style.color = '#fff';
  btn.disabled = true;
}
