// Print the following details name, capital, flag using forEach function

let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let country = JSON.parse(xhr.responseText);
   country.forEach((value)=>{
        console.log(value.name,value.capital,value.flag);
    })
};

xhr.send(); 