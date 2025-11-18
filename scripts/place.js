let thermometer = document.querySelector("#temp");
let wind = document.querySelector("#wind")
let chill = document.querySelector("#chill");

let speed = 0;
let temp = 0;
let units = "none";



function calculateWindChill(temp, speed){
    const windChill = 35.74 + (0.6215 * temp)- (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return windChill;
}

if (units === "metric") {
    if (temp <= 10 && speed > 4.8) {
        calculateWindChill();
    }
}
else if (units === "imperial") {    
    if (temp <= 50 && speed > 3) {
        calculateWindChill();
    }}
else {
    console.log("N/A")
}