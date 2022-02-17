function validation() {
    let validationError = document.getElementById('validate');
    let incomeInput = getIncomeInput();
    if (isNaN(incomeInput)) {
        validationError.textContent = "Please enter a valid number";
        validationError.style.color = "red";
    } else if (incomeInput < 0) {
        validationError.textContent = "Do not give negative number";
        validationError.style.color = "blue";
    }
}
//income input
function getIncomeInput() {
    let incomeInput = document.getElementById('income-input');
    let income = parseFloat(incomeInput.value);
    return income;
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

    //getting the inputs from fields
    let foodInput = document.getElementById('food-input');
    let rentInput = document.getElementById('rent-input');
    let clothesInput = document.getElementById('clothes-input');

    // adding all the values of expenses
    let totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);

    //expenses check validation
    if (income >= totalExpenses) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        let showBalance = income - totalExpenses;
        balance = showBalance;
        postToBalance(balance); //call balance function with sending arguments to parameter to show output
    }
    else {
        validation();
    }
});

document.getElementById('saving-btn').addEventListener('click', function () {

    let income = getIncomeInput();//call income input function
    let balance = getFromBalance();

    let savingInput = document.getElementById('saving-input');
    let savings = parseFloat(savingInput.value);
    if (income > savings) {
        let savingsAmount = (income / 100) * savings;
        document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
        
        let remainingBalance = balance - savingsAmount;
        // console.log(remainingBalance);
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
});
