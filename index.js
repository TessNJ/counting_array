"use strict";
document.addEventListener("DOMContentLoaded", countingArray);

let counter = 0;
const anArray = [];

function countingArray() {
  if (counter < 50) {
    // console.log(counter);
    anArray.unshift(counter);
    console.log(anArray);
    if (anArray.length > 8) {
      anArray.pop();
    }
    counter += 1;
    setTimeout(countingArray, 1000);
  }
}

function countingArray1() {
  anArray.unshift(counter);
  console.log(anArray.slice(0, 9));
  counter += 1;
  setTimeout(countingArray, 1000);
}
