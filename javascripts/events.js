
"use strict";

const cats = require('./cats');

const createDomString = (arr) => {
    let catString = "";
    arr.forEach((cat, index) =>{
        let disabledClass = (cat.numberOfToes != 10) ? "disabled-kitty" : "regular-kitty"; 

        catString += 
        `<div class="cat-card">
            <div class="image-container">
                <img src="${cat.imageUrl}">
            </div>
            <div class="description-container">
                <h3> ${cat.name} </h3>
                <p> Color: ${cat.color} </p>
                <p> Skills: ${cat.specialSkill} </p>
                <p class="${disabledClass}"> Toes: ${cat.numberOfToes} </p>
            </div>
        </div>`;
    });
    printToDom(catString); 
};

const printToDom = (str) => {
    $('#catHolder').html(str);
};

$('#showButton').click(() => {
    let numOfCats = $('#catInput').val();
    if (numOfCats) {
        cats.callCats(numOfCats);
        createDomString(cats.getCats()); 
    }      
});


$('#clearButton').click(() => {
    $('#catHolder').empty();
});



module.exports = {}; 