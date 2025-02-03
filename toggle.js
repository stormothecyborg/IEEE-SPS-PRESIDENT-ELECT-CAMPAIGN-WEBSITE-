// Get the elements
const menuButton = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// Add click event listener to the button
menuButton.addEventListener('click', function () {
    // Toggle the 'open' class on the mobile menu
    mobileMenu.classList.toggle('open');
});
