const cards = window.document.getElementById("cards");
const card = document.querySelectorAll(#cards card");

let idx = 0;

function carousel(){
    idx++;

    if(idx > card.length -1){
        idx = 0;
    }

    cards.style.transform = `translateX(´${-idx * 12rem})`;

}

setInterval(carousel,1800);