// Selecting elements
const mainBtn = document.getElementById('mainBtn');
const contentDiv = document.getElementById('contentDiv');
const backBtn = document.getElementById('backBtn');
const changeBtn = document.getElementById('changeBtn');

const displayImg = document.getElementById('displayImg');
const description = document.getElementById('description');

// Show the div and hide the main button
mainBtn.addEventListener('click', () => {
    contentDiv.style.display = 'block';
    mainBtn.style.display = 'none';
});

// Hide the div and show the main button again
backBtn.addEventListener('click', () => {
    contentDiv.style.display = 'none';
    mainBtn.style.display = 'block';
});

// Change the image and text content
changeBtn.addEventListener('click', () => {
    // You can replace these URLs/Text with your specific data
    displayImg.src = "https://via.placeholder.com/200/0000FF/FFFFFF?text=New+Object";
    description.textContent = "The content has been successfully updated!";
});