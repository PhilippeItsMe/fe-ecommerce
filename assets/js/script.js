const mediaQuery = window.matchMedia('(max-width: 900px)');

const menuDesktop = document.querySelector('#desktop-menu');
const menuMobileClosed = document.querySelector('#mobile-menu-closed');
const menuMobileClosedButton = document.querySelector('#mobile-menu-closed button');
const menuMobileOpen = document.querySelector('#mobile-menu-open');
const menuMobileOpenButton = document.querySelector('#mobile-menu-open button');



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

//Execution when uploading the page
handelMenu(mediaQuery);
//Execution when page size changes
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


