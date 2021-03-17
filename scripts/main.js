const gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    return {board}
})();

const displayController = (() => {

    const getBoard = document.getElementsByClassName('squareDiv');
    const replayGame = document.querySelector('.replayBtn')
    let getBoardArray = Array.prototype.slice.call(getBoard);
    let turn = 0
    
    getBoardArray.forEach(element => {
        element.addEventListener("click", function(e){
          
          if (turn == 0 && e.target.textContent == "") {
            element.textContent = player1.marker;
            element.style.backgroundColor = "#cce5ff";
            gameboard.board.splice(element.id, 1, player1.marker)
            turn = 1
            
          } else if(turn == 1 && e.target.textContent == "")  {
            element.textContent = player2.marker;
            element.style.backgroundColor = "#b3d7ff";
            gameboard.board.splice(element.id, 1, player2.marker)
            turn = 0
          }
            gameResult.checkWin()
            });   
      
      });
  
    replayGame.addEventListener('click', () => {
      location.reload();
    });

})();


const gameResult = (() => {  
    const displayResult = document.querySelector('.announceWinner')
    const modalContainer = document.querySelector('.modal')
    
    const checkWin = () => {
    let board = gameboard.board
    let playerWon = false
      
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
              modalContainer.style.display = 'block'
              displayResult.textContent = "X WINS"
              playerWon = true;
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
            modalContainer.style.display = 'block'
            displayResult.textContent = "O WINS"
            playerWon = true;
          
        } else if (board.includes("") == false && playerWon == false) {
             modalContainer.style.display = 'block'
             displayResult.textContent = "IT'S A DRAW"
        }
      }

return {checkWin}

})();

const Player = (marker) => {
    return {marker}
};

const player1 = Player("X")
const player2 = Player("O")
