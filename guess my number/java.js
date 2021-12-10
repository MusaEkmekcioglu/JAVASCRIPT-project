// const massMark=78;
// const heightMark=1.69;
// const massJohn=92;
// const heightJohn=1.95;

// const BMIMark=massMark/ (heightMark**2);
// const BMIJohn=massJohn / (heightJohn**2);

// if(BMIMark > BMIJohn){
//     console.log(`Mark's (${BMIMark}) Bmi is higher than John's(${BMIJohn})!`)
// }else{
//     console.log(`John's Bmi is higher than Mark's`)
// }

// const dolphinScore1=96;
// const dolphinScore2=108;
// const dolphinScore3=89;

// const koalaScore1=88;
// const koalaScore2=91;
// const koalaScore3=110;

// if(dolphinAvarage > koalaAvarage) console.log(`dolphin is winner`);
// else console.log(`koala is winner`);
// console.log(dolphinAvarage>koalaAvarage);

// const dolphinScore1=97;
// const dolphinScore2=112;
// const dolphinScore3=101;

// const koalaScore1=109;
// const koalaScore2=95;
// const koalaScore3=106;

// const dolphinAvarage= (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3 ;
// const koalaAvarage= (koalaScore1 + koalaScore2 + koalaScore3) / 3;
// console.log(dolphinAvarage);
// console.log(koalaAvarage);

// if(dolphinAvarage>koalaAvarage && dolphinAvarage>100 && koalaAvarage>100) {
//     console.log(`dolphin is winner ${dolphinAvarage}`);
// }else if(koalaAvarage>dolphinAvarage && koalaAvarage>100 && dolphinAvarage>100){
//     console.log(`koala is winner ${koalaAvarage}`);

// }else{
//     console.log(`both of them is looser `)
//}

// const bill=430;

// const trip = bill>50 && bill<300 ? (bill*15) /100 : (bill*20) /100;

// console.log(`total = ${bill+trip}, trip = ${trip} `);

// const avarageScore= (score1,score2,score3) => (score1+score2+score3)/3;
// const koalaAvarage= avarageScore(65,54,49);
// const dolphinsAvarage= avarageScore(44,23,71);
// const checkWinner= function(){
//     if(koalaAvarage>dolphinsAvarage*2) return `koala wins ${koalaAvarage}`;
//     else if (dolphinsAvarage > koalaAvarage*2) return `dolphins wins ${dolphinsAvarage}`
//     else return `not winner`;
// }

// console.log(checkWinner());

// const calcTip = bill => bill>50 && bill<300 ? bill*0.15 : bill*0.2;
// console.log(calcTip(100));

// const tips = new Array(calcTip(125), calcTip(555),calcTip(44));
// console.log(tips);

// const total= [calcTip(125)+125, calcTip(555)+555, calcTip(44)+44];
// console.log(total);

// const jonas={
//     firstName: `Jonas`,
//     lastName: `Schhmedtman`,
//     birthYear:1990,
//     job: `teacher`,
//     friends: [ `micheal`,`peter`,`steven`],
//     driverLicense: true,

//     checkDriverLicense : function(){
//       const check =this.driverLicense ?  `a drivers license` : `not drivers license`;
//       return check;
//     },
//     calcAge : function(){
//         this.age=2037-this.birthYear;
//         return this.age;
//     }

// };

// const a= `${jonas[`firstName`]} has ${(jonas[`friends`]).length} friends, and his best friend is called ${jonas[`friends`][0]}`;
// //console.log(a);
// const src= `${jonas.firstName} is a ${jonas[`calcAge`]()}-years
//  old ${jonas.job} and he has ${jonas[`checkDriverLicense`]()} `;

//  console.log(src);

// const marks ={
//     fullName: `Mark`,
//     lastName: `Miller`,
//     height:1.69,
//     weight:78,
//     avarageBMI : function(){
//         return this.weight / (this.height **2);
//     }
// };

// const john ={
//     fullName: `John`,
//     lastName: `Smith`,
//     height:1.95,
//     weight:92,
//     avarageBMI : function(){
//         return this.weight / (this.height **2);
//     }
// };

// const result = function(){
//    return marks.avarageBMI() > john.avarageBMI() ? `${marks.fullName + marks.lastName}'s MNI(${marks.avarageBMI()}) is higher than johns`: `${john.fullName + john.lastName}'s MNI(${john.avarageBMI()}) is higher than Marks`;
// };

// console.log(result());

// const bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[];
// const totals=[];

// const calcTip = function(bill){
//     const trip = bill>50 && bill<300 ? bill*0.15 : bill*0.20;
//     return trip;
// };

// for(let i =0; i < bills.length; i++){
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i]+calcTip(bills[i]));
// };

// const calcAverage= function(arr){
//     let sum=0;

//     for(let i=0; i<arr.length; i++){
//     sum +=arr[i];
//     }

//     return sum / arr.length;

// }
// console.log(totals);
// console.log(calcAverage(totals));

// const printForecast = function (arr) {
//   let returnString = ''
//   for (let i = 0; i < arr.length; i++) {
//     returnString += `... ${arr[i]}'C in ${i + 1} days  `
//   }
//   return returnString + `...`
// }

// console.log(printForecast([12, 5, -5, 0, 4]))

let number = Math.floor(Math.random() * 20) + 1
console.log(number)
const message = document.querySelector(`.message`)
const myNumber = document.querySelector(`.number`)
const score = document.querySelector(`.score`)
const highScore = document.querySelector(`.highscore`)
const again = document.querySelector(`.again`)
const guessButton = document.querySelector(`.guess`)
let i = 20

again.addEventListener(`click`, function () {
  message.textContent = `start guessing...`
  myNumber.style.width = `15rem`
  document.body.style.backgroundColor = `#444`
  i = 20
  score.textContent = i
  myNumber.textContent = `?`
  guessButton.value = ''
  number = Math.floor(Math.random() * 20) + 1
})

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guessNumber = Number(document.querySelector(`.guess`).value)
  console.log(guessNumber)
  i--
  if (i > 0) {
    if (!guessNumber) {
      message.textContent = `⛔ no number`
      i++
    } else if (guessNumber == number) {
      message.textContent = `🎉 congralations`
      document.body.style.backgroundColor = `green`
      myNumber.textContent = guessNumber
      myNumber.style.width = `35rem`
      score.textContent = i
      if (i > highScore.textContent) {
        highScore.textContent = i
      }
    } else if (guessNumber != number) {
      message.textContent = guessNumber < number ? `too low` : `too high`
      score.textContent = i
    }
  } else {
    message.textContent = `💥💥 lose your game`
    score.textContent = `💯 Score: 0`
    document.body.style.backgroundColor = `red`
  }
})
