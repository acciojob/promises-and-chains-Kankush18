//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');

  // Check if inputs are empty
  if (ageInput.value.trim() === '' || nameInput.value.trim() === '') {
    alert('Please fill out all fields');
    return;
  }

  const age = parseInt(ageInput.value);

  // Resolve or reject the promise based on age
  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // Wait for 4 seconds
  });

  // Handle promise resolution/rejection
  agePromise.then(() => {
    alert(`Welcome, ${nameInput.value}. You can vote.`);
  }).catch(() => {
    alert(`Oh sorry, ${nameInput.value}. You aren't old enough.`);
  });

  // Reset form fields
  ageInput.value = '';
  nameInput.value = '';
});