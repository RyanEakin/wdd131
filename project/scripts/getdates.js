const d = new Date();
const hoursBase = d.getHours();
const minutesBase = d.getMinutes();
const secondsBase = d.getSeconds();


const year = d.getFullYear();

document.getElementById("currentYear").innerHTML = "&copy; " + year;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;


// start of form generation code

function generateCompare() {
    const selectList = document.querySelector('select')

    products.forEach(productsList =>{
        let newOption = document.createElement('option')
        newOption.innerHTML = productsList.name;
        newOption.value = productsList.id;

        selectList.appendChild(newOption);
})

}

window.generateCompare()

// end of form generation code