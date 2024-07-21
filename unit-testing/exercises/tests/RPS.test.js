const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("should return Tie! when players input the same answer.", function (){
        let output = whoWon('paper','paper'); //whoWon is not a function... why?
        expect(output).toBe('TIE!');
    });

    test("should return player 2 wins if P1 = rock and P2 = paper", function(){
        let output = whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("should return player 2 wins if P1 = paper and P2 = scissors", function (){
        let output = whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });

    test("should return player 2 wins if P1 = scissors and P2 = rock", function(){
        let output = whoWon('scissors', 'rock');
        expect(output).toBe("Player 2 wins!");
    });

    test("should return player 1 wins if P1 = rock and P2 = scissors", function(){
        let output = whoWon('rock', 'scissors');
        expect(output).toBe("Player 1 wins!");
    });

});