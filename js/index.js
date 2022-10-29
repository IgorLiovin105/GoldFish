$('#open-popup-btn').click((e) => {
	e.preventDefault()
	$('#popup').removeClass('hidden')
	$('body').addClass('overflow-hidden')
})
$('#close-popup-btn').click((e) => {
	e.preventDefault()
	$('#popup').addClass('hidden')
	$('body').removeClass('overflow-hidden')
	$('.info').addClass('hidden')
	$('.cat-link').removeClass('bg-orange-400')
})
$('.cat-link').click(function (e) {
	e.preventDefault()
	$('.info').addClass('hidden')
	$('.cat-link').removeClass('bg-orange-400')
	$($(this).attr('href')).removeClass('hidden')
	$(this).addClass('bg-orange-400')
})