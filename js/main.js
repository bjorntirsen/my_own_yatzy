document.addEventListener("DOMContentLoaded", function(event) {

    //Disable roll button at launch
    document.getElementById("rollButton").disabled = true;

    //Initiate a communication with the user(/s)
    let new_user = new Communication();

    //The dices
    /* //Creates a set of new dice
    let current_set = new Dice_set();
    //Antal kast funktion

    //The game
    let current_game = new Game(); */
    
    document.getElementById("comm-btn").addEventListener("click", function(e) {        
        new_user.commsLogic();                
    })
    //Funktioner som triggas när man trycker på knappen:
    document.getElementById("rollButton").
    addEventListener("click", function(e) {

            //Three methods that will do the work
            current_set.whichToHold();
            current_set.rollDiceSet();
            current_set.printToPage();

            //Skapar en array med checkboxarna
            let check_arr = Array.from(document.getElementsByClassName('checkbox'));

            //Skapar en array med de ocheckade boxarnas index
            unchecked_arr = check_arr.filter(box => box.checked == false);
            let unchecked_arr2 = unchecked_arr.map(a => a.value);
            let tmp = 0;

            //Checking the checkboxes.
            // means no checked dices
            //Converting array of strings to numbers
            let unchecked_arr3 = unchecked_arr2.map(function(v) {
                return parseInt(v, 10);
            });
            for (i = 0; i < unchecked_arr2.length; i++) {

                //Change value of uncheced dice in dice set
                let tmp2 = unchecked_arr3[i] - 1;
                current_set.dice[tmp2].value = current_set.dice[tmp2].dice.new_Value(); /* randOneSix(); */
            }
            for (let i = 1; i <= 5; i++) {
                tmp = current_set.dice[i - 1].value;
                document.getElementById("dice" + i).src =
                    "images/" + tmp + ".png";
            }
            //Antal kast minskas efter varje kast 
            //throws--; <- växla till denna för verklig funktion
            throws = 2; //detta är för att testa kod
            throwsField.innerHTML = throws;

            //Inaktiverar slag knappen när kast är slut
            if (throws == 0) {
                document.getElementById("rollButton").disabled = true;
            }

            //Funktion för att gömma checkboxarna+text innan 1:a slag
            if (throws <= 2) {
                let cb = document.getElementsByClassName("checkbox");
                for (let cbs of cb) {
                    cbs.style.display = "flex";
                }
                document.getElementById("explaination").style.display = "flex";
            }
        })
        //Chatt script
    let list = document.getElementById("ul_list");
    let btnSend = document.getElementById("btnSend");

   /*  btnSend.addEventListener("click", function(e) {
        let divRow = document.createElement("divChat");
        list.appendChild(divRow);

        let listRow = document.createElement("liChat");
        divRow.appendChild(listRow);

        let spanRow = document.createElement("spanChat")
        divRow.appendChild(spanRow);
        spanRow.innerHTML = "TA BORT";

        let input = document.getElementById("inputText");
        listRow.innerHTML = input.value;

        input.value = "";
        input.focus();
    });

    list.addEventListener("click", function(event) {
        if (event.target.tagName == "SPANCHAT") {
            event.target.parentNode.remove();
        }
    }) */
});