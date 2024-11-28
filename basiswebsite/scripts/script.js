// JavaScript Document
console.log("hi");

const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("nav");

function toggleMenu(){ deNav.classList.add("toonMenu");
}

menuButton.onclick = toggleMenu;

