script.js
const mainBtn = document.getElementById("mainBtn");
const contentBox = document.getElementById("contentBox");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const image = document.getElementById("image");
const description = document.getElementById("description");

mainBtn.addEventListener("click", () => {
contentBox.style.display = "block";
mainBtn.style.display = "none";});

btn1.addEventListener("click", () => {
image.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";
description.textContent = "New content loaded. Object changed.";});

btn2.addEventListener("click", () => {
contentBox.style.display = "none";
mainBtn.style.display = "inline-block";});