//copied from assignment page
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');// this line of code wasn't referencing the ID but a class and thus led to a null error

let area = 0;
const PI = 3.14159; //this had a == instead of a = and raised a SyntaxError

let radius = 10;//changed this to let from const so that it could have values reassigned to it
area = PI * radius * radius;
radiusOutput.textContent = radius; // these two lines of code raised a invalid assignment error due to not having '.textContent' specified
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius; // these two lines of code raised a invalid assignment error due to not having '.textContent' specified
areaOutput.textContent = area;