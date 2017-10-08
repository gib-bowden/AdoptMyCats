"use strict";

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

const createClearButton = (num) => {
    return `<button id="clearButton" class="btn btn-default">Kill the ${num} deformed?</button>`;
};



module.exports = {
    createDomString,
    createClearButton
};