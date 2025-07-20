$(document).ready(function () {
  $('#registrationForm').submit(function (e) {
    e.preventDefault();
    
    let isValid = true;
    $('.error').text('');
    $('#successMessage').text('');

    const name = $('#name').val().trim();
    const studentId = $('#studentId').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();
    const department = $('#department').val();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      $('#nameError').text('Name is required.');
      isValid = false;
    }

    if (!studentId) {
      $('#idError').text('ID is required.');
      isValid = false;
    }

    if (!email) {
      $('#emailError').text('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      $('#emailError').text('Enter a valid email.');
      isValid = false;
    }

    if (!password) {
      $('#passwordError').text('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      $('#passwordError').text('Password must be at least 6 characters.');
      isValid = false;
    }

    if (!confirmPassword) {
      $('#confirmPasswordError').text('Please confirm your password.');
      isValid = false;
    } else if (password !== confirmPassword) {
      $('#confirmPasswordError').text('Passwords do not match.');
      isValid = false;
    }

    if (!department) {
      $('#departmentError').text('Please select a department.');
      isValid = false;
    }

    if (isValid) {
      $('#successMessage').text('Form submitted successfully!');
      this.reset();
    }
  });
});
