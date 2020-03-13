let animation = anime({
 targets: '.drop-down-arrow',
 translateY: 10,
 delay: function(el, i) { return i * 100; },
 direction: 'alternate',
 loop: true,
 easing: 'easeInOutSine'
});

$("#nav_toggle").on("click", function(event) {
 event.preventDefault();
 $(this).toggleClass("active");
 $("#nav-mobile").toggleClass("active");


});
$("#close-mobile").on("click", function(event) {
 event.preventDefault();
 $("#nav-mobile").toggleClass("active");
});

$("#modal-open1").on("click", function(event) {
 event.preventDefault();
 $("#nav-mobile").toggleClass("active");
});

var el;

function countCharacters(e) { 
  var textEntered, countRemaining, counter;          
  textEntered = document.getElementById('desc').value;  
  counter = (450 - (textEntered.length));
  countRemaining = document.getElementById('charactersRemaining'); 
  countRemaining.textContent = counter;       
}
el = document.getElementById('desc');                   
el.addEventListener('keyup', countCharacters, false);


$(document).ready(function() {
 
 $("#owl-demo").owlCarousel({

     navigation : true, // Show next and prev buttons
     slideSpeed : 300,
     paginationSpeed : 400,
     items:1,
     // "singleItem:true" is a shortcut for:
     
     // itemsDesktop : false,
     // itemsDesktopSmall : false,
     // itemsTablet: false,
     // itemsMobile : false

 });

});