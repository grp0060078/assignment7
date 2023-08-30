
// Get all the countries with a population of less than 2 lakhs using Filter function
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let country = JSON.parse(xhr.responseText);
   
    let asia = country.filter((value) =>{

    return value.population<200000 ;
        
    
    });
    console.log(asia);
};

xhr.send(); 