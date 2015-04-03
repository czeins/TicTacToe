// IIFE
(function(){
	angular
		.module('TicTacToe')
		.controller('sqController', sqController);

	function sqController() {

		var self = this;


// Declaring variable that will store whose turn it is.
// True = Player 1, False = Player 2
		var playerTurn = true;
		var playerOneSymbol = "x";
		var playerTwoSymbol = "o";

		self.winner = {
			winner: "",
			gameOver: false,
			player1wins: null

		};


// players
		self.players = [
			{
				name: "Player1",
				symbol: "x",
				wins: 0
			},
			{
				name: "Player2",
				symbol: "o",
				wins: 0
			}
		];

// Array of Squares
		self.squares = [
			{
				value: null
			},
			{
				value: null
			},
			{
				value: null
			},
			{
				value: null
			},
			{
				value: null
			},
			{
				value: null
			},
			{
				value: null
			},
			{
				value: null
			},
			{
				value: null
			}
		];



		// Checking to see if a Tic Tac Square has been clicked.
		// The default state of a Square is null. If it is clicked, it changes to either "x" or "o".
		// If the square has something in it, it is not null, therefore the expression ends and nothing happens.
		self.checkClicked = function(index) {
			if (self.squares[index].value !== null )
				return false;
			self.squares[index].value = self.changeTurn(playerTurn);
		};

		// Switches values 'x' and 'o'
		self.changeTurn = function() {
			if (playerTurn === true) {
			playerTurn = false;
			return "x";
			} else {
			playerTurn = true;
			return "o";
			}
		};

		self.doBoth = function(index) {
			if (self.winner.gameOver === true) {
				return;
			} else {
				self.checkClicked(index);
				self.checkForThree();
			}
		};

			// Determining if Tic Tac Toe has been achieved.
			// We're setting setting each value as a variable (square 1, square2, etc...).
			// Then we're determining if they're equal.

			self.checkForThree = function() {
			var square1 = self.squares[0].value,
				square2 = self.squares[1].value,
				square3 = self.squares[2].value,
				square4 = self.squares[3].value,
				square5 = self.squares[4].value,
				square6 = self.squares[5].value,
				square7 = self.squares[6].value,
				square8 = self.squares[7].value,
				square9 = self.squares[8].value;

			if (square1 == square2 && square2 == square3 && square1 == square3 && square1 != null) {
				announceWinner(square1);
			}
			else if (square4 == square5 && square4 == square6 && square5 == square6 && square4 != null){
				announceWinner(square4);
			}
			else if (square7 == square8 && square7 == square9 && square8 == square9 && square7 != null){
				announceWinner(square7);
			}
			else if (square1 == square4 && square1 == square7 && square4 == square7 && square1 != null){
				announceWinner(square1);
			}
			else if (square2 == square5 && square2 == square8 && square5 == square8 && square2 != null){
				announceWinner(square2);
			}
			else if (square3 == square6 && square3 == square9 && square6 == square9 && square3 != null){
				announceWinner(square3);
			}
			else if (square1 == square5 && square1 == square9 && square5 == square9 && square1 != null){
				announceWinner(square1);
			}
			else if (square3 == square5 && square3 == square7 && square5 == square7 && square3 != null){
				announceWinner(square3);
			}
		};

//When function runs, it will determine if "x" or "o" and add a message to a the Winner div accordingly.
			announceWinner = function(square) {
				if (square === "x") {
					self.winner.winner = "It appears you have won.";
					self.winner.gameOver = true;
					self.winner.player1wins = true;
				} else if (square === "o") {
					self.winner.winner = "I'm so sorry, Annabelle.";
					self.winner.gameOver = true;
					self.winner.player1wins = false;
				}
			};

//Calculate Score
			calculateScore = function() {
				if (self.winner.player1wins === true) {
					self.players[0].wins = (self.players[0].wins)++;
				} else if (self.winner.player1wins === false) {
					self.players[1].wins = (self.players[1].wins)++;
				}
			};
		}

})();