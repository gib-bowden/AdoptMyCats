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
