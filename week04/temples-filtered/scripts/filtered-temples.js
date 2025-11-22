const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Boise Idaho",
    location: "Boise, Idaho",
    dedicated: "1984, May, 25",
    area: 35868,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/800x500/4-Boise-Idaho-Temple-1199031.jpg"
  },
      {
    templeName: "Manaus Brazil",
    location: "Ponta Negra, Brazil",
    dedicated: "2012, June, 12",
    area: 32032,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/800x500/lds-temple-manaus-brazil-1085299-wallpaper.jpg"
  },
      {
    templeName: "Kona Hawaii",
    location: "Kailau Kona, Hawaii",
    dedicated: "2000, January, 12",
    area: 12325,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kona-hawaii/800x500/kona-hawaii-temple-lds-912837-wallpaper.jpg"
  }
  // Add more temple objects here...
];

// copied from getdates.js file
const d = new Date();
const hoursBase = d.getHours();
const minutesBase = d.getMinutes();
const secondsBase = d.getSeconds();

const year = d.getFullYear();

document.getElementById("currentYear").innerHTML = "&copy; " + year;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;
// end of getdates.js file

// copy of responsive-menu.js file

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

// end of copy

const oldTemples = document.getElementById("old");
oldTemples.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(" ")[0]) <= 1900))
});

const newTemples = document.getElementById("new");
newTemples.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(" ")[0]) >= 2000))
});

const large = document.getElementById("large");
large.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area >= 90000))
});

const small = document.getElementById("small");
small.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area <= 10000))
});

const homePage = document.getElementById("home");
homePage.addEventListener("click", () => {
	createTempleCard(temples)
});


function createTempleCard(filteredTemples) {
	document.querySelector(".templesContainer").innerHTML = "";
	
	filteredTemples.forEach(temple => {
		let block = document.createElement("section");
		let name = document.createElement("h3");
		let address = document.createElement("p");
		let dedication = document.createElement("p");
		let site = document.createElement("p");
		let visual = document.createElement("img");


		visual.setAttribute("src", temple.imageUrl);
		visual.setAttribute("alt", `${temple.templeName} Temple`);
		visual.setAttribute("loading", "lazy");
		name.textContent = temple.templeName;
		address.innerHTML = `<span class="label">Address: </span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
		site.innerHTML = `<span class="label">Area: </span> ${temple.area} sq ft`;


		block.appendChild(visual);
		block.appendChild(name);
		block.appendChild(address);
		block.appendChild(dedication);
		block.appendChild(site);


		document.querySelector(".templesContainer").appendChild(block)
})

}

createTempleCard(temples);