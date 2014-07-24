$(document).ready(function(){

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	$("button[data-dismiss=modal]").click(function(){
		$('#myModal iframe').attr("src", jQuery("#myModal iframe").attr("src"));
	});

	$("a[data-toggle=modal]").click(function(){
		$('#myModal iframe').vimeo("play");
	});

});


