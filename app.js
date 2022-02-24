'use strict';
const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');
const navBar = document.querySelector('.nav-bar');

openMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', hideMenu);

function displayMenu() {
 openMenu.classList.add('is-hidden');
 closeMenu.classList.remove('is-hidden');
 navBar.classList.remove('is-hidden');
}
function hideMenu() {
 closeMenu.classList.add('is-hidden');
 navBar.classList.add('is-hidden');
 openMenu.classList.remove('is-hidden');
}