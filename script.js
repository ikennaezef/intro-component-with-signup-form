const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
const msgs = document.querySelectorAll('.msg');

msgs.forEach(msg => msg.innerText = 'message');

inputs.forEach(input => {
	input.onfocus = ()=> input.parentElement.classList.add('active');
	input.onblur = ()=> input.parentElement.classList.remove('active');
})

form.onsubmit = (e) => {
	e.preventDefault();
	validate(firstName);
	validate(lastName);
	validateMail(email);
	validate(password);
        
        if ( validate(firstName) &&
             validate(lastname) &&
             validate(email) &&
             validate(password)) alert('Success')
}

function validate(input) {
	let msg;
	switch(input) {
		case firstName:
			msg = 'First Name';
			break;
		case lastName:
			msg = 'Last Name';
			break;
		case password:
			msg = 'Password';
			break;
		case email:
			msg = 'Email';
			break;
	}

	if (input.value==='') {
		input.parentElement.nextElementSibling.style.display = 'block';
		input.parentElement.nextElementSibling.innerText= `${msg} cannot be empty`;
		input.parentElement.classList.add('error');
		input.nextElementSibling.style.display = 'block';


		setTimeout(()=>{
			input.parentElement.nextElementSibling.style.display = 'none';
			input.parentElement.nextElementSibling.innerText= '';
			input.parentElement.classList.remove('error');
			input.nextElementSibling.style.display = 'none';
		}, 2000);
                return false;
	} else return true;	
}

function validateMail(mail) {
        if(mail.value==='') { validate(mail) }
	else {
	 const reg = /^\S+@\S+\.\S/;
	 if (!reg.test(mail.value)) {
		mail.parentElement.nextElementSibling.style.display = 'block';
		mail.parentElement.nextElementSibling.innerText= 'Looks like this is not an email';
		mail.parentElement.classList.add('error');
		mail.nextElementSibling.style.display = 'block';

		setTimeout(()=>{
			mail.parentElement.nextElementSibling.style.display = 'none';
			mail.parentElement.nextElementSibling.innerText= '';
			mail.parentElement.classList.remove('error');
			mail.nextElementSibling.style.display = 'none';
		}, 2000);
                return false;
	 } else return true;
       }
}
