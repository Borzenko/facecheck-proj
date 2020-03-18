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
  $('.mobile-inner .mobile-wrapper:last')
  .css('border-bottom', 'none');
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
  el.addEventListener('keydown', countCharacters, false);


  var carousel = $("#owl-demo").owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    touchDrag:false,
    mouseDrag: false
  });

  $('.profile-card[data-slide="0"').addClass('active')

  carousel.on('changed.owl.carousel', function(event) {
    $('.profile-card').removeClass('active')
    console.log($($('.profile-cards-desktop .profile-card')[event.page.index]))
    $($('.profile-cards-desktop .profile-card')[event.page.index]).addClass('active');
    $($('.profile-cards-mobile .profile-card')[event.page.index]).addClass('active');
  })
});

$('.drop-down-arrow',).click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".main-features").offset().top
  }, 500);
});
$('#features-scroll',).click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".main-features").offset().top
  }, 500);
});
$('#home-scroll',).click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".download-desktop-app").offset().top
  }, 500);
});



var countCharacters = function(e) {
  var textEntered, countRemaining, counter;
  textEntered = document.getElementById('desc').value;
  counter = (450 - (textEntered.length));
  countRemaining = document.getElementById('charactersRemaining');
  countRemaining.textContent = counter;
}

AOS.init({
  duration: 3200
 });

