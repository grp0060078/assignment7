// 4. Print the total population of countries using reduce function 
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let country = JSON.parse(xhr.responseText);
   let population=country.reduce((prev,value)=>{
        return prev+value.population;
    },0)
    console.log(population);
};

xhr.send(); 