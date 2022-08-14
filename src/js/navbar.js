const btn = document.querySelector("#menu-btn");

btn.addEventListener("click", action);

function action() {
	const list = document.querySelector("#list-nav");
	list.classList.toggle("active-navbar");
}