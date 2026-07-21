document.addEventListener("DOMContentLoaded", function () {

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

const cards = document.querySelectorAll(".recipe-card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display = text.includes(value) ? "block" : "none";

});

});

}

});
