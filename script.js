const button = document.querySelector("#btn");
const buttonTip = document.querySelector("#addTip");
button.addEventListener("click", calculateAmount);
buttonTip.addEventListener("click", showTip);

function calculateAmount (e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;
    
    if (bill === "" || people === "" || people < 1) {
        alert("Error!");
    }

    let amountPerPerson = bill/people;
    let tipPerPerson = (bill*tip)/people;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;
}

function showTip (e) {
    e.preventDefault();
    tip.style.display = "block";
}