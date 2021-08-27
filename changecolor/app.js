const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


let btn = document.getElementById("btn");
let colortext = document.querySelector(".color");

btn.addEventListener("click", run);
function run() {
    const RndomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[RndomNumber];
    colortext.textContent=colors[RndomNumber];
}

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length)
}