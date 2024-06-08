// function game(a){
//     let random_number=Math.floor(Math.random()*10+1)

//     return random_number==a?`Your Guess is right computer also guess same number ${random_number}`:`your guess is ${a} but computer guess ${random_number} `

// }
// let prompt=require("prompt-sync")()

// let you_number=prompt()
// let result=game(you_number)
// console.log(result)

// let prompt = require("prompt-sync")()
// function game2(a) {
//     let random_number = Math.floor(Math.random() * 10 + 1)
//     random_number = random_number > 5 ? (random_number - 5) : random_number


//     return random_number == a ? `Your Guess is right computer also guess same number ${random_number}` : `your guess is ${a} but computer guess ${random_number} `

// }


// let human = prompt()
// let result2 = game2(human)
// console.log(result2)

// function user_sumit() {

//     let user_value = document.querySelector(".user-input")




//     console.log("user_sumit()" + user_value.values)
// }
let result = document.querySelector(".result p");

function check(n){
    console.log(n)
    let random_number=Math.floor(Math.random()*10+1)
    let rrs=random_number==n?`computer guess ${random_number} u guess ${n} You Win`:`computer guess ${random_number} u guess ${n} You Loss`
    console.log(rrs)
    
    result.innerHTML=rrs
}

function submitFunc(e) {
    e.preventDefault();
    let user_value = document.querySelector(".user-input").value;
    console.log("user_submit() " + user_value);
    check(Number(user_value))
    document.querySelector(".user-input").value = ""; 
}


