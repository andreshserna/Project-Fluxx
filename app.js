/*****      Data         *****/
    /*****      Players         *****/
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
        /*****      Cards         *****/
    let cards = []
    for(let i=1; i <= 50; i++){
        let card = i;
        cards.push(card);
    }
        /*****      Goal         *****/
    function setGoal(){
        let number1 = Math.floor(Math.random()*cards.length)
        let number2 = Math.floor(Math.random()*cards.length)
        return [number1, number2];
    }
    let goal = setGoal();
    
    /*****      GAME SETUP (Rules)         *****/
    let rules = {
        draw: 1,
        play: 1,
    }
    
    /****       Functions       *****/
        /*****      Initial Shuffle         *****/
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
        /*****      Initial distribution (3 cards per player)         *****/
    function distribute(){
        players.forEach(player => {
            let initialHand = cards.splice(0,3);
            player.hand = initialHand;
        })
    }
        /*****      Draw cards per turn (1)         *****/
    function draw(playerIndex){
        if(cards.length >= 1){
            let drawnCard = cards.shift();
            players[playerIndex].hand.push(drawnCard);
        }else{
            console.log("There are no cards in the deck.");
        }
    }
        /*****      Play cards per turn (1)         *****/
    function play(playerIndex){
        if(players[playerIndex].hand.length >= 1){
            let cardToPlay = players[playerIndex].hand.shift();
            players[playerIndex].table.push(cardToPlay);
        }else{
            console.log("There are no cards in your hand.");
        }
    }
        /*****      Validate if the player's table meets the winning criteria (goal)         *****/
    function validate(playerIndex){
        let result = goal.every(number => {
            return players[playerIndex].table.includes(number)
        })
        return result;
    }
    
    
    /*****      GAME LOGIC (Function to play the game using the previously declared functions)       *****/
    function playGame(){
        let turn = 0
        shuffle();
        distribute();
        let winner = false;
        while(winner !== true){
            turn++;
            players.forEach(player => {
                if(cards.length>0){
                    draw(player.id);
                }
                if(player.hand.length > 0){
                    play(player.id);
                }
            })
            let winnersInfo = players.find(player => {
                return validate(player.id);
            })
            if(winnersInfo !== undefined){
                console.log(`The winner is: ${winnersInfo.name}, in the turn: ${turn}`);
                console.log(winnersInfo);
                console.log(`The goal of this game was ${goal}`);
                winner = true;
                break
            }else if(cards.length === 0){
                console.log("No more cards to play");
                console.log("This game had no winner");
                console.log("Try running the app agian");
                break;
            }
        }
    }
    /*****      Run the game         *****/
    playGame();