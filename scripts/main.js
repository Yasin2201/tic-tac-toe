const gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    return {board}
})();

const displayController = (() => {

    const getBoard = document.getElementsByClassName('squareDiv');
    let getBoardArray = Array.prototype.slice.call(getBoard);
    let turn = 0
    
    getBoardArray.forEach(element => {
        element.addEventListener("click", function(e){
          
          if (turn == 0 && e.target.textContent == "") {
            element.textContent = player1.marker;
            gameboard.board.splice(element.id, 1, player1.marker)
            console.log(e.target.textContent)
            turn = 1
          } else if(turn == 1 && e.target.textContent == "")  {
            element.textContent = player2.marker;
            gameboard.board.splice(element.id, 1, player2.marker)
            console.log(e.target.textContent)
            turn = 0
          }
            console.log(gameboard.board)  
            gameResult.checkWin()
            });      
      });
})();




const gameResult = (() => {    

    const checkWin = () => {
    
    let board = gameboard.board

        if (
            board[0] == player1.marker && board[1] == player1.marker && board[2] == player1.marker ||
            board[3] == player1.marker && board[4] == player1.marker && board[5] == player1.marker ||
            board[6] == player1.marker && board[7] == player1.marker && board[8] == player1.marker ||
            board[0] == player1.marker && board[3] == player1.marker && board[6] == player1.marker ||
            board[1] == player1.marker && board[4] == player1.marker && board[7] == player1.marker ||
            board[2] == player1.marker && board[5] == player1.marker && board[8] == player1.marker ||
            board[0] == player1.marker && board[4] == player1.marker && board[8] == player1.marker ||
            board[2] == player1.marker && board[4] == player1.marker && board[6] == player1.marker
          ) {
              console.log("X WINS")
        } else if (
            board[0] == player2.marker && board[1] == player2.marker && board[2] == player2.marker ||
            board[3] == player2.marker && board[4] == player2.marker && board[5] == player2.marker ||
            board[6] == player2.marker && board[7] == player2.marker && board[8] == player2.marker ||
            board[0] == player2.marker && board[3] == player2.marker && board[6] == player2.marker ||
            board[1] == player2.marker && board[4] == player2.marker && board[7] == player2.marker ||
            board[2] == player2.marker && board[5] == player2.marker && board[8] == player2.marker ||
            board[0] == player2.marker && board[4] == player2.marker && board[8] == player2.marker ||
            board[2] == player2.marker && board[4] == player2.marker && board[6] == player2.marker
        ) {
            console.log("O WINS")

        } else if (board == ["X", "O", "X", "O", "X", "O", "X", "O", "X"]){ //DOESNT WORK
            console.log("DRAW")
            console.log(board)
        }
    }
return {checkWin}

})();




const Player = (playerName, marker) => {
    return {playerName, marker}
};

const player1 = Player('Player 1', "X")
const player2 = Player('Player 2', "O")


// Array.prototype.multiIndexOf = function (el) { 
//     var idxs = [];
//     for (var i = this.length - 1; i >= 0; i--) {
//         if (this[i] === el) {
//             idxs.unshift(i);
//         }
//     }
//     return idxs;
// };

// var abc = gameboard.board
//     console.log(abc.multiIndexOf('X'));
//     console.log(abc.multiIndexOf('O'));
//     console.log(winningCombo[0])

//     if (winningCombo[0] != abc.multiIndexOf('X')) {
//         console.log("X Wins")
//     }
