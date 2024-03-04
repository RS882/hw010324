const formNode = document.querySelector(".form");


formNode.addEventListener("submit", (e) => {
	e.preventDefault();

	const userInfo = {
		firstname: e.target.firstname.value,
		lastname: e.target.lastname.value,
		email: e.target.email.value,
		country: e.target.country.value,

	}

	console.log(userInfo);

})