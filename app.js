'use strict';



var totalClicks = 0;
var imageArray = [];

function Product (name,image) {
  this.name = name;
  this.image = image;
  this.votes = 0;
  this.timeShown = 0;
}


document.getElementById('img1').src = 'images/bubblegum.jpg';


imageArray[0] = new Product('bag','images/bag.jpg');
imageArray[1] = new Product('banana','images/banana.jpg');
imageArray[2] = new Product('bathroom','images/bathroom.jpg');
imageArray[3] = new Product('boots','images/boots.jpg');
imageArray[4] = new Product('breakfast','images/breakfast.jpg');
imageArray[5] = new Product('bubblegum','images/bubblegum.jpg');
imageArray[6] = new Product('chair','images/chair.jpg');
imageArray[7] = new Product('cthulhu','images/cthulhu.jpg');
imageArray[8] = new Product('dragon','images/dragon.jpg');
imageArray[9] = new Product('duck-dog','images/duck-dog.jpg');
imageArray[10] = new Product('pen','images/pen.jpg');
imageArray[11] = new Product('pet-sweep','images/pet-sweep.jpg');
imageArray[12] = new Product('scissors','images/scissors.jpg');
imageArray[13] = new Product('shark','images/shark.jpg');
imageArray[14] = new Product('sweep','images/sweep.png');
imageArray[15] = new Product('tauntaun','images/tauntaun.jpg');
imageArray[16] = new Product('unicorn','images/unicorn.jpg');
imageArray[17] = new Product('usb','images/usb.gif');
imageArray[18] = new Product('water-can','images/water-can.jpg');
imageArray[19] = new Product('wine-glass','images/wine-glass.jpg');

console.log(imageArray);


var number = Math.floor(Math.random() * (19 - 0)) + 0;
console.log(imageArray[number]);
var number2 = Math.floor(Math.random() * (19 - 0)) + 0;
console.log(imageArray[number2]);
var number3 = Math.floor(Math.random() * (19 - 0)) + 0;
var product1 = imageArray[number];
var product2 = imageArray[number2];
var product3 = imageArray[number3];
console.log(product1.image);
console.log(product2.image);
console.log(product3.image);
document.getElementById('img1').src = product1.image;
document.getElementById('img2').src = product2.image;
document.getElementById('img3').src = product3.image;

for (var i = 0; i < imageArray.length; i++) {
 
}

