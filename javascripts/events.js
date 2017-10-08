
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