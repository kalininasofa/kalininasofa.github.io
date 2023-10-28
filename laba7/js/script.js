$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		prevArrow: "<img src='img/l.svg' class='prev' alt='1'>",
        	nextArrow: "<img src='img/r.svg' class='next' alt='2'>",
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
