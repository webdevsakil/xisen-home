// navigation
document.querySelector(".mobile-menu").addEventListener("click", function () {
    document.querySelector(".menu-area").classList.toggle("toggleMenu")
})
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('stickyheader', window.scrollY > 5)
})
// slider
var slider = tns({
    container: '.hero-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    swipeAngle: true
});
var testimonialSlider = tns({
    container: '.testimonial-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    swipeAngle: true,
    navContainer: ".testimonial-nav-container"
});
var logoSlider = tns({
    container: '.logo-slider',
    slideBy: 'page',
    autoplay: true,
    controls: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    swipeAngle: true,
    nav: false,
    items: 4,
    responsive: {
        300: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 3
        },
        700: {
            gutter: 30,
            items: 4
        },
        900: {
            items: 5
        }
    }
});
// Aos
AOS.init();