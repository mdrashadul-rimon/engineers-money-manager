function validation() {
    let validationError = document.getElementById('validate');
    if (isNaN(document.getElementById('income-input').value)) {
        validationError.textContent = "Please enter a valid number";
        validationError.style.color = "red";
    }
    else {
        validationError.textContent = "Do not give negative number";
        validationError.style.color = "blue";
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    let incomeInput = document.getElementById('income-input');
    let foodInput = document.getElementById('food-input');
    let rentInput = document.getElementById('rent-input');
    let clothesInput = document.getElementById('clothes-input');

    let balance = document.getElementById('balance');

    let income = parseFloat(incomeInput.value);
    let totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);

    //expenses
    if (income >= totalExpenses) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        let showBalance = income - totalExpenses;
        balance.innerText = showBalance;
    }

    // else {
    //     validation();
    // }
});

document.getElementById('saving-btn').addEventListener('click', function () {
    let incomeInput = document.getElementById('income-input');
    let income = parseFloat(incomeInput.value);

    let savingInput = document.getElementById('saving-input');
    let savings = parseFloat(savingInput.value);
    if (income > savings) {
        let savingsAmount = (income/100) * savings;
        document.getElementById('savings-amount').innerText = savingsAmount;
        
        let balance = parseFloat(document.getElementById('balance').innerText);
        
        let remainingBalance = balance - savingsAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        
    }
});
