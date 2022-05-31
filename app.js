const navigation = document.getElementById("navigation");
const head = document.getElementById("head");
const menu = document.getElementById("menu");
const closebtn = document.getElementById("clsbtn");
const openButton = document.getElementById("openbutton");

function openNav(){
    navigation.classList.add("-active");
    head.classList.add("-active");
    menu.classList.add("-active");
    closebtn.classList.add("-active");
    openButton.classList.add("-active");
}

function closeNav(){
    navigation.classList.remove("-active");
    head.classList.remove("-active");
    menu.classList.remove("-active");
    closebtn.classList.remove("-active");
    openButton.classList.remove("-active");
}