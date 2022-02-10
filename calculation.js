// handle deposite button
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-amount'); 
    const updatedAmount = depositInput.value;     

    const depositCurrent = document.getElementById('deposit-total'); 
    const currentDepositAmount = depositCurrent.innerText; 
    const newDepositAmount = parseFloat(currentDepositAmount) + parseFloat(updatedAmount); 

    depositCurrent.innerText = newDepositAmount; 
    document.getElementById('deposit-amount').value = '';

    // Update accunt balance
    const balanceTotal = document.getElementById('balance-total'); 
    const balanceTotalText = parseFloat(balanceTotal.innerText);  
    const newBalanceTotal = balanceTotalText + newDepositAmount; 
    balanceTotal.innerText = newBalanceTotal; 

    const message = document.createElement('h1'); 
    const takeId = document.getElementById('tr-msg'); 
    message.innerText = parseFloat(updatedAmount)+' Dollar Deposit successfull and your Main balance is '+newBalanceTotal; 
    takeId.appendChild(message); 

}); 

// Withdraw balance. 
const withdrayBalance = document.getElementById('withdraw-button').addEventListener('click', function(){
    //console.log('button is clicked'); 
    const textField = document.getElementById('withdraw-amount'); 
    const getValueFromTextField = parseFloat(textField.value);
    
    const withdrawField = document.getElementById('withdraw-text'); 
    
    const getWithdrawValue = parseFloat(withdrawField.innerText); 
    const totalWithdraw = getValueFromTextField + getWithdrawValue; 
    console.log(totalWithdraw);
    withdrawField.innerText = totalWithdraw; 
    document.getElementById('withdraw-amount').value = ''; 


    const mainBalanceText = document.getElementById('balance-total');
    const mainBalanceAmount = parseFloat(mainBalanceText.innerText); 
    const totalBalance = mainBalanceAmount - totalWithdraw; 
    mainBalanceText.innerText = totalBalance; 


    const withDraw = document.createElement('h1'); 
    const takeIdForWithdraw = document.getElementById('tr-msg'); 
    withDraw.innerText = getValueFromTextField+' Dollar Withdraw successfull and your Main balance is '+totalBalance;
    takeIdForWithdraw.appendChild(withDraw); 
})





















































































































// // handle deposite button
// document.getElementById('deposit-button').addEventListener('click', function(){
//     const depositInput = document.getElementById('deposit-amount').value;     

//     const depositCurrent = document.getElementById('deposit-total'); 
//     depositCurrent.innerText = depositInput; 
//     //console.log(depositCurrent.innerText); 
//     console.log(depositCurrent.innerText);
//     document.getElementById('deposit-amount').value = ''; 
//     //depositInput = ''; 
// // {document.getElementById('deposit-amount').value = '';} it works but {depositInput = '';} it doesn't. Why???? 

 
// // depositCurrent.innerText = document.getElementById('deposit-amount').value; 
// })