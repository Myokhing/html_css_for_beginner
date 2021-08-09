const colors = ["yellow", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	const randdomNumber = getRandomNumber();

	document.body.style.backgroundColor = colors[randdomNumber];
	color.textContent = colors[randdomNumber];
});
 function getRandomNumber() {
 	return Math.floor(Math.random() * colors.length);
 }