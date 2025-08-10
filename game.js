let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice = () => {
    //modular way of programming
    const options = ["rock", "paper", "scissor1"];
    const randI = Math.floor(Math.random() * 3);
    return options[randI];
};
const drawgame = () => {
    msg.innerText = "Game was Draw.Play again.";
    msg.style.backgroundColor = "yellow";
}
function shwinner (userwin, userchoice, compchoice) {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win!  your ${userchoice}  beats ${compchoice}`;
        msg.style.backgroundColor = "green";


    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose!")
        msg.innerText = `You lost! ${compchoice}  beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    //console.log("user choice =",userchoice)
    const compchoice = gencompchoice();
    //console.log("comp choice =",compchoice);
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor1" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        shwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});