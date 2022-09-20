const form = document.querySelector('.contact-form');
const userName = document.querySelector('#name');
const nameError = document.querySelector('.name-error');

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

const subject = document.querySelector('#subject');
const subjectError = document.querySelector('.subject-error');

const message = document.querySelector('#message');
const messageError = document.querySelector('.message-error');

const validate = (event) => {
	event.preventDefault();

	console.log(userName.value);

	const validateName = validateLength(userName.value, 5, nameError);

	console.log(validateName);

	nameError.style.display = 'block';
};

form.addEventListener('submit', validate);

const validateLength = (value, len, errorType) => {
	if (value.trim().length > len) {
		errorType.style.display = 'none';
		return true;
	} else {
		errorType.style.display = 'block';
		errorList.style.display = 'block';
	}
};
