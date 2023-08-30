// Get all the countries from Asia continent /region using Filter function
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let country = JSON.parse(xhr.responseText);
   
    
    let asia=country.filter((value)=>{
        return value.region==='Asia'
    })
    console.log(asia);}


xhr.send(); 