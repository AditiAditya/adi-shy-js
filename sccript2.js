let boxes = document.querySelectorAll(".box")
let resatBtn = document.querySelectorAll("#resat-btn")
let newGameBtn = document.querySelector("#new-btn")
letmsgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;  // platerX  ,   playerO


let winningPatten = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {   //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = "true"
        }
        box.disabled = true;

        checkWinner();
    })
});

const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
 msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winningPatten) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);

            }
        }
    }
};