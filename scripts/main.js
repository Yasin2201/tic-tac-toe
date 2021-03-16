const gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = document.getElementsByClassName('squareDiv');
    
    const render = () => {

        for (i = 0; i < board.length; i++) {
            getBoard[i].textContent = board[i]
        }
    }
    return {render, getBoard, board}
})();
gameboard.render()

const displayController = (() => {

    const getBoard = gameboard.getBoard
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
            // console.log(gameboard.board[element.id]) 
            console.log(gameboard.board)  
            });      
      });
})();




const gameResult = (() => {    
    const checkWin = () => {

          }
    })();





const Player = (playerName, marker) => {
    return {playerName, marker}
};

const player1 = Player('Player 1', "X")
const player2 = Player('Player 2', "O")
