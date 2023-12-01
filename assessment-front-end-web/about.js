console.log("hello world");

function complimentUser() {
	alert('You got style!')
}

document.getElementById('cat').addEventListener('mouseover', complimentUser)

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);