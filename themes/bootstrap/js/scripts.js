$(document).ready(function(){
	// $('.services-options, .jumbotron').onePageNav();

	$(function() {
		$('a[href*=#]:not([href=#], [href=#testimonies-carousel])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
				}
			}
		});
	});

	// $(function(){
	// 	$('#modal-branding, #modal-print, #modal-web, #modal-messaging').each(function() {
	// 		var $this = $(this);
	// 		$this.height($this.find('.md-content').height());
	// 		console.log($this.height());
	// 	});
	// });

});

$(window).load(function() {
	$("body").removeClass("preload");
});


