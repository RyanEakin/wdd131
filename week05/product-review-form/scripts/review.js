const d = new Date();
const hoursBase = d.getHours();
const minutesBase = d.getMinutes();
const secondsBase = d.getSeconds();


const year = d.getFullYear();

document.getElementById("currentYear").innerHTML = "&copy; " + year;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;



//start for the local storage code

//Initialize display element variable
const reviewsDisplay = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReview-ls")) || 0;

if (reviewsDisplay !== 0) {
	reviewsDisplay.textContent = numReviews + 1;
}

numReviews++;


localStorage.setItem("numReview-ls", numReviews);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

//end for the local storage code