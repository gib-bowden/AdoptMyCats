
"use strict";

const cats = require('./cats');
const dom = require('./dom');

const printToDom = (str) => {
    $('#catHolder').html(str);
};

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
        return true;  
    } else return false;    
};


$('body').on('click', '#clearButton', function () {
    dom.createDomString(cats.getDisabledCats()); 

});



module.exports = {}; 