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
