const burger = document.querySelector(".burger");
const panel = document.querySelector(".panel");


burger.addEventListener("click", e => {
	burger.classList.toggle("_show");
	panel.classList.toggle("_go");

})

