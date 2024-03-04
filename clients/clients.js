const root = document.querySelector('.root');
const mainClients = document.querySelector('.main_clients');

const loader = document.querySelector('#loader');
//const btn = document.querySelector('.btn');




const createUserCart = (user) => {
	const { name, location, phone, picture } = user;

	const wrapper = document.createElement("div");
	const imgWrapperNode = document.createElement("div");
	const imgNode = document.createElement("img");
	const nameNode = document.createElement("p");
	const phoneNode = document.createElement("p");
	const contryNode = document.createElement("p");

	imgNode.src = picture;
	imgNode.alt = 'user imange';
	nameNode.innerText = `${name.title} ${name.first} ${name.last}`;
	phoneNode.innerText = phone;
	contryNode.innerText = `${location.city},  ${location.country}`;
	wrapper.classList.add('cart');
	imgWrapperNode.classList.add('img-box');

	imgWrapperNode.append(imgNode);

	wrapper.append(imgWrapperNode);
	wrapper.append(nameNode);
	wrapper.append(phoneNode);
	wrapper.append(contryNode);

	return wrapper;
}


const getUsers = async () => {
	try {
		loader.style.display = "block";
		const res = await fetch('https://rs882.github.io/fakeapi/data.json');
		const data = await res.json();
		return data
	} catch (error) {
		return null;
	}
}

getUsers()
	.then(users => {
		const usersCart = users.map(user => createUserCart(user))
		root.append(...usersCart);
		loader.style.display = "none";
		const btn = document.createElement("button");
		btn.innerText = "Show more...";
		btn.classList.add("btn");

		const btn_container = document.createElement("div");
		btn_container.classList.add("more");
		btn_container.append(btn);
		mainClients.append(btn_container);
		btn.addEventListener('click', (e) => {

			getUsers()
				.then(users => {
					const usersCart = users.map(user => createUserCart(user))
					root.append(...usersCart);
					loader.style.display = "none";
				})
				.catch(err => {

				})
		})
	})
	.catch(err => {

	})



