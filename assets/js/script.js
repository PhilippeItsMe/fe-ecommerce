const mediaQuery = window.matchMedia('(max-width: 900px)');

// Menu const
const menuDesktop = document.querySelector('#desktop-menu');
const menuMobileClosed = document.querySelector('#mobile-menu-closed');
const menuMobileClosedButton = document.querySelector('#mobile-menu-closed button');
const menuMobileOpen = document.querySelector('#mobile-menu-open');
const menuMobileOpenButton = document.querySelector('#mobile-menu-open button');

// Main Illustration const
const mainPicture = document.querySelector('.main-picture');
const secondaryPictures = document.querySelector('.secondary-pictures');
const secondaryPicturesAllImg = document.querySelectorAll('.secondary-pictures img')

// Lightbox Illustration const
const mainPictureLightbox = document.querySelector('.lightbox-content .main-picture');
const secondaryPicturesLightbox = document.querySelector('.lightbox-content .secondary-pictures');
const secondaryPicturesAllImgLightbox = document.querySelectorAll('.lightbox-content .secondary-pictures img')


// ----------  Switch between desktop & mobile menu ---------- //

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


// ----------  Switch between mobile closed and open menu ---------- //

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


// ----------  Picture slider switch ---------- //

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

//In the lightbox through next and previous buttons | Desktop only









