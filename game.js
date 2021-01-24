let turn = "x";
let winConditions = [
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


const checkSequences = (s) => {
    if (selecteds[s[0]].by === selecteds[s[1]].by && selecteds[s[0]].by === selecteds[s[2]].by
        && selecteds[s[0]].by !== "none") {
        return true;
    }

    return false;
}

const isGameOver = () => {
    for (let item of winConditions) {
        if (checkSequences(item)) {
            return true;
        }
    }
    return false;

}


const handlePlays = (square) => {
    
    if(selecteds[parseInt(square.id)].isSelected === false) {

        selecteds[parseInt(square.id)].isSelected = true;
        selecteds[parseInt(square.id)].by = turn;

        if (isGameOver() === false) {
        nextTurn();
        console.log(turn);
        }
    }
}

const handleReset = () => {
    turn = "x";
    
    selecteds = {
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
}