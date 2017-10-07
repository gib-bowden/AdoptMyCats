(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"; 

let cats = []; 

const callCats = (num) => {
    $.ajax({
        method: 'GET',
        url:`https://random-dogs-api.herokuapp.com/cats/${num}`})
        .done((data) => { 
        //$('body').css('background-image', `url(${data.url})`);
        cats = data.cats; 
    }).fail((error) => {
        console.log(error);
    }); 
};

const getCats = () => {
    return cats; 
};

module.exports = {
    callCats,
    getCats,
};

},{}],2:[function(require,module,exports){

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
},{"./cats":1}],3:[function(require,module,exports){
"use strict"; 

require('./cats'); 
require('./events');
},{"./cats":1,"./events":2}]},{},[3]);
