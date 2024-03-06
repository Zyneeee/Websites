// Function to handle click on Terms of Service link
function handleTermsOfServiceClick() {
  // Add your logic here, such as tracking the click or displaying a confirmation message
}

// Function to handle click on Privacy Policy link
function handlePrivacyPolicyClick() {
  // Add your logic here, such as tracking the click or displaying a confirmation message
}

// Function to generate password
function generatePassword() {
  const length = parseInt(document.getElementById('length').value);

  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;
  
  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';
  
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  document.getElementById('password').value = password;
}

// Event listener for when the page has fully loaded
window.onload = function() {
  // Add event listeners to Terms of Service and Privacy Policy links
  const termsOfServiceLink = document.querySelector('a[href="tos.html"]');
  const privacyPolicyLink = document.querySelector('a[href="privacy_policy.html"]');

  if (termsOfServiceLink) {
    termsOfServiceLink.addEventListener('click', handleTermsOfServiceClick);
  }

  if (privacyPolicyLink) {
    privacyPolicyLink.addEventListener('click', handlePrivacyPolicyClick);
  }
};