let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset")
let newbtn = document.querySelector(".newbtn")
let message = document.querySelector(".message")
let resetbtnclass = document.querySelector(".ctn")

// player x and player y
let turn0 = true

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("you have clicked button")
        if(turn0){
            box.innerText = "0"
            turn0 = false

        }
        else{
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true

        checkWinner()
    })
});

const checkWinner = () => {
    for(let patern of winpattern){
        let pos1 = boxes[patern[0]].innerText
        let pos2 = boxes[patern[1]].innerText
        let pos3 = boxes[patern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner" , pos1)
                showWinner(pos1)
            }
        }
    }
}

const showWinner = (winner) =>{
    message.innerText = `CONGRATUALATION.....WINNER IS ${winner}`
    message.classList.remove("hide")
    newbtn.classList.remove("hide")
    disableboxes()
}

const resetgame = () => {
    turn0 = true
    enableboxes()
    newbtn.classList.add("hide")
    message.classList.add("hide")
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""      
    }
}

newbtn.addEventListener("click" , resetgame)
resetbtn.addEventListener("click" , resetgame)