


let Cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name : "Per",
    chips : 200
}


let messageEl = document.getElementById("message-el")
//let sumEL = document.getElementById("sum-el")

let sumEL = document.querySelector("#sum-el")
let cardEL = document.getElementById("card-el")
let playerEL = document.getElementById("player-el")

function startGame()
{
    let firstCard =  getRandomNo()
    let secondCard =  getRandomNo()
    Cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    
    playerEL.textContent = player.name + ": $" + player.chips
    renderGame()
}

function getRandomNo(){
    let num = Math.floor((Math.random() * 10) + 1);
    return num
}

function renderGame(){
    if(sum <=20)
    {
        message = "Do you want to draw a new card ?"
    }
    else if (sum === 21)
    {
        message ="!! Congrat's you've got BlackJack !!"
        hasBlackJack = true
    }
    else
    {
        message = "Sorry!, you're out of the game "
        isAlive = false
    }
    sumEL.textContent = "Sum : " + sum


    cardEL.textContent = "Cards : "
    for(let i=0;i<Cards.length;i+=1){
        cardEL.textContent += Cards[i] + " , "  
    }
    
    messageEl.innerText = message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomNo()
        sum += card
        Cards.push(card)
        renderGame()
    }
    
}
