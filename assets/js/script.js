const mediaQuery = window.matchMedia('(max-width: 900px)');

// Menu
const menuDesktop = document.querySelector('#desktop-menu');
const menuMobileClosed = document.querySelector('#mobile-menu-closed');
const menuMobileClosedButton = document.querySelector(
    '#mobile-menu-closed button');
const menuMobileOpen = document.querySelector('#mobile-menu-open');
const menuMobileOpenButton = document.querySelector(
    '#mobile-menu-open button');

// Main Slider
const header = document.querySelector('header');
const main = document.querySelector('main');
const mainPicture = document.querySelector('.main-picture');
const secondaryPictures = document.querySelector('.secondary-pictures');
const secondaryPicturesAllImg = document.querySelectorAll(
    '.secondary-pictures img');
const previousButton = document.querySelectorAll('main .slider-button')[0];
const nextButton = document.querySelectorAll('main .slider-button')[1];

// Lightbox 
const lightbox= document.querySelector('.lightbox');
const closeCrossBtn = document.querySelector('.close-cross-btn');

const mainPictureLightbox = document.querySelector(
    '.lightbox-content .main-picture');
const secondaryPicturesLightbox = document.querySelector(
    '.lightbox-content .secondary-pictures');
const secondaryPicturesAllImgLightbox = document.querySelectorAll(
    '.lightbox-content .secondary-pictures img');
const previousButtonLightbox = document.querySelector(
    '#previous-button-lightbox');
const nextButtonLightbox = document.querySelector('#next-button-lightbox');

// Quantity 
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const quantity = document.querySelector('.quantity');

// Add to card
const cartBtn= document.querySelector('.cart');
const avatar= document.querySelector('.avatar');
const cartQuantity= document.querySelector('.cart-quantity');


// ----------  Switch desktop & mobile menu ---------- //

function handelMenu(e) {
    if (e.matches) {
        menuDesktop.style.display = 'none';
        menuDesktop.setAttribute('aria-hidden', 'true');
        menuMobileClosed.style.display = 'initial';
        menuMobileClosed.setAttribute('aria-hidden', 'false');
    } else {
        menuDesktop.style.display = 'initial';
        menuDesktop.setAttribute('aria-hidden', 'false');
        menuMobileClosed.style.display = 'none';
        menuMobileClosed.setAttribute('aria-hidden', 'true');
    }  
};

// Execution when uploading the page
handelMenu(mediaQuery);
// Execution when page size changes
mediaQuery.addEventListener('change', handelMenu);


// ----------  Menu mobile closed ] opened ---------- //

menuMobileClosedButton.addEventListener('click', (e) => {
    menuMobileClosed.style.display = 'none';
    menuMobileClosed.setAttribute('aria-hidden', 'true');
    menuMobileOpen.style.display = 'initial';
    menuMobileOpen.setAttribute('aria-hidden', 'false');
});


menuMobileOpenButton.addEventListener('click', (e) => {
    menuMobileClosed.style.display = 'initial';
    menuMobileClosed.setAttribute('aria-hidden', 'false');
    menuMobileOpen.style.display = 'none';
    menuMobileOpen.setAttribute('aria-hidden', 'true');
});


// ----------  Slider ---------- //

//In the main | Desktop 
secondaryPictures.addEventListener ('click', (e) => {
    const button = e.target.closest('button');
    const buttonImg = button.querySelector('img');
    const buttonImgScr = buttonImg.src.replace('-thumbnail', '');
    
    secondaryPicturesAllImgLightbox.forEach((img) => {
        img.style.opacity = '1';
    });
    
    buttonImg.style.opacity = '0.5';
    mainPicture.setAttribute('src', buttonImgScr);
});


//In the lightbox through secondary pictures | Desktop only
secondaryPicturesLightbox.addEventListener ('click', (e) => {
    const button = e.target.closest('button');
    const buttonImg = button.querySelector('img');
    const buttonImgScr = buttonImg.src.replace('-thumbnail', '');
    
    secondaryPicturesAllImg.forEach((img) => {
        img.style.opacity = '1';
    });
    
    buttonImg.style.opacity = '0.5';
    mainPictureLightbox.setAttribute('src', buttonImgScr);
});

//Turn on and off the lightbox
closeCrossBtn.addEventListener('click', () => {
    const header = document.querySelector('header')});

mainPicture.addEventListener('click', () => {
    if (!mediaQuery.matches) {
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden', 'false');
        
        // Block the header and the main
        header.setAttribute('inert', '');
        main.setAttribute('inert', '');
        closeCrossBtn.focus();
    }
});

closeCrossBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    
    // Unblock the header and the main
    header.removeAttribute('inert');
    main.removeAttribute('inert');
    lightbox.style.display = 'none';
    header.setAttribute('aria-hidden', 'false');
    main.setAttribute('aria-hidden', 'false');
});


mainPicture.addEventListener('click', () => {
    if (!mediaQuery.matches) {
        lightbox.style.display = 'flex';
        main.setAttribute('aria-hidden', 'true');
    }
});


//In the lightbox through next and previous buttons | Desktop only
const sliderImages = [
    'assets/images/image-product-1.jpg',
    'assets/images/image-product-2.jpg',
    'assets/images/image-product-3.jpg',
    'assets/images/image-product-4.jpg'
];

let currentIndex = 0;

function updateMainPicture() {
    mainPictureLightbox.setAttribute('src', sliderImages[currentIndex]);
    
    for (let i = 0; i < secondaryPicturesAllImgLightbox.length; i++) {
        const img = secondaryPicturesAllImgLightbox[i];
        const index = i;
        img.style.opacity = index === currentIndex ? '0.5' : '1';
    }
}

previousButtonLightbox.addEventListener('click', () => {
    currentIndex = (
        currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateMainPicture();
});

nextButtonLightbox.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateMainPicture();
});


//Next and previous buttons | Tablet and mobile only
function updateMainPictureTabletMobile() {
    mainPicture.setAttribute('src', sliderImages[currentIndex]);
    
    for (let i = 0; i < secondaryPicturesAllImg.length; i++) {
        const img = secondaryPicturesAllImg[i];
        const index = i;
    }
}

previousButton.addEventListener('click', () => {
    currentIndex = (
        currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateMainPictureTabletMobile();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateMainPictureTabletMobile();
});


// ----------  Quantity ---------- //

let quantityOrdered = 0;  

plusBtn.addEventListener('click', () => {
    quantityOrdered += 1;
    quantity.textContent = quantityOrdered;
});

minusBtn.addEventListener('click', () => {
    if (quantity.textContent !== '0') {
        quantityOrdered -= 1;
        quantity.textContent = quantityOrdered;
    }
});


// ----------  Add to cart ---------- //

cartBtn.addEventListener('click', () => {
    quantity.textContent = '0';
    cartQuantity.style.display = 'initial';
    cartQuantity.textContent = quantityOrdered;
    avatar.style.border = '3px solid var(--orange500)';
    avatar.style.borderRadius = '2rem';
});


// ---------- Empty Cart ---------- //
