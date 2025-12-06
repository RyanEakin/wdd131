const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const d = new Date();
const hoursBase = d.getHours();
const minutesBase = d.getMinutes();
const secondsBase = d.getSeconds();

const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0');
const day = String(d.getDate()).padStart(2, '0');

document.getElementById("currentYear").innerHTML = "&copy; " + year;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

document.getElementById("installDate").value = `${year}-${month}-${day}`;

// the code for the product name select box start

function generateOptions() {
    const selectList = document.querySelector('select')

    products.forEach(productsList =>{
        let newOption = document.createElement('option')
        newOption.innerHTML = productsList.name;
        newOption.value = productsList.id;

        selectList.appendChild(newOption);
})

}

window.generateOptions()

// the code for the product name select box end