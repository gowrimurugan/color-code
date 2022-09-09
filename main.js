// console.log(Math.round(4.6));
// console.log(Math.round(4.5));
// console.log(Math.round(4.4));

console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(-4.2));

console.log(Math.floor(-4.9));
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.4));
// console.log(Math.floor(4.2));
// console.log(Math.floor(-4.2));

console.log(Math.trunc(4.9));
// console.log(Math.trunc(4.7));
// console.log(Math.trunc(4.4));
// console.log(Math.trunc(4.2));
// console.log(Math.trunc(-4.2));

// console.log(Math.sign(-4));
// console.log((Math.sign(0)));
// console.log((Math.sign(1000000)));

// console.log(Math.pow(-8, 3));

// console.log(Math.sqrt(91));

// console.log(Math.abs(-4.7));

// console.log(Math.sin(90 * Math.PI / 180));
// // returns 1 (the sine of 90 degrees)

// console.log(Math.cos(0 * Math.PI / 180));
// // returns 1 (the cos of 0 degrees)

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// console.log(Math.max(0, 150, 30, 20, -8, 200));

// console.log(Math.floor(Math.random() * 5));

// console.log(Math.log(1));
// console.log(Math.log(2));
// console.log(Math.log(3));

// console.log(Math.log2(10));

// console.log(Math.log10(1));

console.log(Math.floor(Math.random() * 6));



let box = document.querySelector(".box");
let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{

let red = Math.floor(Math.random()*256);
let green = Math.floor(Math.random()*256);
let blue = Math.floor(Math.random()*256);

let clr = "rgb(" + red +", " + blue + ", " + green + ")";
box.style.backgroundColor = clr;
box.style.color = clr;
})

let num =( Math.floor(Math.random() * 200))