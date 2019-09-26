$(document).ready(function() {
	$(document).on('click', '.show-more', function() {
		$('.image-block').toggleClass('visible');	
		$(this).toggleClass('visible');
    });
	
	
	$(document).on('click', '.button1', function() {
		var errors = 1;
		var nameRegex = /^[а-яё -]+$/i
		var intRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
		$(".step-container__error").hide(); 
		if ( $(".name").length < 1) {
			$(".name").siblings('.step-container__error').show();	
			errors = 1;	
		} 
		else  {
			if (!nameRegex.test($(".name").val())) {
        			$(".name").siblings('.step-container__error').show();	
					errors = 1;	
        		} else {
        			$(".name").siblings('.step-container__error').hide();
					errors = 0;		
        		}
		}
		if ( $(".email").length < 1) {
			$(".email").siblings('.step-container__error').show();	
errors = 1;				
		}  	
		else {
			if (!intRegex.test($(".email").val())) {
        			$(".email").siblings('.step-container__error').show();	
					errors = 1;	
        		} else {
        			$(".email").siblings('.step-container__error').hide();	   
errors = 0;					
        		}
		}
			$(".phone").siblings('.step-container__error').show();
		$('.phone').mask("+7 999 999 99 99", 
				{   completed:function(){
					result = $('.input-phone-field').val().replace(/\s/g, '');
					$(".phone").siblings('.step-container__error').hide();	
					errors = 0;
				
					}
				}
			);
			
		
		if (errors == 0) {			
			$('.step1').addClass('hidden');
			$('.step2').removeClass('hidden');
		}
		
   
 
    
 
   
   
    });
	$(document).on('click', '.button2', function() {
		var errors = 1;
		var nameRegex = /^[а-яё -]+$/i
		var numRegex = /^\d+$/
		if ( $(".city").length < 1) {
			$(".city").siblings('.step-container__error').show();	
errors = 1;				
		}  	
		else {
			if (!nameRegex.test($(".city").val())) {
        			$(".city").siblings('.step-container__error').show();	
					errors = 1;	
        		} else {
        			$(".city").siblings('.step-container__error').hide();	   
errors = 0;					
        		}
		}
		
			if ( $(".street").length < 1) {
			$(".street").siblings('.step-container__error').show();	
errors = 1;				
		}  	
		else {
			if (!nameRegex.test($(".street").val())) {
        			$(".street").siblings('.step-container__error').show();	
					errors = 1;	
        		} else {
        			$(".street").siblings('.step-container__error').hide();	   
errors = 0;					
        		}
		}
		
		if ( $(".house").length < 1) {
			$(".house").siblings('.step-container__error').show();	
errors = 1;				
		}  	
		else {
			if (!numRegex.test($(".house").val())) {
        			$(".house").siblings('.step-container__error').show();	
					errors = 1;	
        		} else {
        			$(".house").siblings('.step-container__error').hide();	   
errors = 0;					
        		}
		}
		
		if ( $(".apartment").length < 1) {
			$(".apartment").siblings('.step-container__error').show();	
errors = 1;				
		}  	
		else {
			if (!numRegex.test($(".apartment").val())) {
        			$(".apartment").siblings('.step-container__error').show();	
					errors = 1;	
        		} else {
        			$(".apartment").siblings('.step-container__error').hide();	   
errors = 0;					
        		}
		}
		
		if (errors == 0) {	
		$('.step2').addClass('hidden');
		$('.step3').removeClass('hidden');
		}
    });
	$('.menu-icon').click(function() {
        $('.nav-list').toggleClass('visible');
        $(this).toggleClass('visible');
    });
    $('.nav-list li').click(function() {
        $('.nav-list').removeClass('visible');
        $('.menu-icon').removeClass('visible');
    });
	$('.step-container__pvz').click(function() {
    $('.map-popup').show();
    $('.blur').show();
    $('.map-popup iframe').attr("src", `//insales.imbapower.club/delivery/map?query=${query}${url_part}`);
});


	
});


