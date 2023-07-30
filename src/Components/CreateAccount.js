document.addEventListener('DOMContentLoaded', function() {
	const createAccountForm = document.querySelector('#create-account-form');

	// Uncomment these lines if you want to handle switching between Create Account and Sign In forms
	// const signInLink = document.querySelector('#sign-in-link');
	// const signInForm = document.querySelector('#signin-form');
	// signInLink.addEventListener('click', function(event) {
	// 	event.preventDefault();
	// 	signInForm.classList.remove('hidden');
	// 	createAccountForm.classList.add('hidden');
	// });
	// createAccountForm.addEventListener('click', function(event) {
	// 	event.preventDefault();
	// 	signInForm.classList.add('hidden');
	// 	createAccountForm.classList.remove('hidden');
	// });

	createAccountForm.addEventListener('submit', function(event) {
		event.preventDefault();
		const newUsername = createAccountForm.querySelector('#new-username').value;
		const newEmail = createAccountForm.querySelector('#new-email').value;
		const newPassword = createAccountForm.querySelector('#new-password').value;
		const confirmPassword = createAccountForm.querySelector('#confirm-password').value;

		// Check if passwords match
		if (newPassword !== confirmPassword) {
			console.error('Passwords do not match');
			return;
		}

		// Make a POST request to create a new user account
		fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: newUsername, // Use the provided username field
				email: newEmail,
				password: newPassword
			})
		})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			// Handle the response data if necessary
			console.log('User created:', data);
		})
		.catch(error => {
			// Handle any errors that occurred during the request
			console.error('Error creating user:', error);
		});
	});
});
