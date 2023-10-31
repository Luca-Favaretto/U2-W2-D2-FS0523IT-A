const travels = Array.from(document.getElementsByTagName("img"));
console.log(travels);
const alert = document.getElementById("alert");
console.log(alert);
const alertBtn = document.querySelector("#alert button");
console.log(alertBtn);
const alertText = document.querySelector("#alert p");
console.log(alertText);

alertText.innerText = `ci sono ${travels.length + 1} viaggi`;

alertBtn.addEventListener("click", function () {
  alert.classList.add("d-none");
});

const stopTravel = document.getElementById("stop-travel");
console.log(stopTravel);

stopTravel.addEventListener("click", function () {
  travels.forEach(travel => travel.classList.add("d-none"));
});
