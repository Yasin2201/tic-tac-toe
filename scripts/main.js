const gameboard = (() => {
    const board = 
    ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

     console.log(board) //Remove

    function _render() {
        const getBoard = document.querySelectorAll("[data-index]");

        for (i = 0; i < board.length; i++) {
            getBoard[i].textContent = board[i]
        }

        console.log(getBoard) //Remove 
    }
    _render()
})();

const gameFlow = (() => {

})

const Player = (playerName, marker) => {
    return {playerName, marker}
};