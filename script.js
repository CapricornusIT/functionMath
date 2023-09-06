function answer() {
    let name = prompt('Enter Your Name')
    let year = +prompt('Enter Current Year')
    let birth = +prompt('Enter Year Date of Birth')

    let i = year - birth

    return console.log(name + ', Your age ' + i);
}
answer()

let num = +prompt('Enter Number of Examples')
function number(max){
    return Math.floor(Math.random() * max / 2);
}
let max = 100;
 
for (i = 0; i < num; i++) {
    let a = number(max);
    let b = number(max);
    let random = Math.floor(Math.random() * 3 + 0)
 
    if (random == 0) {
        var answer = a + b;
        var myAnswer = prompt(a + '+' + b);
    } else if (random == 1) {
        var answer = a - b;
        var myAnswer = prompt(a + '-' + b);
    } else if (random == 2) {
        var answer = a * b;
        var myAnswer = prompt(a + '*' + b);
    } else if (random == 3) {
        var answer = a / b;
        var myAnswer = prompt(a + '/' + b);
    }
 
    if (answer == myAnswer){
        console.log('Your Answer is Correct: ' + answer);
    } else {
        console.log('Your Answer is Not Correct: ' + myAnswer + '!' + ' Correct Answer: ' + answer + '!');
    }
}
alert('Getting Results! (on the Console)')

// let num = +prompt('Enter Number of Examples')

// function rand(number) {
//     return Math.floor(Math.random() * number - 1)
// }
// let number = 100;

// function answer(){
//     let random = Math.floor(Math.random() * 4 + 1)
//     for (i = 0; i < num; i++){
//         let myAnswer = random == 1 ? +prompt (a + "+" + b) : +prompt (a + "-" + b);
//         console.log('Your Answer is Correct: ' + myAnswer); 
//         let myAnswer2 = random == 2 ? +prompt (a + "+" + b) : +prompt (a + "-" + b);
//         console.log('Your Answer is Correct: ' + myAnswer2); 
//     }
// }
// let a = rand(number);
// let b = rand(number);

// let num = +prompt('Enter Number of Examples')
// let min = +prompt('Enter the minimum number')
// let max = +prompt('Enter the maximum number')
// function rand(min, max){
//     return Math.floor(Math.random() * (max + 1 - min) + min);
// }
 
// for (i = 0; i < 5; i++) {
//     let a = rand(min, max);
//     let b = rand(min, max);
//     let answer = a + b;
//     let c = prompt(a + "+" + b);
//     if (answer == c){
//         console.log(a + ' + ' + b + ' = ' + (answer) + '. Your Answer ' + c + ' Well done');
//     } else {
//         console.log(a + ' + ' + b + ' = ' + (answer) + '. Your Answer ' + c + ' Fault');
//     }
// }
// alert('Getting Results! (on the Console)')