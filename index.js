let randomNumber1 = Math.floor((Math.random()*6)) + 1;
let randomNumber2 = Math.floor((Math.random()*6)) + 1;
let heading = document.querySelector("h1");

console.log(randomNumber1);
console.log(randomNumber2);

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

img1.setAttribute("src", `../DiceGame/images/dice${randomNumber1}.png`);
img2.setAttribute("src", `../DiceGame/images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2) {
    heading.innerText = "Player1 Wins⛳";
}
else if(randomNumber2 > randomNumber1) {
    heading.innerText = "Player2 Wins⛳";
}
else {
    heading.innerText = "Draw!";
}
