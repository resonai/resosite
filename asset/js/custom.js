$(window).load(function(){
	$('.loader').fadeOut();    
	$('#preloader').delay(350).fadeOut('slow');    
	$('body').delay(350); 
});

jQuery(document).ready(function($) {

	$(".custom-btn").click(function(){
		var popupId = $(this).attr('data-href');
		$(popupId).modal('show');	
	});
	
	$(".pop-btn").click(function(){
		var popupId = $(this).attr('data-href');
		$(popupId).modal('show');	
	});
	
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		responsiveClass: true,
		nav: true,
		autoplay: false,
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("sticky");
		}
		else{
			$('header').removeClass("sticky");
		}
	});

	$('.video_popup').fancybox({
		'padding': 0
	});
	
	$('.video_popup').click(function() 	{
		var data_href = $(this).attr('data-href');
		$('.popup_video_url').attr('src',data_href+'&autoplay=1');
	});	
	
	$(document).on('click','.fancybox-close', function()	{
		$('#vdoTesti .popup_video_url').attr('src','');
	}); 
	
	$('.header nav a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});
	$("button, a").click(function() {{ $(".contactSuccessMsg").hide(); }})
});


