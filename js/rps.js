// ROCK PAPER SCISSORS IMAGE SOURCE - WIKIPEDIA//



var rps = {
    eYou: null, //holds your move HTML container
    eCom: null, //holds computer move HTML container
    eSel: null, //holds HTML rock, paper, scissors, paper selector
    eGo: null, //holds HTML go button
    eWin: null, wins: 0, //wins counter
    eLose: null, loses: 0, //loses counter
    eDraw: null, draws: 0, //draws counter

    load: function () {
        var images = ["game-rock.png", "game-paper.png", "game-scissors.png"],
            img = null,
            loaded = 0;
        for (var i of images) {
            img = new Images();
            img.onload = function () {
                loaded++;
                if (loaded === images.length) {
                    rps.init();
                }
            };
        }
        img.src = i;
    },

    function init() {
        rps.eYou = document.getElementById("rps-you-move");
        rps.eCom = document.getElementById("rps-comp-move");
        rps.eSel = document.getElementById("rps-you-sel");
        rps.eGo = document.getElementById("rps-you-go");
        rps.eWin = document.getElementById("rps-win");
        rps.eLose = document.getElementById("rps-lose");
        rps.eDraw = document.getElementById("rps-draw");

        //when user changes rock, paper, scissor selection//
        rps.eSel.addEventListener("change", rps.switch);
        rps.switch();

        //When user hits "Go!"
        rps.eGo.addEventListener("click, rps.game");

        //Unlock all controls
        rps.eSel.disabled = false;
        rps.eGo.disabled = false;
    }


/*Game run*/

function

switch () {
    var
        img = new Image();
        img.src = "game-" + rps.eSel.value + ".png";
        rps.eYou.innerHTML = "";
        rps.eYou.appendChild(img);
}
,

function game() {
    //random computer move
    var compMove = Math.random();
    if (compMove <= 0.33) {
        compMove = "rock";
    } else if (compMove <= 0.67) {
        compMove = "paper";
    } else {
        compMove = "scissors";
    }
    var img = new Image();
    img.src = "game-" + compMove + ".png";
    rps.eCom.innerHTML = "";
    rps.eCom.appendChild(img);

}


