const d = new Date();
const hoursBase = d.getHours();
const minutesBase = d.getMinutes();
const secondsBase = d.getSeconds();

const hours = String(hoursBase).padStart(2,'0')
const minutes = String(minutesBase).padStart(2,'0')
const seconds = String(secondsBase).padStart(2,'0')

const year = d.getFullYear();

document.getElementById("currentYear").innerHTML = "&copy; " + year;
document.getElementById("lastModified").innerHTML = "Last Modified: " + hours + ":" + minutes + ":" + seconds;