/*      Data         */
let players = [
    {
        id: 0,
        name: "Jhon",
        hand: [],
        table: [],
    },
    {
        id: 1,
        name: "Andres",
        hand: [],
        table: [],
    },
    {
        id: 2,
        name: "Lucas",
        hand: [],
        table: [],
    },
    {
        id: 3,
        name: "Cindy",
        hand: [],
        table: [],
    },
];

let cards = []

for(let i=1; i <= 50; i++){
    let card = i;
    cards.push(card);
}
//console.log(cards);

function setGoal(){
    let number1 = Math.floor(Math.random()*cards.length)
    let number2 = Math.floor(Math.random()*cards.length)
    return [number1, number2];
}
let goal = setGoal();
//console.log(goal);

/*      GAME SETUP       */
let rules = {
    draw: 1,
    play: 1,
}

/****       Functions       *****/
function shuffle(){
    let i, j, temp;
    for(i=cards.length-1; i>0; i--){
        j = Math.floor(Math.random()*(i+1));
        temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}
//console.log(shuffle());

function distribute(){
    players.forEach(player => {
        let initialHand = cards.splice(0,3);
        player.hand = initialHand;
    })
}

function draw(playerIndex){
    if(cards.length >= 1){
        let drawnCard = cards.shift();
        players[playerIndex].hand.push(drawnCard);
    }else{
        console.log("There are no cards in the deck.");
    }
}

function play(playerIndex){
    if(players[playerIndex].hand.length >= 1){
        let cardToPlay = players[playerIndex].hand.shift();
        players[playerIndex].table.push(cardToPlay);
    }else{
        console.log("There are no cards in your hand.");
    }
}

function validate(playerIndex){
    let result = goal.every(number => {
        return players[playerIndex].table.includes(number)
    })
    return result;
}


/*****      GAME LOGIC       *****/
shuffle();
distribute();
function playGame(){
    let winner = false;
    for(let turn = 1; winner!=false; turn++){}
        players.forEach(player => {
            draw(player.id);
            play(player.id);
            let isWinner = validate(player.id)
            if(isWinner == true){
                winner = true;
            }
        })
}

playGame();
console.log(players);
console.log(cards);
console.log(goal);







/*****      DEBUGGING       *****/
/*
shuffle();
distribute();
console.log(players);
draw(0);
play(0);
draw(1);
play(1);
draw(2);
play(2);
draw(3);
play(3);
draw(0);
play(0);
draw(1);
play(1);
draw(2);
play(2);
draw(3);
play(3);
draw(0);
play(0);
console.log(goal);
console.log(players);
console.log(cards);
*/