let turn = "x";
let player = { "x": [], "o": [] };
let win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]    
];
let squares = document.querySelectorAll(".square");
let selecteds = {
    1: { isSelected: false, by: "none" },
    2: { isSelected: false, by: "none" },
    3: { isSelected: false, by: "none" },
    4: { isSelected: false, by: "none" },
    5: { isSelected: false, by: "none" },
    6: { isSelected: false, by: "none" },
    7: { isSelected: false, by: "none" },
    8: { isSelected: false, by: "none" },
    9: { isSelected: false, by: "none" }
};

const nextTurn = () => {
    if(turn === "x") {
        turn = "o";
    } else {
        turn = "x";
    }
}

const isGameOver = () => {
    for (let p of win) {
        if (selecteds[p[0]].by === selecteds[p[1]].by && selecteds[p[0]].by === selecteds[p[2]].by 
            && selecteds[p[0]].by !== "none") {
                return true;
            }
    }
    return false;selecteds
    
}

const handlePlays = (square) => {
    
    if(selecteds[parseInt(square.id)].isSelected === false) {

        player[turn].push(parseInt(square.id));

        selecteds[parseInt(square.id)].isSelected = true;
        selecteds[parseInt(square.id)].by = turn;

        if (isGameOver()) {
            console.log("Game Over");
        } else {
        nextTurn();
        console.log(turn);
        }
    }
}