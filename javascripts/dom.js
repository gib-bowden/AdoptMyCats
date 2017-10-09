"use strict";

const createDomString = (arr) => {
    let catString = "";
    let disabled = []; 
    let columns = 4;
    arr.forEach((cat, index) =>{
        let disabledClass = (cat.numberOfToes <= 10) ? "disabled-kitty" : "regular-kitty";
        if (disabledClass === "disabled-kitty") {disabled.push(index);}
        if (index % columns === 0) {
            catString += `<div class="row">`;               
        }
        catString += 
            `<div class="cat-card col-md-${12/columns}">
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
        if ((index + 1) % columns === 0) {
            catString += `</div>`;           
        }
    });
    printToDom(catString); 
    createClearButton(disabled.length);
};

const printToDom = (str) => {
    $('#catHolder').html(str);
};

const createClearButton = (num) => {
    let btnHtml = `<button id="clearButton" class="btn btn-default">Kill the ${num} deformed?</button>`;
    $('#input-form').empty();
    if (num > 0) {$('#input-form').append(btnHtml);}
};

module.exports = {
    createDomString,
    createClearButton
};