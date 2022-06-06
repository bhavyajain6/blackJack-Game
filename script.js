let player = {
    name: "",
    chips: 200,
    getName : function(){
        player.name = prompt("Enter Player Name");
    }
}
let sum = 0
let cards = [];
let message = '';
let isAlive = false;
let hasBlackJack = false;

let messageEl = document.querySelector('.message-el')
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');
let playerEl = document.querySelector('#player-el');

player.getName();
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*12 + 2);
    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard,secondCard);
    console.log(cards);
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " +sum;
    if(sum <=20){
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
    }else if(sum === 21){
        message = "You've got a BlackJack!";
        messageEl.textContent = message;
        hasBlackJack = true;
    }else{
        message = "You're out of the Game."
        messageEl.textContent = message;
        isAlive = false;
    }
    console.log(message);
}


function newCard(){
    if(isAlive && !hasBlackJack){
        let thirdCard = getRandomCard();
        cards.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
}