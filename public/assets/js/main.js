'use strict';

let imageBig = document.getElementById('heroBig');
let imageSmall = document.getElementById('heroSmall');
let currentPos = 0;
const imagesBig = [
  'virentia1.jpg',
  'virentia2.jpg',
  'virentia3.png',
  'virentia4.jpg',
];
const imagesSmall = [
  'virentia1_450.jpg',
  'virentia2_450.jpg',
  'virentia3_450.png',
  'virentia4_450.jpg',
];

function changePic() {
  if (++currentPos >= imagesBig.length || ++currentPos >= imagesSmall.length)
    currentPos = 0;
  imageSmall.src = './assets/images/' + imagesSmall[currentPos];
  imageBig.src = './assets/images/' + imagesBig[currentPos];
}

setInterval(changePic, 3000);

//# sourceMappingURL=main.js.map
