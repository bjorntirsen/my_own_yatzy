//File containing classes: Game, Player, Communication
class Game {
    constructor(playAm = 1) {
        this.playerAmount = playAm;
        this.players = [];
        for (let i = 0; i < playAm; i++) {
            this.players.push(new Player());
        }
        let throwsField = document.getElementById("throwsLeft")
    let throws = 3;
    }
}

class Player {
    constructor() {
        this.name = "anonymous";
        this.row1done = false;
        this.row2done = false;
        this.row3done = false;
        this.row4done = false;
        this.row5done = false;
        this.row6done = false;
        this.rowSumValue = 0;
        this.rowBonusValue = 0;        
        this.row9done = false;
        this.row10done = false;
        this.row11done = false;
        this.row12done = false;
        this.row13done = false;
        this.row14done = false;
        this.row15done = false;
        this.row16done = false;
        this.row17done = false;
        this.rowTotalValue = 0;
    }        
}

class Communication {
    constructor() {
        this.step = 0;
    }
    commsLogic() {
        let comm1 = document.getElementById("comm1");
        if (this.step === 0) {
            this.stepOne();
        }
        else if (this.step === 1) {
                        
        }
        else if (this.step === 3) {
    
        }
        else if (this.step === 4) {
    
        }
        else {
            document.getElementById("comm-btn").disabled = true;
        }
    }
    stepOne() {
        let comDiv = document.getElementById("communication-div");
        comDiv.innerHTML = "";
        let pOne = document.createElement("p");
        pOne.setAttribute("id", "comm1");
        comDiv.appendChild(pOne);
        let comm1 = document.getElementById("comm1");
        comm1.innerHTML = "How many players will play?";
        let span1 = document.createElement("span");
        span1.setAttribute("class", "spanner");
        span1.setAttribute("id", "span1");
        span1.innerHTML = "One player";
        comm1.after(span1);        
        let span2 = document.createElement("span");
        span2.setAttribute("class", "spanner");
        span2.setAttribute("id", "span2");
        span2.innerHTML = "Two players";
        comm1.after(span2);
        /* let input_field = document.createElement("input");
        input_field.setAttribute("id", "input_field"); */
        /* comm1.after(input_field);
        document.getElementById("input_field").focus(); */
        this.step++;
    }
    steptwo() {
        /* let tmp = document.getElementById("input_field").value; */
        console.log(current_game);
        if (tmp == 1) {
            this.step++;
        }            
        else if (tmp == 2) {
            this.step+2;
        }
        this.step++;
    }
}

//Listner for start of game



//Funktion för att göra text osynlig förutom när musen pekar
function hide(target, zone) {
    target.classList.add("invisible");
    zone.onmouseover = function() {
        target.classList.remove("invisible");
        target.classList.add("visible")
    };
    zone.onmouseout = function() {
        target.classList.remove("visible");
        target.classList.add("invisible")
    };
}
//Funktion för att göra bakgrundsfärgen grön på möjliga fält
function green(target) {
    target.style.backgroundColor = "lightgreen";
}
//Funktion för att ta bort det gröna
function silver(target) {
    target.style.backgroundColor = "silver";
}
//
/* function randOneSix() {
    return Math.floor(Math.random() * 6) + 1; 
}*/
//Funktioner som triggas vid ändring i fälten:
/* window.addEventListener("change", function(event) {
    //Kod för att räkna ut summa från "p1" fälten
    //denna kod kan förenklas senare
    let arr1 = document.getElementsByClassName('p1');
    let arr2 = Array.from(arr1);
    let arr3 = arr2.map((element, index, array) => {
        return parseInt(element.value) || 0
    });
    //Kod för att skriva ut summan av "p1" fälten
    let arrsum = arr3.reduce((a, b) => {
        return a + b;
    }, 0);
    document.getElementById("p1sum").innerHTML = arrsum;
    //Kod för att skriva ut 50 bonus poäng om summan av 
    //"p1" fälten är 63 eller mer
    let bonus = 0;
    if (arrsum >= 63) bonus = 50;
    document.getElementById("player1bonus").innerHTML = bonus;
}); */




        /* //Funktioner för att highlighta möjliga rutor
        //Par
        let td_p1p = document.getElementById("td-p1p");
        current_set.checkPair()
        if (current_set.) {
            green(td_p1p);
        } else {
            silver(td_p1p);
        }

        //Två par 
        //(först filtrera ur 4or & 2or, sen kolla om summa är 4)
        let dice_no2 = dice_no.filter(numb => (numb === 2) || (numb === 4) == true);
        dice_no3 = dice_no2.reduce((a, b) => a + b, 0);
        let td_p12p = document.getElementById("td-p12p");
        if (dice_no3 === 4) {
            green(td_p12p);
        } else {
            silver(td_p12p);
        }

        //Tretal
        let td_p1t = document.getElementById("td-p1t");
        if (dice_no.includes(3) || dice_no.includes(4) || dice_no.includes(5)) {
            green(td_p1t);
        } else {
            silver(td_p1t);
        }

        //Fyrtal
        let td_p1f = document.getElementById("td-p1f");
        if (dice_no.includes(4) || dice_no.includes(5)) {
            green(td_p1f);
        } else {
            silver(td_p1f);
        }

        //Small straight
        let dice_no4 = dice_no.filter(numb => (numb === 1) == true);
        dice_no5 = dice_no4.reduce((a, b) => a + b, 0);
        let td_p1ss = document.getElementById("td-p1ss");
        let player1ss = document.getElementById("player1ss");
        if ((dice_no5 === 5) && (dice_array.includes(1)) && (dice_array.includes(6) == false)) {
            player1ss.innerHTML = "15";
            green(td_p1ss);
            hide(player1ss, td_p1ss);
        } else {
            player1ss.innerHTML = null;
            silver(td_p1ss);
        }

        //Large straight
        let td_p1ls = document.getElementById("td-p1ls");
        let player1ls = document.getElementById("player1ls");
        if ((dice_no5 === 5) && (dice_array.includes(6)) && (dice_array.includes(1) == false)) {
            player1ls.innerHTML = "20";
            green(td_p1ls);
            hide(player1ls, td_p1ls);
        } else {
            player1ls.innerHTML = null;
            silver(td_p1ls);
        }

        //Kåk
        let td_p1fh = document.getElementById("td-p1fh")
        if (dice_no.includes(2) && dice_no.includes(3)) {
            let chance_sum = dice_array.reduce((a, b) => a + b, 0);
            p1fh.innerHTML = chance_sum;
            green(td_p1fh);
            hide(p1fh, td_p1fh);
        } else {
            //green(td_p1fh);
            p1fh.innerHTML = null;
            silver(td_p1fh);
        }

        //Chans
        let td_p1ch = document.getElementById("td-p1ch");
        let player1ch = document.getElementById("player1ch");
        if (throws <= 2) {
            let chance_sum = dice_array.reduce((a, b) => a + b, 0);
            player1ch.innerHTML = chance_sum;
            green(td_p1ch);
            hide(player1ch, td_p1ch);
        } else {
            player1ch.innerHTML = null;
            silver(td_p1ch);
        }

        //Yatzy
        let td_p1y = document.getElementById("td-p1y")
        let player1y = document.getElementById("player1y")
        if (dice_no.includes(5)) {
            player1y.innerHTML = 50;
            green(td_p1y);
            hide(player1y, td_p1y);
        } else {
            player1y.innerHTML = null;
            silver(td_p1y);
        } */
