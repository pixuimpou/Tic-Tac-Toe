const annouceWinner = () => {
    if(isGameOver()) {
        let container = document.getElementById("container");

        container.innerHTML += `<div class="winner">
                                    <h2>The ${turn.toUpperCase()} won</h2>
                                    <div class="btn" onclick="resetGame()">Play Again</div>
                                </div>`;
                            
    }
}


const makeMove = (square) => {
    let squarePermited = selecteds[parseInt(square.id)].isSelected === false && isGameOver() === false;
    let squareId = document.getElementById(square.id);

    if (squarePermited) {
        squareId.innerHTML = `<div class="player">${turn}</div>`;
    }

    handlePlays(square);
    annouceWinner();
}

