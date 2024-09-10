document.getElementById('contributionForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const semester = document.getElementById('semester').value;
  const phone = document.getElementById('phone').value;
  const amount = document.getElementById('amount').value;

  const response = await fetch('https://script.google.com/macros/s/AKfycbyjcSJFpjYZn4aTH8_fYUmU1wyft9h1Z-GW_zsjMnYVR37FnkYGnKRCAaPGvm6-zH9r/exec', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, semester, phone, amount })
  });

  const result = await response.json();
  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.textContent = result.result === "Success" ? 'Payment confirmed. Thank you!' : 'An error occurred. Please try again.';
});
