"use strict";
window.onload = function () {
    //grab button estimate total cost from html using id.
    const btn = document.getElementById("calculate");
    //run specific functions when i click button.
    btn.onclick = TotalCost;
};

function TotalCost() {
    //get input from user.
    let oneScoop = 2.25;
    let numberOfScoops = document.getElementById('num-scoops').value;

    //input for radio buttons.
    let coneBtn = document.getElementById('cone').checked;
    let cupBtn = document.getElementById('cup').checked;

    //put some logic.
    let costOfOrder = 0;
    if (cupBtn.checked) {
        cupBtn.style.display = "block";
    }
    else {
        cupBtn.style.display = "none";
    }



    //calculate
    costOfOrder = oneScoop * numberOfScoops;


    //display output.
}