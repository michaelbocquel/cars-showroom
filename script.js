export const cars = [
	{
		id: 1,
		brand: "Acura",
		model: "NSX",
		image: "images/acura-nsx.jpg",
		year: 2017,
		transmission: "AWD",
		power: 573,
		torque: 845,
		weight: 1725,
		ratio: 0.332
	},
	{
		id: 2,
		brand: "Acura",
		model: "Integra",
		image: "images/acura-integra.jpg",
		year: 2001,
		transmission: "FWD",
		power: 195,
		torque: 176,
		weight: 1197,
		ratio: 0.163
	},
	{
		id: 3,
		brand: "Alfa Romeo",
		model: "Giulietta",
		image: "images/alfa-romeo-giulietta.jpg",
		year: 2011,
		transmission: "FWD",
		power: 231,
		torque: 340,
		weight: 1320,
		ratio: 0.175
	},
	{
		id: 4,
		brand: "Alpine",
		model: "A110",
		image: "images/alpine-a110.jpg",
		year: 2017,
		transmission: "RWD",
		power: 249,
		torque: 320,
		weight: 1103,
		ratio: 0.226
	},
	{
		id: 5,
		brand: "Alpine",
		model: "GTA Le Mans",
		image: "images/alpine-gta-le-mans.jpg",
		year: 1990,
		transmission: "RWD",
		power: 198,
		torque: 290,
		weight: 1190,
		ratio: 0.166
	},
	{
		id: 6,
		brand: "AMC",
		model: "Javelin AMX",
		image: "images/amc-javelin-amx.jpg",
		year: 1971,
		transmission: "RWD",
		power: 330,
		torque: 584,
		weight: 1563,
		ratio: 0.211
	},
	{
		id: 7,
		brand: "AMC",
		model: "Rebel",
		image: "images/amc-rebel.jpg",
		year: 1970,
		transmission: "RWD",
		power: 341,
		torque: 579,
		weight: 1656,
		ratio: 0.206
	},
	{
		id: 8,
		brand: "Apollo",
		model: "Intensa Emozione",
		image: "images/apollo-intensa-emozione.jpg",
		year: 2018,
		transmission: "RWD",
		power: 781,
		torque: 760,
		weight: 1250,
		ratio: 0.625
	},
	{
		id: 9,
		brand: "Ariel",
		model: "Atom 500 V8",
		image: "images/ariel-atom-500-v8.jpg",
		year: 2013,
		transmission: "RWD",
		power: 475,
		torque: 364,
		weight: 650,
		ratio: 0.731
	},
	{
		id: 10,
		brand: "Aston Martin",
		model: "Valhalla",
		image: "images/aston-martin-valhalla.jpg",
		year: 2019,
		transmission: "AWD",
		power: 1042,
		torque: 1350,
		weight: 1405,
		ratio: 0.742
	},
	{
		id: 11,
		brand: "Aston Martin",
		model: "DBS Superleggera",
		image: "images/aston-martin-dbs-superleggera.jpg",
		year: 2019,
		transmission: "RWD",
		power: 715,
		torque: 900,
		weight: 1799,
		ratio: 0.397
	},
	{
		id: 12,
		brand: "Aston Martin",
		model: "Vantage",
		image: "images/aston-martin-vantage.jpg",
		year: 2019,
		transmission: "RWD",
		power: 503,
		torque: 685,
		weight: 1585,
		ratio: 0.317
	},
]

function generateCars(cars) {
	for (let i = 0; i < cars.length; i++) {

		const car = cars[i];
		const cardWrapper = document.querySelector(".card-wrapper");
		const carCard = document.createElement("article");
		carCard.classList.add("car-card")
		const carName = document.createElement("h1");
		carName.innerText = car.brand + " " + car.model;
		carName.classList.add("car-name")

		const carImage = document.createElement("img")
		carImage.src = car.image
		carImage.classList.add("car-image")

		const carYear = document.createElement("h2");
		carYear.innerText = "Year : " + car.year;
		carYear.classList.add("car-year")

		const carTransmission = document.createElement("h2");
		carTransmission.innerText = "Transmission : " + car.transmission;
		carTransmission.classList.add("car-transmission")

		const carPower = document.createElement("h2");
		carPower.innerText = "Power : " + car.power + " HP";
		carPower.classList.add("car-power")

		const carTorque = document.createElement("h2");
		carTorque.innerText = "Torque : " + car.torque + " Nm";
		carTorque.classList.add("car-torque")

		const carWeight = document.createElement("h2");
		carWeight.innerText = "Weight : " + car.weight + " kg";
		carWeight.classList.add("car-weight")

		let ratio = (car.power / car.weight).toFixed(3)

		const carPowerToWeightRatio = document.createElement("h2");
		carPowerToWeightRatio.innerText = "Ratio : " + car.ratio + " HP per kg";
		carPowerToWeightRatio.classList.add("car-power-weight-ratio")

		cardWrapper.appendChild(carCard);

		carCard.appendChild(carName);
		carCard.appendChild(carImage);
		carCard.appendChild(carYear);
		carCard.appendChild(carTransmission);
		carCard.appendChild(carPower);
		carCard.appendChild(carTorque);
		carCard.appendChild(carWeight);
		carCard.appendChild(carPowerToWeightRatio);
	}
}


let searchQuery;
document.getElementById("search-car").onkeyup = function () {
	searchQuery = document.getElementById("search-car").value
	let cardNames = document.querySelectorAll('.car-name')
	let cards = document.querySelectorAll('.car-card')
	for (let i = 0; i < cardNames.length; i++) {
		if (cardNames[i].innerText.toLowerCase()
			.includes(searchQuery.toLowerCase())) {
			cards[i].classList.remove("is-hidden");
		} else {
			cards[i].classList.add("is-hidden");
		}
	}
}

generateCars(cars)

document.getElementById('resetFilters').onclick = function () {
	cars.sort(function (a, b) {
		return a.id - b.id
	})
	searchQuery = document.getElementById("search-car").value = ""
	document.querySelector(".card-wrapper").innerHTML = "";
	generateCars(cars)
}


document.getElementById('filterYearAsc').onclick = function () {
	cars.sort(function (a, b) {
		return a.year - b.year
	})
	searchQuery = document.getElementById("search-car").value = ""
	document.querySelector(".card-wrapper").innerHTML = "";
	generateCars(cars)
}

document.getElementById('filterPowerAsc').onclick = function () {
	cars.sort(function (a, b) {
		return a.power - b.power
	})
	searchQuery = document.getElementById("search-car").value = ""
	document.querySelector(".card-wrapper").innerHTML = "";
	generateCars(cars)
}

document.getElementById('filterRatioAsc').onclick = function () {
	cars.sort(function (a, b) {
		return a.ratio - b.ratio
	})
	searchQuery = document.getElementById("search-car").value = ""
	document.querySelector(".card-wrapper").innerHTML = "";
	generateCars(cars)
}

document.getElementById('filterYearDesc').onclick = function () {
	cars.sort(function (a, b) {
		return b.year - a.year
	})
	searchQuery = document.getElementById("search-car").value = ""
	document.querySelector(".card-wrapper").innerHTML = "";
	generateCars(cars)
}

document.getElementById('filterPowerDesc').onclick = function () {
	cars.sort(function (a, b) {
		return b.power - a.power
	})
	searchQuery = document.getElementById("search-car").value = ""
	document.querySelector(".card-wrapper").innerHTML = "";
	generateCars(cars)
}

document.getElementById('filterRatioDesc').onclick = function () {
	cars.sort(function (a, b) {
		return b.ratio - a.ratio
	})
	searchQuery = document.getElementById("search-car").value = ""
	document.querySelector(".card-wrapper").innerHTML = "";
	generateCars(cars)
}