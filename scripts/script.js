// JavaScript Document
console.log("hi");

/*Bron: lesopdracht: JS 3-stap*/
const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("nav");

function toggleMenu(){ deNav.classList.toggle("toonMenu");
}

menuButton.onclick = toggleMenu;

