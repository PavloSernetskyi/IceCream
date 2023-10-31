"use strict";
window.onload = function () {
    //grab button estimate total cost from html using id.
    const btn = document.getElementById("calculate");
    //run specific functions when i click button.
    btn.onclick = TotalCost;



    const box1 = document.getElementById("cone");
    box1.onclick = TotalCost();

};

function hideOrShow() {
    //input for radio buttons.
    
    //output field with info that need to be hidden or shown.
    let hide = document.getElementById('hidden');
    //checkbox.
    let coneBtn = document.getElementById('cone');

    let cupBtn = document.getElementById('cup');

    //put some logic.

    if (cupBtn.checked) {
        hide.style.display = "none";
    }
    else {
        hide.style.display = "block";
    }
}


function TotalCost() {
    //get input from user.
    let oneScoop = 2.25;
    let numberOfScoops = document.getElementById('num-scoops').value;

    let costOfOrder = 0;



    //calculate
    costOfOrder = oneScoop * numberOfScoops;


    //display output.
}