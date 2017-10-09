(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"; 

const dom = require('./dom');

let cats = []; 
let nonDisabledCats = []; 

const callCats = (num) => {
    $.ajax({
        method: 'GET',
        url:`https://random-dogs-api.herokuapp.com/cats/${num}`
    })
    .done((data) => { 
        setCats(data.cats);
    })   
    .done(() => {
        dom.createDomString(cats); 
    })
    .fail((error) => {
        console.log(error);
    }); 
};

const getCats = () => {
    return cats; 
};

const getNonDisabledCats = () => {
    nonDisabledCats = cats.filter((cat) => {
        return cat.numberOfToes > 10; 
    });
    return nonDisabledCats; 
};

const setCats = (arr) => {
    cats = arr; 
};

module.exports = {
    callCats,
    getCats,
    getNonDisabledCats
};

},{"./dom":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){

"use strict";

const cats = require('./cats');
const dom = require('./dom');

$('#showButton').click(() => {
    triggerCatCall(); 
});

$('#catInput').keypress(function (e) {
    if (e.which === 13) {
        triggerCatCall();
    }
});


const triggerCatCall = () => {
    let numOfCats = $('#catInput').val();
    if (Number(numOfCats) > 0) {
        cats.callCats(numOfCats);
    }
};


$('body').on('click', '#clearButton', function () {
    dom.createDomString(cats.getNonDisabledCats()); 

});



module.exports = {}; 
},{"./cats":1,"./dom":2}],4:[function(require,module,exports){
"use strict"; 

require('./cats'); 
require('./events');
},{"./cats":1,"./events":3}]},{},[4]);
