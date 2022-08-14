const inputCheck = document.querySelector("#switch");
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

inputCheck.addEventListener("click", function (e) {
	if (e.target.checked) {
		moonIcon.style.opacity = "0";
		sunIcon.style.opacity = "1";
	} else {
		moonIcon.style.opacity = "1";
		sunIcon.style.opacity = "0";
	}
});
