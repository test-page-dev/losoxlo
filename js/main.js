'use strict';

$(function () {

	// Burger
	if ($('.burger').length) {
		let burgerWrap = $('.burger')
		let burgerToggle = $('.burger__toggle');
		let mobileMenu = $('.mobile-menu');

		burgerWrap.on('click', function () {
			burgerToggle.toggleClass('is-active');
			mobileMenu.toggleClass('is-active');
			$('body').toggleClass('no-scroll');
		})
	}

	// Custom select
	if ($('select').length) {
		function custom_select() {

			jQuery('select:not(.select__hidden)').each(function () {
				let $this = jQuery(this), numberOfOptions = jQuery(this).children('option').length;

				$this.wrap('<div class="select"></div>');
				$this.after('<div class="select__styled"></div>');

				let $styledSelect = $this.next('div.select__styled');
				$styledSelect.text($this.children('option').eq(0).text());

				if ($this.attr('class')) {
					$styledSelect.addClass($this.attr('class'));
				}

				$this.addClass('select__hidden');

				let $list = jQuery('<ul />', {
					'class': 'select__options'
				}).insertAfter($styledSelect);

				for (let i = 0; i < numberOfOptions; i++) {
					jQuery('<li />', {
						text: $this.children('option').eq(i).text(),
						rel: $this.children('option').eq(i).val()
					}).appendTo($list);
				}

				let $listItems = $list.children('li');

				$styledSelect.on('click', function (e) {
					e.stopPropagation();
					jQuery('div.select__styled.active').not(this).each(function () {
						jQuery(this).removeClass('active').next('ul.select__options').fadeOut();
					});
					jQuery(this).toggleClass('active').next('ul.select__options').fadeToggle();
				});

				$listItems.on('click', function (e) {
					e.stopPropagation();
					$styledSelect.text(jQuery(this).text()).removeClass('active');
					$this.val(jQuery(this).attr('rel'));

					$this.trigger('change'); // TRIGGER CHANGE EVENT;

					$list.fadeOut();
				});

				jQuery(document).on('click', function () {
					$styledSelect.removeClass('active');
					$list.fadeOut();
				});
			});
		}

		custom_select();
	}

	// Actions popup
	if ($('.header__actions-popup').length) {
		let actionPopup = $('.header__actions-popup');
		let actionBtn = $('.header__actions-btn');
		let actionItem = $('.header__actions-item');
		let actionCount = $('.header__actions-counter');
		let actionMessage = $('.header__actions-message');
		let actionNotif = $('.header__actions-notifications');
		let actionCart = $('.header__actions-cart');

		actionBtn.on('click', function (e) {
			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
				$(this).next(actionPopup).fadeOut(200);
			} else {
				actionBtn.removeClass('is-active');
				$(this).addClass('is-active');
				actionPopup.fadeOut(200);
				$(this).next(actionPopup).fadeIn(200);
			}
			e.preventDefault();
		});

		$(document).on('click', function (e) {
			if (actionItem.has(e.target).length === 0) {
				actionPopup.fadeOut();
				actionBtn.removeClass('is-active');
			}
		});

		// *If actions counts is empty
		if (!actionCart.find(actionCount).length) {
			actionCart.next().text('Cart is empty.').addClass('is-empty');
		}

		if (!actionMessage.find(actionCount).length) {
			actionMessage.next().text('There are no new Messages.').addClass('is-empty');
		}

		if (!actionNotif.find(actionCount).length) {
			actionNotif.next().text('There are no new notifications.').addClass('is-empty');
		}

	}

	// Main slider
	if ($('.main-box__slider').length) {
		const swiper = new Swiper('.main-slider', {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 1,
			speed: 800,

			pagination: {
				el: '.sp-1',
				clickable: true,
			},

			navigation: {
				nextEl: '.sb-n',
				prevEl: '.sb-p',
			},
		});
	}

	// Sliders
	if ($('.slider').length) {

		// Latest deals
		const swiper1 = new Swiper('.slider-1', {
			slidesPerView: 'auto',
			spaceBetween: 25,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 5,
				}
			}
		});

		// Featured categories
		const swiper2 = new Swiper('.slider-2', {
			slidesPerView: 'auto',
			autoHeight: false,
			spaceBetween: 24,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 6,
				}
			}
		});

		// Top deals
		const swiper3 = new Swiper('.slider-3', {
			slidesPerView: 'auto',
			spaceBetween: 25,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 5,
				}
			}
		});

		// Just For You
		const swiper4 = new Swiper('.slider-4', {
			slidesPerView: 'auto',
			spaceBetween: 25,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 5,
				}
			}
		});

		// Shop by Region
		const swiper5 = new Swiper('.slider-5', {
			slidesPerView: 'auto',
			spaceBetween: 25,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 5,
				}
			}
		});

		// Popular phones
		const swiper6 = new Swiper('.slider-6', {
			slidesPerView: 'auto',
			spaceBetween: 25,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 3,
				}
			}
		});

		// Popular laptops
		const swiper7 = new Swiper('.slider-7', {
			slidesPerView: 'auto',
			spaceBetween: 25,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 3,
				}
			}
		});

		// Popular laptops
		const swiper8 = new Swiper('.slider-8', {
			slidesPerView: 'auto',
			spaceBetween: 25,
			speed: 800,
			loop: true,
			freeMode: true,
			breakpoints: {
				1360: {
					slidesPerView: 4,
				}
			}
		});
	}

	// Items filter show button
	if ($('.shop-category').length) {
		$('.shop-category__items-filters').on('click', function (e) {
			$('.shop-category__sidebar').toggleClass('is-active');
			e.preventDefault();
			e.stopPropagation();
		});

		$('.shop-category__sidebar').on('click', function (e) {
			e.stopPropagation();
		});

		$(document).on('click', function () {
			$('.shop-category__sidebar').removeClass('is-active');
		});
	}

	// Shop categories
	if ($('.shop-category').length) {
		let viewToggler = $('.shop-category__view i');
		let sidebarToggler = $('.shop-category__sidebar-title');

		// Category items view toggler
		viewToggler.on('click', function () {
			if ($(this).hasClass('is-active')) {
				return;
			} else {
				viewToggler.removeClass('is-active');
				$(this).addClass('is-active');
				$('.shop-category__items-bottom').toggleClass('is-active');
			}
		});

		// Sidebar lists toggler
		sidebarToggler.on('click', function () {
			$(this).find('i').toggleClass('is-active');
			$(this).next('.shop-category__filter').slideToggle();
			$(this).parent().toggleClass('is-active');
		});

		// Price range slider
		$('.shop-category__price-input').ionRangeSlider({
			type: "double",
			onStart: function (data) {
				$('.shop-category__price-from').text(data.from);
				$('.shop-category__price-to').text(data.to);
			},
			onChange: function (data) {
				$('.shop-category__price-from').text(data.from);
				$('.shop-category__price-to').text(data.to);
			},
		});
	}

	// Item gallery
	if ($('.item').length) {

		let imgBig = $('.item__gallery-big-img img');
		let imgBigWrap = $('.item__gallery-big-img');
		let videoBigWrap = $('.item__gallery-video');
		let videoBig = $('.item__gallery-video iframe');
		let smallImg = $('.item__gallery-small-img');

		smallImg.on('click', function (e) {
			let attr = $(this).attr('href');

			if ($(this).hasClass('video-content')) {
				videoBigWrap.fadeIn();
				imgBigWrap.fadeOut();
				videoBig.attr('src', attr);
			} else {
				videoBigWrap.fadeOut();
				imgBigWrap.fadeIn();
				videoBig.attr('src', '');
				imgBig.attr('src', attr);
			}

			e.preventDefault();
		});
	}

	// Item gallery slider
	if ($('.item__gallery').length) {

		const swiperI = new Swiper('.item__slider', {
			slidesPerView: 4,
			spaceBetween: 5,

			navigation: {
				nextEl: '.gl-n',
				prevEl: '.gl-p',
			},
		});

	}

	// File upload input
	if ($('.file-input').length) {
		let fields = document.querySelectorAll('.file-input__input');

		Array.prototype.forEach.call(fields, function (input) {
			let label = input.nextElementSibling,
				labelVal = label.querySelector('.file-input__text').innerText;

			input.addEventListener('change', function (e) {
				let countFiles = '';
				if (this.files && this.files.length >= 1)
					countFiles = this.files.length;

				if (countFiles)
					label.querySelector('.file-input__text').innerText = 'Files selected : ' + countFiles;
				else
					label.querySelector('.file-input__text').innerText = labelVal;
			});
		});
	}

	// Item wide gallery
	if ($('.gallery-container').length) {
		var galleryThumbs = new Swiper(".gallery-thumbs", {
			spaceBetween: 10,
			mousewheel: true,
			slidesPerView: 4,
			watchOverflow: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			direction: 'horizontal',
			breakpoints: {
				320: {
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				769: {
					direction: 'vertical',
				}
			}
		});

		var galleryMain = new Swiper(".gallery-main", {
			watchOverflow: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			preventInteractionOnTransition: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});

		galleryMain.on('slideChangeTransitionStart', function () {
			galleryThumbs.slideTo(galleryMain.activeIndex);
		});

		galleryThumbs.on('transitionStart', function () {
			galleryMain.slideTo(galleryThumbs.activeIndex);
		});
	}

	// Cart item quantity
	if ($('.cart__item-quantity').length) {
		$('.num-in span').on('click', function () {
			var $input = $(this).parents('.num-block').find('input.in-num');
			if ($(this).hasClass('minus')) {
				var count = parseFloat($input.val()) - 1;
				count = count < 1 ? 1 : count;
				if (count < 2) {
					$(this).addClass('dis');
				}
				else {
					$(this).removeClass('dis');
				}
				$input.val(count);
			}
			else {
				var count = parseFloat($input.val()) + 1
				$input.val(count);
				if (count > 1) {
					$(this).parents('.num-block').find(('.minus')).removeClass('dis');
				}
			}

			$input.on('change');
			return false;
		});
	}

});



