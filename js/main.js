/*--------First Slider------------*/

$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay: true,
    autoplayspeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});

/*---Second slider------*/

$(".slider-two")
.not(".slick-intialized")
.slick({
    prevArrow: ".site-slider-2 .prev",
    nextArrow: ".site-slider-2 .next",
    slidesToShow: 5,
    slidesToScroll: 1

});
