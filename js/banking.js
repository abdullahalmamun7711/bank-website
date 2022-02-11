// Handle diposit button

document.getElementById('diposit-button').addEventListener('click', function () {
    // get the amount diposited
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // update deposit total

    const depositTotal = document.getElementById('deposit-total');
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmount = parseFloat(priviousDepositText);
    const newDepositTotal = priviousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    // update acount balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field
    depositInput.value = '';



});


// Withdrow event handler

document.getElementById('withdrow-button').addEventListener('click', function () {
    const withDrowInput = document.getElementById('withdrow-amount');
    const withdrowAmountText = withDrowInput.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);
    // console.log(newWithdrowAmount);

    // set withdrow balanceTotal

    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrowText);
    const newWithdrowToal = previousWithdrawTotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowToal;

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdrow input

    withDrowInput.value = '';


});

