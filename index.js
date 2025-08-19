
var cardTrack1 = window.document.getElementById("card-track1");
var carrousel1RightArrow = window.document.getElementById("carrousel1arrowRight");
var carrousel1LeftArrow = window.document.getElementById("carrousel1arrowLeft");


carrousel1LeftArrow.style.display = "none";

function carrousel1ScrollRight() {
    
    cardTrack1.scrollLeft += 100;
    
    
    carrousel1LeftArrow.style.display = "block";
   
}

function carrousel1ScrollLeft() {
    
    cardTrack1.scrollLeft -= 100;
    
   
    carrousel1RightArrow.style.display = "block";
    
}
 
//  -----------------------------------------------------      CARROSSEL 2 -------------------------------------------------------------  //

var cardTrack2 = window.document.getElementById("card-track2");
var carrousel2RightArrow = window.document.getElementById("carrousel2arrowRight");
var carrousel2LeftArrow = window.document.getElementById("carrousel2arrowLeft");


carrousel2LeftArrow.style.display = "none";

function carrousel2ScrollRight() {
    
    cardTrack2.scrollLeft += 100;
    
    
    carrousel2LeftArrow.style.display = "block";
   
}

function carrousel2ScrollLeft() {
    
    cardTrack2.scrollLeft -= 100;
    
   
    carrousel2RightArrow.style.display = "block";
    
}