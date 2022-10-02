const form = document.querySelector('.contact-form');
const userName = document.querySelector('#name');
const nameError = document.querySelector('.name-error');

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

const subject = document.querySelector('#subject');
const subjectError = document.querySelector('.subject-error');

const message = document.querySelector('#message');
const messageError = document.querySelector('.message-error');

const success = document.querySelector('.success');
const closeSuccess = document.querySelector('.success-btn');

const validate = (event) => {
	event.preventDefault();

	const validateName = validateLength(userName.value, 5, nameError);
	const validateSubject = validateLength(subject.value, 15, subjectError);
	const validateMessage = validateLength(message.value, 25, messageError);
	const validateEmail = emailValidationFunction(email.value);

	if (!validateEmail) {
		emailError.style.display = 'block';
	}

	if (validateName && validateEmail && validateSubject && validateMessage) {
		success.style.display = 'block';
		setTimeout(() => {
			success.style.display = 'none';
		}, 5000);
	}

	
};

form.addEventListener('submit', validate);

const validateLength = (value, len, errorType) => {
	if (value.trim().length > len) {
		errorType.style.display = 'none';
		return true;
	} else {
		errorType.style.display = 'block';
	}
};

const emailValidationFunction = (email) => {
	const regEx = /\S+@\S+\.\S/;
	const patternMatches = regEx.test(email);
	return patternMatches;
};


