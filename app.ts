
// mobile menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const navigation = document.getElementById('nav')
const menuUlEl = document.querySelector('ul')
// variables for slider Component
const sliderComponent = document.querySelectorAll('.slider');
const sliderTitle = document.querySelector('.slider-title');
const sliderImage = document.querySelector('img.slider-image') as HTMLImageElement;
const sliderText = document.querySelector('.slider-text');
// variables for About section
const aboutImage = document.getElementById('about-image') as HTMLImageElement;
const aboutTitle = document.getElementById('about-title');
const aboutText = document.getElementById('about-text');
const aboutLightImage = document.getElementById('light-image') as HTMLImageElement;


// menu trigger
hamburgerIcon.addEventListener('click',()=>{
    closeIcon.classList.toggle('active')
    hamburgerIcon.classList.toggle('active')
    navigation.classList.toggle('active')
    menuUlEl.classList.toggle('active')
})

closeIcon.addEventListener('click',()=>{
    closeIcon.classList.toggle('active')
    hamburgerIcon.classList.toggle('active')
    navigation.classList.toggle('active')
    menuUlEl.classList.toggle('active')
})

// initial page load data for slider
window.onload = function(){
    sliderImage.src = sliderContent[0].img;
    sliderTitle.textContent = sliderContent[0].title;
    sliderText.textContent = sliderContent[0].text;
}

if(window.innerWidth > 1025){
    window.onload = function(){
        sliderImage.src = sliderContent[0].imgDesktop;
        sliderTitle.textContent = sliderContent[0].title;
        sliderText.textContent = sliderContent[0].text;
    }
}
// Slider on click handlers
let active = 0;

const prevSlide = document.getElementById('prev-slide').addEventListener('click',()=>{
    if(active > 0){
        active--
    } else {
        active++
    }
    if(window.innerWidth < 1025){
        sliderImage.src = sliderContent[active].img;
    } else{
        sliderImage.src = sliderContent[active].imgDesktop;
    }
    sliderTitle.textContent = sliderContent[active].title;
    sliderText.textContent = sliderContent[active].text;
})

const nextSlide = document.getElementById('next-slide').addEventListener('click',()=>{
    active++;
    if(active === sliderContent.length){
        active = 0;
    }
    if(window.innerWidth < 1025){
        sliderImage.src = sliderContent[active].img;
    } else{
        sliderImage.src = sliderContent[active].imgDesktop;
    }
    sliderImage.src = sliderContent[active].imgDesktop;
    sliderTitle.textContent = sliderContent[active].title;
    sliderText.textContent = sliderContent[active].text;
})


// custom type for sliderContent array
type Slider = {
    img:string,
    imgDesktop:string,
    title:string,
    text:string
}

// custom type for aboutContent array
type About = {
    img:string
    title:string,
    text:string
}

// content for slider
const sliderContent:Slider[] = [
    {
        img:'./images/mobile-image-hero-1.jpg',
        imgDesktop:'./images/desktop-image-hero-1.jpg',
        title:'Discover innovative ways to decorate',
        text:'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in you own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        img:'./images/mobile-image-hero-2.jpg',
        imgDesktop:'./images/desktop-image-hero-2.jpg',
        title:'We are available all across the globe',
        text:"With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        img:'./images/mobile-image-hero-3.jpg',
        imgDesktop:'./images/desktop-image-hero-3.jpg',
        title:'Manufactured with the best materials',
        text:'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    },
]

// content for about section
const aboutContent:About[] = [
    {
        img:'./images/image-about-dark.jpg',
        title:'About our furniture',
        text:'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.'
    }
]

aboutContent.forEach(()=>{
    for(let i = 0; i < aboutContent.length; i++){
        aboutImage.src = aboutContent[i].img;
        aboutTitle.innerText = aboutContent[i].title;
        aboutText.innerText = aboutContent[i].text;  
    }
})
aboutLightImage.src = './images/image-about-light.jpg'
