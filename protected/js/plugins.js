
(function($) {
	          "use strict";

	         /* ---------------------------------------------------
		        1 - Loading Page 
	         ----------------------------------------------------- */
	          $(window).on("load", function() {
	          $(".loader").fadeOut("slow");
              });
	          $(window).on("load", function() {
	          $(".loader-wrapper").slideUp("slow");
              });

             /* ---------------------------------------------------
		        2 - Navigation Menu Scroll Controls
	         ----------------------------------------------------- */
              $("#aboutme-btn").on("click", function() {
		      $("html, body").animate({
			    scrollTop: $(".about-me").offset().top-89
		                              }, 700);
	          });	
	          $("#services-btn").on("click", function() {
		      $("html, body").animate({
			    scrollTop: $(".services").offset().top-89
		                              }, 700);
	          });	
			  $("#testimonials-btn").on("click", function() {
		      $("html, body").animate({
			    scrollTop: $(".testimonials").offset().top-89
		                              }, 700);
	          });
			  $("#experience-btn").on("click", function() {
		      $("html, body").animate({
			    scrollTop: $(".experience").offset().top-89
		                              }, 700);
	          });	
			  	
			  $("#portfolio-btn").on("click", function() {
		      $("html, body").animate({
			    scrollTop: $(".portfolio").offset().top-89
		                              }, 700);
	          });
			  $("#contactme-btn").on("click", function() {
		      $("html, body").animate({
			    scrollTop: $(".contact").offset().top-89
		                              }, 700);
	          });
			  
	         /* -------------------------------------------------------------
		       3 - Typewriter Effect Controls
	         --------------------------------------------------------------- */
              $("#typing-effect").typed({
              strings: ["UPES CSI", "Techno-geek"],//Change Page Heading Here
              typeSpeed: 60,
		      backSpeed: 60,
		      loop:true,
		      showCursor:false
              });
		   
	         /* -------------------------------------------------------------
		        4 - Move to Portfolio section on clicking view more button 
	         --------------------------------------------------------------- */
		      $("#portfolio-btn-2").on("click", function() {
		      $("html, body").animate({
		      scrollTop: $(".portfolio").offset().top-89
		                              }, 700);
	          });
		   
	         /* -------------------------------------------------------------
		        5 - Move to About-me section on clicking animated buttons
	         --------------------------------------------------------------- */
		      $("#animated-btn-1").on("click", function() {
		      $("html, body").animate({
		      scrollTop: $(".about-me").offset().top-89
		                              }, 700);
	          });
		      $("#animated-btn-2").on("click", function() {
		      $("html, body").animate({
		      scrollTop: $(".about-me").offset().top-89
		                              }, 700);
	          });
			  
			 /* -------------------------------------------------------------
		        6 - Move to Contact section on clicking Hire Me Button
	         --------------------------------------------------------------- */
			  $("#hireme-btn").on("click", function() {
		      $("html, body").animate({
			    scrollTop: $(".contact").offset().top-90
		                              }, 700);
	          });
			  
	         /* ---------------------------------------------------
		        7 - MixItUp Plugin in Portfolio Section
	         ----------------------------------------------------- */
	          $(".projects").mixItUp();
			  
			 /* ---------------------------------------------------
		         8 - Contact Form Validation
	         ----------------------------------------------------- */
	          var contactForm = $("#contact-form"),
		      submitBtn = $(".submit-btn"),
		      formResponse = $(".form-response");
	          contactForm.validator().on("submit", function (e) {
			  if(e.isDefaultPrevented()) {
				formResponse.text("Sorry, you didn't fill the form.").fadeIn(1000);
			  } else {
				e.preventDefault();
				submitForm();
			  }
		      });
		      // Submit Form
		      function submitForm() {
			  // Some Variables
			  var name = $("#name").val(),
				mail = $("#mail").val(),
				message = $("#message").val();
			  // Ajax    
			  $.ajax({
				type: "POST",
				url: "php/contact.php",
				data: "name=" + name + "&mail=" + mail + "&message=" + message,
				beforeSend: function(text) {
					submitBtn.html("Sending...");
					formResponse.fadeOut(500).text("");
				},
				success: function (text) {
					if(text == "success") {
						contactForm[0].reset();
						formResponse.text("Thanks! Your message sent correctly.").fadeIn(1000);
						submitBtn.html("Send Message");
					} else {
						formResponse.text(text).fadeIn(1000);
					}
				   }
			      });
		        }
		        // Moving placeholder on focus on any input in contact-me section //
	            $(".contact .form-control").focusout(function() {
		        var textValue = $(this).val();
		        if (textValue === "") {
			    $(this).removeClass("has-value");
		        } else {
			    $(this).addClass("has-value");
		        }
	            });
  
})(jQuery);
               /* ---------------------------------------------------
		           9 - Owl Carousel in Testimonials Section
	           ----------------------------------------------------- */  
(function($){
                $("#owl-demo").owlCarousel({
                navigation:true, // Show next and prev buttons
                slideSpeed:500,
                paginationSpeed:500,
                items:1, 
	            pagination:false,
                itemsDesktop:false,
                itemsDesktopSmall:false,
                itemsTablet:false,
                itemsMobile:false,
	            navigation:false,
	            autoPlay:true
                });
})(jQuery);

/* ---------------------------------------------------
	10 - Launching Google map
----------------------------------------------------- */
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 17,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(29.53359309999999, 75.01770290000002),	// Change to your latitude & longitude

		scrollwheel: false,

		// How you would like to style the map. 
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [{
				"saturation": 36
			}, {
				"color": "#000000"
			}, {
				"lightness": 40
			}]
		}, {
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#000000"
			}, {
				"lightness": 16
			}]
		}, {
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}, {
				"weight": 1.2
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 20
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 21
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 29
			}, {
				"weight": 0.2
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 18
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 16
			}]
		}, {
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 19
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}, {
				"lightness": 17
			}]
		}]
	};

	// Get the HTML DOM element that will contain your map 
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById("map");

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let"s also add a marker while we"re at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(29.53359309999999, 75.01770290000002),	// Change to your latitude & longitude
		/* animation:google.maps.Animation.BOUNCE, Make the marker bounce */
		map: map,
		title: "Dupinder Aulakh"		// Change to your text
	});

	var infowindow = new google.maps.InfoWindow({
		content: "Dupinder Aulakh"		// Change to your text
	});

	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}