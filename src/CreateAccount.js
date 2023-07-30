document.addEventListener('DOMContentLoaded', function() {
	const signInLink = document.querySelector('#sign-in-link');
	const createAccountLink = document.querySelector('#create-account-link');
	const signInForm = document.querySelector('#signin-form');
	const createAccountForm = document.querySelector('#signup-form');

	signInLink.addEventListener('click', function(event) {
		event.preventDefault();
		signInForm.classList.remove('hidden');
		createAccountForm.classList.add('hidden');
	});

	createAccountLink.addEventListener('click', function(event) {
		event.preventDefault();
		signInForm.classList.add('hidden');
		createAccountForm.classList.remove('hidden');
	});

	const signInSubmit = signInForm.querySelector('form');
	const createAccountSubmit = createAccountForm.querySelector('form');

	signInSubmit.addEventListener('submit', function(event) {
		event.preventDefault();
		// Sign In Form Submission Here
		const email = signInForm.querySelector('#email').value;
		const password = signInForm.querySelector('#password').value;
		console.log(`Sign In - Email: ${email}, Password: ${password}`);
	});

	createAccountSubmit.addEventListener('submit', function(event) {
		event.preventDefault();
		// Create Account Form Submission Here
		const newEmail = createAccountForm.querySelector('#new-email').value;
		const newPassword = createAccountForm.querySelector('#new-password').value;
		const confirmPassword = createAccountForm.querySelector('#confirm-password').value;
		console.log(`Create Account - Email: ${newEmail}, Password: ${newPassword}, Confirm Password: ${confirmPassword}`);
	});
});
