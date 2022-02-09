// mobile menu
var hamburgerIcon = document.getElementById('hamburger-icon');
var closeIcon = document.getElementById('close-icon');
var navigation = document.getElementById('nav');
var menuUlEl = document.querySelector('ul');
// variables for slider Component
var sliderComponent = document.querySelectorAll('.slider');
var sliderTitle = document.querySelector('.slider-title');
var sliderImage = document.querySelector('img.slider-image');
var sliderText = document.querySelector('.slider-text');
// variables for About section
var aboutImage = document.getElementById('about-image');
var aboutTitle = document.getElementById('about-title');
var aboutText = document.getElementById('about-text');
var aboutLightImage = document.getElementById('light-image');
// menu trigger
hamburgerIcon.addEventListener('click', function () {
    closeIcon.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    navigation.classList.toggle('active');
    menuUlEl.classList.toggle('active');
});
closeIcon.addEventListener('click', function () {
    closeIcon.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    navigation.classList.toggle('active');
    menuUlEl.classList.toggle('active');
});
// initial page load data for slider
window.onload = function () {
    sliderImage.src = sliderContent[0].img;
    sliderTitle.textContent = sliderContent[0].title;
    sliderText.textContent = sliderContent[0].text;
};
if (window.innerWidth > 1025) {
    window.onload = function () {
        sliderImage.src = sliderContent[0].imgDesktop;
        sliderTitle.textContent = sliderContent[0].title;
        sliderText.textContent = sliderContent[0].text;
    };
}
// Slider on click handlers
var active = 0;
var prevSlide = document.getElementById('prev-slide').addEventListener('click', function () {
    if (active > 0) {
        active--;
    }
    else {
        active++;
    }
    if (window.innerWidth < 1025) {
        sliderImage.src = sliderContent[active].img;
    }
    else {
        sliderImage.src = sliderContent[active].imgDesktop;
    }
    sliderTitle.textContent = sliderContent[active].title;
    sliderText.textContent = sliderContent[active].text;
});
var nextSlide = document.getElementById('next-slide').addEventListener('click', function () {
    active++;
    if (active === sliderContent.length) {
        active = 0;
    }
    if (window.innerWidth < 1025) {
        sliderImage.src = sliderContent[active].img;
    }
    else {
        sliderImage.src = sliderContent[active].imgDesktop;
    }
    sliderImage.src = sliderContent[active].imgDesktop;
    sliderTitle.textContent = sliderContent[active].title;
    sliderText.textContent = sliderContent[active].text;
});
// content for slider
var sliderContent = [
    {
        img: './images/mobile-image-hero-1.jpg',
        imgDesktop: './images/desktop-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        text: 'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in you own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        img: './images/mobile-image-hero-2.jpg',
        imgDesktop: './images/desktop-image-hero-2.jpg',
        title: 'We are available all across the globe',
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        img: './images/mobile-image-hero-3.jpg',
        imgDesktop: './images/desktop-image-hero-3.jpg',
        title: 'Manufactured with the best materials',
        text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    },
];
// content for about section
var aboutContent = [
    {
        img: './images/image-about-dark.jpg',
        title: 'About our furniture',
        text: 'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.'
    }
];
aboutContent.forEach(function () {
    for (var i = 0; i < aboutContent.length; i++) {
        aboutImage.src = aboutContent[i].img;
        aboutTitle.innerText = aboutContent[i].title;
        aboutText.innerText = aboutContent[i].text;
    }
});
aboutLightImage.src = './images/image-about-light.jpg';
