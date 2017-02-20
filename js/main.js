$(document).ready(function () {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');

  });

  $('.quotes-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$('form').submit(function (e) {
  var error = "";
  if ($('#name').val() == "") {
    error += "The name field is required.<br>";
  }
  if ($('#email').val() == "") {
    error += "The email field is required.<br>";
  }
  if ($('#message').val() == "") {
    error += "The message field is required.";
  }
  if (error != "") {
    $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>Error(s) were found in your form:</strong></p>'
     + error + '</div>');
     return false;
  } else {
    return true;
  }

});

window.initMap = function () {
  var location = { lat: 36.728205, lng: -76.583562 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: location,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

