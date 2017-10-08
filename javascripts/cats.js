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
        dom.createDomString(cats); 
    })
    .fail((error) => {
        console.log(error);
    }); 
};

const getCats = () => {
    return cats; 
};

const getDisabledCats = () => {
    disabledCats = cats.filter((cat) => {
        return cat.numberOfToes < 10; 
    });
    return disabledCats; 
};

const setCats = (arr) => {
    cats = arr; 
};

module.exports = {
    callCats,
    getCats,
    getDisabledCats
};
