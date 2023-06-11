document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)){
        alert('Please provide a number');
        return;
    }
    
    

   const totalWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = totalWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

     
    

    

    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Your amount is low');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    totalWithdrawElement.innerText = currentWithdrawTotal;


     
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    totalBalanceElement.innerText = currentBalanceTotal;



    
})
