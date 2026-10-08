// ---------- PART 1: helper functions ----------

function getBalance() {
    return Number(document.getElementById("balance").innerText);
}

function printBalance(num) {
    document.getElementById("balance").innerText = num;
}

function getAmount() {
    return Number(document.getElementById("amount").value);
}

function showMessage(text) {
    document.getElementById("message").innerText = text;
}

function clearAmount() {
    document.getElementById("amount").value = "";
}


// ---------- PART 4: is the typed amount usable? ----------

function isAmountValid() {
    var typed = document.getElementById("amount").value;

    if (typed == "") {
        showMessage("Please enter an amount.");
        return false;
    } else if (Number(typed) <= 0) {
        showMessage("Amount must be more than zero.");
        return false;
    }

    return true;
}


// ---------- PART 2: Credit ----------

document.getElementById("credit-btn").addEventListener("click", function () {

    if (isAmountValid() == false) {
        return;
    }

    var amount = getAmount();
    var newBalance = getBalance() + amount;

    printBalance(newBalance);
    showMessage("Credited " + amount + " successfully.");
    clearAmount();

});


// ---------- PART 3 + PART 5: Debit ----------

document.getElementById("debit-btn").addEventListener("click", function () {

    if (isAmountValid() == false) {
        return;
    }

    var amount = getAmount();

    // PART 5 — you cannot spend money you do not have
    if (amount > getBalance()) {
        showMessage("Not enough balance.");
        return;
    }

    var newBalance = getBalance() - amount;

    printBalance(newBalance);
    showMessage("Debited " + amount + " successfully.");
    clearAmount();

});