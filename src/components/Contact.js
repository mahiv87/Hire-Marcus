import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const ContactComponent = () => {
	// Create state variables for the fields in the form
	// We are also setting their initial values to an empty string
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		// Based on the input type, we set the state of either email, fullName, and message
		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'fullName') {
			setFullName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleOnBlur = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();
		// Check to see if full name input is empty
		if (!fullName) {
			setErrorMessage('FULL_NAME cannot be empty');
			return;
		}
		// Check to see if the email is not valid or is empty. If so we set an error message to be displayed on the page.
		if (!validateEmail(email)) {
			setErrorMessage('EMAIL_ADDRESS is invalid');
			// We want to exit out of this code block if something is wrong so that the user can correct it
			return;
			// Then we check to see if the message text area is empty. If so, we set an error message regarding the message.
		}

		if (!message) {
			setErrorMessage('MESSAGE cannot be empty');
			return;
		}

		if (fullName && validateEmail(email) && message) {
			setErrorMessage('');
			return;
		}
	};

	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();
		// Check to see if full name input is empty
		if (!fullName) {
			setErrorMessage('FULL_NAME cannot be empty');
			return;
		}
		// Check to see if the email is not valid or is empty. If so we set an error message to be displayed on the page.
		if (!validateEmail(email)) {
			setErrorMessage('EMAIL_ADDRESS is invalid');
			// We want to exit out of this code block if something is wrong so that the user can correct it
			return;
			// Then we check to see if the message text area is empty. If so, we set an error message regarding the message.
		}

		if (!message) {
			setErrorMessage('MESSAGE cannot be empty');
			return;
		}

		// If everything goes according to plan, we want to clear out the input after a successful registration.
		setFullName('');
		setMessage('');
		setEmail('');
		setErrorMessage('');
	};

	return (
		<div className="about container mx-auto flex justify-center items-center animate-fadeIn">
			<div className="glass-container flex justify-center items-center">
				<div className="py-6">
					<h2 className="text-2xl text-white uppercase">
						Contact_Me
					</h2>
					<div className="mt-8 max-w-md">
						<div className="grid grid-cols-1 gap-6">
							<label className="">
								<span className="text-white uppercase">
									Full_name
								</span>
								<input
									value={fullName}
									name="fullName"
									onChange={handleInputChange}
									onBlur={handleOnBlur}
									type="text"
									className="contact-input"
									placeholder=""
								/>
							</label>
							<label className="">
								<span className="text-white uppercase">
									Email_address
								</span>
								<input
									value={email}
									name="email"
									onChange={handleInputChange}
									onBlur={handleOnBlur}
									type="email"
									className="contact-input"
									placeholder=""
								/>
							</label>
							<label className="">
								<span className="text-white uppercase">
									Message
								</span>
								<textarea
									value={message}
									name="message"
									onChange={handleInputChange}
									onBlur={handleOnBlur}
									className="contact-input"
									rows="2"
								></textarea>
							</label>
							{errorMessage && (
								<div>
									<p className="error-text text-center text-lg animate-pulse">
										<i className="fa-solid fa-triangle-exclamation pr-2"></i>
										{errorMessage}
									</p>
								</div>
							)}
							<button
								type="button"
								onClick={handleFormSubmit}
								className="border-solid border w-20 p-1 rounded-sm mx-auto uppercase hover:shadow-sm hover:shadow-white focus:bg-white focus:text-black"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactComponent;
