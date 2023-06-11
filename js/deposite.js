//step-1
document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    //console.log(typeof newDepositeAmount);
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    

   const totalDepositeElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = totalDepositeElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
     
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    totalDepositeElement.innerText = currentDepositeTotal;



    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
     
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    totalBalanceElement.innerText = currentBalanceTotal;



    depositeField.value = '';
})


