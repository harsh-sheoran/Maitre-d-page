$('.slick').slick({
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});