$('#open-popup-btn').click(function (e) {
	e.preventDefault()
	$('#popup').removeClass('hidden')
	$('body').addClass('overflow-hidden')
})
$('#close-popup-btn').click(function (e) {
	e.preventDefault()
	$('#popup').addClass('hidden')
	$('body').removeClass('overflow-hidden')
	$('#popup-content').addClass('hidden')
	$('.cat-link').removeClass('bg-orange-400')
	$('.cat-img').attr('src', 'img/right-def.svg')
})
$('.cat-link').click(function (e) {
	e.preventDefault()
	$('.cat-link').removeClass('bg-orange-400')
	$('.cat-img').attr('src', 'img/right-def.svg')
	$('#popup-content').removeClass('hidden')
	$(this).addClass('bg-orange-400')
	$(this).children('.cat-img').attr('src', 'img/right.svg')
})
$('.popup-mobile__link').click(function (e) {
	e.preventDefault()
	$('#popup-mobile').addClass('hidden')
	$('#mobile-header__icon').children('img').attr('src', 'img/burger.svg')
})
$('#mobile-header__icon').click(function () {
	$('#popup-mobile').toggleClass('hidden')
	$('body').toggleClass('overflow-hidden')
	if ($('#popup-mobile').hasClass('hidden')) {
		return $(this).children('img').attr('src', 'img/burger.svg')
	}
	$(this).children('img').attr('src', 'img/burger-open.svg')
})
$('.slider').slick({
	arrows: true,
	slidesToShow: 1,
	centerMode: true,
	centerPadding: '20%',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				centerPadding: '10%',
				arrows: false
			}
		},
		{
			breakpoint: 575,
			settings: {
				centerMode: false,
				arrows: false
			}
		}
	]
})