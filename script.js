// const computer = document.querySelector("#compute");
// const you = document.querySelector("#you");
// const result = document.querySelector("#result")



// const button = document.querySelectorAll('button');


// let youchoise;
// let computerchoise;
// let resultchoise;



// let func1 = function () {
//     const randomnumber = Math.floor(Math.random() * button.length)
//     if (randomnumber === 1) {
//         computerchoise = "Daş"
//     }
//     if (randomnumber === 2) {
//         computerchoise = "Kağız"
//     }
//     if (randomnumber === 1) {
//         computerchoise = "Qayçı"
//     }


//     computer.innerHTML = computerchoise


// }


// let func2 = function () {


//     if (computerchoise === youchoise) {
//         resultchoise = "Bərabərlik qeydə alındı!"
//     }

//     if (computerchoise === "Daş" && youchoise === "Kağız") {

//         resultchoise = "Biz qalib gəldik!"

//     }

//     if (computerchoise === "Daş" && youchoise === "Qayçı") {

//         resultchoise = "Çox heyif uduzduq!"

//     }

//     if (computerchoise === "Kağız" && youchoise === "Qayçı") {

//         resultchoise = "Biz qalib gəldik!"

//     }
//     if (computerchoise === "Kağız" && youchoise === "Daş") {

//         resultchoise = "Çox heyif uduzduq!"
//     }
//     if (computerchoise === "Qayçı" && youchoise === "Kağız") {

//         resultchoise =  "Çox heyif uduzduq!"

//     }

//     if (computerchoise === "Qayçı" && youchoise === "Daş") {

//         resultchoise =   "Biz qalib gəldik!"

//     }

//     result.innerHTML = resultchoise
// }

// button.forEach(button => button.addEventListener('click', (e) => {
//     youchoise = e.target.id
//     you.innerHTML = youchoise;
//     func1()
//     func2()
// }))





//2.daha qisa sekilde yazmaq


// const computer = document.querySelector("#compute");
// const you = document.querySelector("#you");
// const result = document.querySelector("#result");
// const buttons = document.querySelectorAll('button');

// let youChoice;
// let computerChoice;
// let resultMessage;

// const playGame = (e) => {
//     youChoice = e.target.id;
//     you.innerHTML = youChoice;

//     const randomnumber = Math.floor(Math.random() * 3) + 1;
//     if (randomnumber === 1) {
//         computerChoice = "Daş";
//     } else if (randomnumber === 2) {
//         computerChoice = "Kağız";
//     } else {
//         computerChoice = "Qayçı";
//     }

//     computer.innerHTML = computerChoice;

//     if (computerChoice === youChoice) {
//         resultMessage = "Bərabərlik qeydə alındı!";
//     } else if (
//         (computerChoice === "Daş" && youChoice === "Kağız") ||
//         (computerChoice === "Kağız" && youChoice === "Qayçı") ||
//         (computerChoice === "Qayçı" && youChoice === "Daş")
//     ) {
//         resultMessage = "Biz qalib gəldik!";
//     } else {
//         resultMessage = "Çox heyif uduzduq!";
//     }

//     result.innerHTML = resultMessage;
// };

// buttons.forEach((button) => button.addEventListener('click', playGame));



//Array yaradaraq oynamaq ve innerhtml yerine textcontent yazmaq



const computer = document.querySelector("#compute");
const you = document.querySelector("#you");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll('button');

let youChoice;
let computerChoice;
let resultMessage;

const playGame = (e) => {
    youChoice = e.target.id;
    you.textContent = youChoice;

    const choices = ["Daş", "Kağız", "Qayçı"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    computer.textContent = computerChoice;

    if (computerChoice === youChoice) {
        resultMessage = "Bərabərlik qeydə alındı!";
    } else if (
        (computerChoice === "Daş" && youChoice === "Kağız") ||
        (computerChoice === "Kağız" && youChoice === "Qayçı") ||
        (computerChoice === "Qayçı" && youChoice === "Daş")
    ) {
        resultMessage = "Biz qalib gəldik!";
    } else {
        resultMessage = "Çox heyif uduzduq!";
    }

    result.textContent = resultMessage;
};

buttons.forEach((button) => button.addEventListener('click', playGame));



console.log(computer);
