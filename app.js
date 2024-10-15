'use strict';


function helloUser() {
    let username = prompt('What is your name?');
    console.log('Hello ' + username);
    document.write('Hello ' + username );
}
helloUser();

function time() {
    let currentTime = prompt('What time is it?');
    console.log('Time is ' + currentTime);
    document.write('Time is ' + currentTime); 
}
time();

function favorite() {
    let favoriteRoast = prompt('What is your favorite roast coffee?');
    console.log('Favorite roast coffee is ' + favoriteRoast);
    document.write(favoriteRoast + ' roast all the time');
}
favorite();

let userInput = '';
while (userInput !== 'order') {
    userInput = prompt("Type 'order' to end the loop");
    console.log('You typed ' + userInput);
    document.write('You typed: ' + userInput );
}


let numImages = prompt('How many coffees would you like?');

numImages = parseInt(numImages);

if (!isNaN(numImages) && numImages > 0) {
    for (let i = 0; i < numImages; i++) {
        const container = document.getElementById('image-container');
        const imageUrl = "https://clipart.com/thumbs.php?f=/747/batch_01/000747-0001-000089_tnb.png";
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Repeated Image';
        img.style.width = '100px'; 
        img.style.height = '100px'; 
        container.appendChild(img);
    }
} 
