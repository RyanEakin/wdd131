let thermometer = document.querySelector("#temp");
let wind = document.querySelector("#wind")

let speed = 0;
let temp = 0;
let units = "none";


function calculateWindChill(){
    //currently empty, will fill later
}

if (units === "metric") {
    if (temp <= 10 && speed > 4.8) {
        //calculateWindChill();
    }
}
else if (units === "imperial") {    
    if (temp <= 50 && speed > 3) {
        //calculateWindChill();
    }}
else {
    console.log("N/A")
}