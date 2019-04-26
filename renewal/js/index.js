
    $("body").mCustomScrollbar({
      theme	: "minimal-dark"
    });

/*
$(document).ready(function() {

  hideObjects();
  checkObjectsVisibility();

  $(window).scroll( function() {
    hideObjects();
    checkObjectsVisibility();
  });

  function hideObjects() {
    $('.fadeInUp-scroll').css({
      'opacity': 0,
      'transform': 'translateY(100px)'
    });
  }

  function checkObjectsVisibility() {
    $('.fadeInUp-scroll').each( function(i) {
      var objectTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).outerHeight();

      if( windowBottom > objectTop - 100){
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
      }
    });
  };

});
*/
 $('#parallax').parallax({
	invertX: true,
	invertY: true
});

// toggle menu
$('.toggle-menu').click (function(){
  $('.toggle-menu').toggleClass('active');
  $('#menu').toggleClass('open');
});
// midnight
$(function() {
  $('.topbar').midnight();
});

var currSlogan = 1;
var setSlogans = function () {
    var count = $(".banner .text .rotation-wrapper span").length;

    var cS = currSlogan;
    var pS = currSlogan - 1;
    if (pS < 1) pS = count;
    var ppS = currSlogan - 2;
    if (currSlogan < 2) ppS = count - currSlogan;
    if (ppS < 1) ppS = count;

    currSlogan++;
    if (currSlogan > count) currSlogan = 1;
    var nS = currSlogan;

    //console.log("count="+count+"/ns="+nS+"/cs="+cS+"/ps="+pS+"/pps="+ppS);

    $(".main h2 .s" + cS).addClass("removed");
    $(".main h2 .s" + pS).addClass("hidden");//.removeClass("active removed");
    $(".main h2 .s" + ppS).removeClass("hidden active removed");
    $(".main h2 .s" + nS).addClass("active");
};

setInterval(setSlogans, 3000);

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
