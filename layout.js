container = document.getElementById("container");

const annouceWinner = () => {
    if(isGameOver()) {

        container.innerHTML += `<div class="winner" id="popUp">
                                    <h2>The ${turn.toUpperCase()} won</h2>
                                    <div class="btn" onclick="resetBoard()">Play Again</div>
                                </div>`;
                            
    }
}


const makeMove = (square) => {
    let squarePermited = selecteds[parseInt(square.id)].isSelected === false && isGameOver() === false;
    let squareId = document.getElementById(square.id);

    if (squarePermited) {
        squareId.innerHTML = `<div class="player" id="p${squareId.id}">${turn}</div>`;
    }

    handlePlays(square);
    annouceWinner();
}

const resetBoard = () => {
    handleReset();
    container.innerHTML = `<div class="board">
                <div class="square" id="1" onclick="makeMove(this)">
                    <!-- <div class="player">X</div> -->
                </div>
                <div class="square" id="2" onclick="makeMove(this)">
                    <!-- <div class="player">O</div> -->
                </div>
                <div class="square" id="3" onclick="makeMove(this)"></div>
                <div class="square" id="4" onclick="makeMove(this)"></div>
                <div class="square" id="5" onclick="makeMove(this)"></div>
                <div class="square" id="6" onclick="makeMove(this)"></div>
                <div class="square" id="7" onclick="makeMove(this)"></div>
                <div class="square" id="8" onclick="makeMove(this)"></div>
                <div class="square" id="9" onclick="makeMove(this)"></div>
            </div>`;
}
