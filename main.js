// CLICK SMOOTH SCROLL

$(document).ready(function() {

	// var scrollLink = $('.scroll');
	// // Smooth scrolling
	// scrollLink.click(function(e) {
	//   e.preventDefault();
	//   $('body,html').animate({
	//     scrollTop: $(this.hash).offset().top
	//   }, 1000 );
	// });



  	//Click Smooth Scroll Telmo Code
  	$(document).on('click', 'a[href^="#"]', function (event) {

		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);

	});

});


// Testimonial Slider
