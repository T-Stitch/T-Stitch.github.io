window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var INTERP_BASE2 = "./static/interpolation/stacked2";
var INTERP_BASE0 = "./static/interpolation/stacked0";
var NUM_INTERP_FRAMES = 50;

var interp_images = [];

function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(4, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

var interp_images2 = [];
function preloadInterpolationImages2() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE2 + '/' + String(i).padStart(4, '0') + '.jpg';
    interp_images2[i] = new Image();
    interp_images2[i].src = path;
  }
}

var interp_images0 = [];
function preloadInterpolationImages0() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE0 + '/' + String(i).padStart(4, '0') + '.jpg';
    interp_images0[i] = new Image();
    interp_images0[i].src = path;
  }
}



function setInterpolationImage0(i) {
  var image = interp_images0[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper0').empty().append(image);
}


function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


function setInterpolationImage2(i) {
  var image = interp_images2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper2').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages0();
    preloadInterpolationImages();
    preloadInterpolationImages2();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(10);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);


    
    $('#interpolation-slider2').on('input', function(event) {
      setInterpolationImage2(this.value);
    });
    setInterpolationImage2(14);
    $('#interpolation-slider2').prop('max', NUM_INTERP_FRAMES - 1);



    $('#interpolation-slider0').on('input', function(event) {
      setInterpolationImage0(this.value);
    });
    setInterpolationImage0(25);
    $('#interpolation-slider0').prop('max', NUM_INTERP_FRAMES - 1);


    bulmaSlider.attach();

})
