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