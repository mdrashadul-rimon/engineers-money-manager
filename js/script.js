function validation() {
    let validationError = document.getElementById('validate');
    let incomeInput = getIncomeInput();
    let foodInput = getFoodInput();
    let rentInput = getRentInput();
    let clothesInput = getClothesInput();
    let balance = getFromBalance();

    if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput)) {
        validationError.textContent = "Please enter a valid number not string";
        validationError.style.color = "red";
    } else {
        validationError.textContent = "STOP! Should not be negative, Stay positive always.";
        validationError.style.color = "blue";
    }
}

//income input
function getIncomeInput() {
    let incomeInput = document.getElementById('income-input');
    let income = parseFloat(incomeInput.value);
    return income;
}
//food input
function getFoodInput() {
    let foodInput = document.getElementById('food-input');
    let food = parseFloat(foodInput.value);
    return food;
}
function getRentInput() {
    let rentInput = document.getElementById('rent-input');
    let rent = parseFloat(rentInput.value);
    return rent;
}
function getClothesInput() {
    let clothesInput = document.getElementById('clothes-input');
    let clothes = parseFloat(clothesInput.value);
    return clothes;
}
//balance to show
function postToBalance(num) {
    document.getElementById('balance').innerText = num;
    // let temp = num;
    // let a = document.getElementById('balance');
    // a.innerText = temp;
    // let balance = parseFloat(a.innerText);
    // console.log(balance);
    // return balance;
}
function getFromBalance() {
    let balance = document.getElementById('balance').innerText;
    return balance;
}
//output and calling functions
document.getElementById('calculate-btn').addEventListener('click', function () {

    let income = getIncomeInput(); //call income input function
    let food = getFoodInput();
    let rent = getRentInput();
    let clothes = getClothesInput();

    if ((income < 0) || (food < 0) || (rent) < 0 || (clothes < 0)) {
        validation();
    }
    //expenses check validation
    else {
        // adding all the values of expenses
        let totalExpenses = food + rent + clothes;
        if (income >= totalExpenses) {
            document.getElementById('total-expenses').innerText = totalExpenses;
            let showBalance = income - totalExpenses;
            balance = showBalance;
            postToBalance(balance); //call balance function with sending arguments to parameter to show output
        }
        else {
            validation();
        }
    }
});

//Savings Amount part
document.getElementById('saving-btn').addEventListener('click', function () {

    let income = getIncomeInput();//call income input function
    let balance = getFromBalance(); //call balance function

    let savingInput = document.getElementById('saving-input');
    let savings = parseFloat(savingInput.value);

    // calculation of savings
    let savingsAmount = (income / 100) * savings;
    //validation checking and calling function of validation
    if ((income > savings) && (savings < balance) && (savingsAmount < balance)) {
        document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);

        let remainingBalance = balance - savingsAmount;
        // console.log(remainingBalance);
        document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
    }
    else {
        validation();
    }
});
