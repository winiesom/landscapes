document.addEventListener('DOMContentLoaded', initFormValidation);

function initFormValidation() {
  const form = document.querySelector('.contact-form');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Firstname
    if (firstname.value.trim() === '') {
      showError(firstname, 'firstname-error', 'First name is required.');
      isValid = false;
    }

    // Lastname
    if (lastname.value.trim() === '') {
      showError(lastname, 'lastname-error', 'Last name is required.');
      isValid = false;
    }

    // Email
    const email = document.getElementById('email');
    // This regex check for a valid basic email structure:
    // ^ - start of the string
    // [^ ]+ - one or more characters that are NOT a space(this is the part before the @)
    // @ - the @ symbol must be present in all emails
    // [^ ]+ one or more characters that are NOT a space(this is the domain name, like gmail)
    // \. - a literal dot
    // [a-z]{2,} - at least two lowercase letters (like com, uk, org)
    // $ - end of the string
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (email.value.trim() === '') {
      showError(email, 'email-error', 'Email is required.');
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, 'email-error', 'Please enter a valid email.');
      isValid = false;
    }

    // Phone (rquired, must be 10 digits)
    const phone = document.getElementById('phone');
    const phoneValue = phone.value.trim();
    // This regex checks for exactly 10 difits (0-9):
    // ^ - start of the string
    // [0-9] - allows any digit between 0 and 9
    // {10} - must be exactly 10 digits long (no more, no less)
    // $ - the end of the string
    const phonePattern = /^[0-9]{10}$/;
    if (phoneValue === '') {
      showError(phone, 'phone-error', 'Phone number is required.');
      isValid = false;
    } else if (!phonePattern.test(phoneValue)) {
      showError(phone, 'phone-error', 'Phone number must be 10 digits.');
      isValid = false;
    }

    // Age
    const age = document.getElementById('age');
    const ageValue = age.value.trim();

    if (ageValue === '') {
      showError(age, 'age-error', 'Age is required');
      isValid = false;
    } else {
      const ageNumber = parseInt(ageValue);
      if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 100) {
        showError(age, 'age-error', 'Age must be between 18 and 100.');
        isValid = false;
      }
    }

    // Gender (required radio)
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const genderError = document.getElementById('gender-error');
    const genderSelected = Array.from(genderRadios).some((r) => r.checked);
    if (!genderSelected) {
      genderError.textContent = 'Please select a gender.';
      isValid = false;
    }

    // Interests (at least one checkbox is checked)
    const interests = document.querySelectorAll(
      'input[name="interest"]:checked'
    );
    const interestError = document.getElementById('interests-error');
    if (interests.length === 0) {
      interestError.textContent = 'Please select at least one interest.';
      isValid = false;
    }

    // Inquiry (select dropdown)
    const category = document.getElementById('category');
    if (category.value == '') {
      showError(category, 'inquiry-error', 'Please select an inquiry type.');
      isValid = false;
    }

    // Message
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
      showError(message, 'message-error', 'Message is required.');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      form.submit();
    }
  });
}

function showError(input, errorId, message) {
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', true);
  const error = document.getElementById(errorId);
  if (error) error.textContent = message;
}

function clearErrors() {
  const inputs = document.querySelectorAll(
    '.contact-form input, .contact-form textarea, .contact-form select'
  );
  inputs.forEach((input) => {
    input.classList.remove('invalid', 'valid');
    input.removeAttribute('aria-invalid');
  });

  const errors = document.querySelectorAll('.error-message');
  errors.forEach((e) => (e.textContent = ''));
}
