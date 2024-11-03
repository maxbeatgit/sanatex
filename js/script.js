$(document).ready(function () {

	/* Mobile menu */
	function mobileMenu(){
		$('.burger').toggleClass('burger_open');
		$('.burger__icon').toggleClass('burger__icon_close');
		$('.menu').toggleClass('menu_open');
		$('body').toggleClass('scroll_disable');
	}
	$('.burger').on('click', mobileMenu);



	/* Mobile filter */
	$('.catalog__filter-btn').click(function (e) { 
		e.preventDefault();
		$('.filter').toggleClass('filter_open');
	});

	function closeFilter(){
		$('.filter').removeClass('filter_open');
	}
	$('.filter__close').on('click', closeFilter);




	/* Spoiler */
	$('.spoiler__title').click(function () { 
		$(this).toggleClass('spoiler__title_open');
		$(this).next('.spoiler__content').slideToggle();
	});



	/* Product gallery Slider */
	if ($('.product-gallery').length > 0) {
		$('.product-gallery').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		});
	}



	/* Tabs */
	$('.tabs__content:first').show();
	$('.tabs__link:first').addClass('tabs__link_active');
	$('.tabs__link').click(function () {
		$('.tabs__link').removeClass('tabs__link_active'); 
		$(this).addClass('tabs__link_active'); 
		$('.tabs__content').hide(); 
		var activeTab = $(this).attr('href'); 
		$(activeTab).fadeIn();
		return false;
	});



	/* Show minicart */
	$('.product__button').click(function (e) { 
		e.preventDefault();
		$('.minicart').addClass('minicart_show');
	});

	


	/* Certificate slider */

	function sliderToggle() {
		// unslick slider if window >= 768px
		var $slider = $('.certificate__list')
		var breakpoint = 768

		if ($(window).width() >= breakpoint && $slider.hasClass('slick-initialized')) {
			$slider.slick('unslick');
		}
		if ($(window).width() < breakpoint && $slider.not('.slick-initialized')) {
			$slider.not('.slick-initialized').slick({  
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
		});
		}
	}
	sliderToggle();
	$(window).resize(sliderToggle);





	/* Quantity */

	$('.quantity__btn').click(function (event) {
		var n = parseInt($(this).parent().find('.quantity__input').val());
		if ($(this).hasClass('quantity__btn_dwn')) {
			n = n - 1;
			if (n < 1) {n = 1;}
		} else {
			n = n + 1;
		}
		$(this).parent().find('.quantity__input').val(n);
		return false;
	});

	$('.quantity__input').blur(function () {
		var val = $(this).val();
		if (val == '') {
			$(this).val(1);
		}
	});

	// set value 1 if empty
	$('.quantity__input').blur(function () {
		var val = $(this).val();
		if (val == '' || val == 0) {
			$(this).val(1);
		}
	});

});