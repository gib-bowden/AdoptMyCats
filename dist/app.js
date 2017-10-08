(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"; 

const dom = require('./dom');

let cats = []; 
let disabledCats = []; 

const callCats = (num) => {
    $.ajax({
        method: 'GET',
        url:`https://random-dogs-api.herokuapp.com/cats/${num}`
    })
    .done((data) => { 
        setCats(data.cats);
    })   
    .done(() => { 
        setDisabledCats();
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

const setDisabledCats = () => {
    disabledCats = cats.filter((cat) => {
        return cat.numberOfToes !== 10; 
    });
};

const setCats = (arr) => {
    cats = arr; 
};

const getDisabledCats = () => {
    return disabledCats; 
};


module.exports = {
    callCats,
    getCats,
    getDisabledCats
};

},{"./dom":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){

"use strict";

const cats = require('./cats');
const dom = require('./dom');

const printToDom = (str) => {
    $('#catHolder').html(str);
};

$('#showButton').click(() => {
    let success = triggerCatCall(); 
    resetInput(success); 
});

$('#catInput').keypress(function (e) {
    if (e.which === 13) {
        let success = triggerCatCall();
        dom.resetInput(success); 
    }
});

const resetInput = (bool) => {
    if (bool) {
        $('#input-form').empty()
            .append(dom.createClearButton(cats.getDisabledCats().length)); 
            console.log("from events", cats.getDisabledCats()); 
    }
}; 

const triggerCatCall = () => {
    let numOfCats = $('#catInput').val();
    if (Number(numOfCats) > 0) {
        cats.callCats(numOfCats);
        return true;  
    } else return false;    
};


$('#clearButton').click(() => {
    $('#catHolder').empty();
    let catInput = document.getElementById("catInput");
    catInput.placeholder = "how many cats you want?"; 
});



module.exports = {}; 
},{"./cats":1,"./dom":2}],4:[function(require,module,exports){
"use strict"; 

require('./cats'); 
require('./events');
},{"./cats":1,"./events":3}]},{},[4]);
