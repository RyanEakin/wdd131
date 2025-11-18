let thermometer = document.querySelector(temp);
let wind = document.querySelector(wind)

let speed = 0;
let temp = 0;


function calculateWindChill(){
    //currently empty, will fill later
}

if (units === "metric") {
    if (temperature <= 10 && windSpeed > 4.8) {
        //calculateWindChill();
    }
}
else if (units === "imperial") {    
    if (temperature <= 50 && windSpeed > 3) {
        //calculateWindChill();
    }}
else {
    console.log("N/A")
}