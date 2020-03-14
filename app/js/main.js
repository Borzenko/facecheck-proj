$(document).ready(function () {
  anime({
    targets: '.drop-down-arrow',
    translateY: 10,
    delay: function (el, i) {
      return i * 100;
    },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav-mobile").toggleClass("active");
  });

  $("#close-mobile").on("click", function (event) {
    event.preventDefault();
    $("#nav-mobile").toggleClass("active");
  });

  $("#modal-open").on("click", function (event) {
    event.preventDefault();
    $("#nav-mobile").toggleClass("active");
  });

  var el = document.getElementById('desc');
  el.addEventListener('keyup', countCharacters, false);


  var carousel = $("#owl-demo").owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
  });

  // 
  $('.profile-card').click(function() {
    $('.profile-card').removeClass('active')
    $(this).addClass('active')
    carousel.trigger('to.owl.carousel', [$(this).data().slide, 300]);
  })

});

var countCharacters = function(e) {
  var textEntered, countRemaining, counter;
  textEntered = document.getElementById('desc').value;
  counter = (450 - (textEntered.length));
  countRemaining = document.getElementById('charactersRemaining');
  countRemaining.textContent = counter;
}