// Choose all images with CLASS = 'imageSwitch'
// const imgAmount = document.getElementsByClassName('imageSwitch');

// Choose all element with TAG = 'img'
const imgAmount = document.getElementsByTagName('img');

// Image array template
var pictureList = new Array(
    "img/blue.png",
    "img/cyan.png",
    "img/green.png",
    "img/orange.png",
    "img/pink.png",
    "img/red.png",
    "img/violet.png",
    "img/yellow.png"
);

// Change after window finished loading
// window.onload = switchImages(pictureList);

// Change on function - maybe button click
function switchImages(imageArray) {
    for (let index = 0; index < imageArray.length; index++) {
        var randomNum = Math.floor(Math.random() * imageArray.length);
        imgAmount[index].src = imageArray[randomNum];
    }
};

