// Deposite Buttos add 

document.getElementById('deposite').addEventListener('click', function(){
    const depositeBtn=document.getElementById('depo');
    const depositeValue=depositeBtn.value;

    // Deposite Amount show the card
    const depsitAmout=document.getElementById('deposite-amount')
    const newDepo=depsitAmout.innerText;
    const previousAmount=parseFloat(newDepo)+parseFloat (depositeValue);
    depsitAmout.innerText=previousAmount;

    // Balance Show the card
    const balance=document.getElementById('balance');
    const newBalance=balance.innerText
    const balanceTotal=parseFloat(newBalance)+parseFloat(depositeValue);
    balance.innerText=balanceTotal;

    // Clear all value
    depositeBtn.value="";
});

//Withdraw Button
document.getElementById('withdraw').addEventListener('click', function(){
    const withdrawAmount=document.getElementById('withdraw-amount')
    const newWithdrawAmount=withdrawAmount.value;
    
    // withdraw amount in Card display
    const depsitAmout=document.getElementById('total-withdraw')
    const newDepo=depsitAmout.innerText;
    const previousAmount=parseFloat(newDepo)+parseFloat(newWithdrawAmount);
    depsitAmout.innerText=previousAmount;
 
    // Total Amount 
    const balance=document.getElementById('balance');
    const newBalance=balance.innerText
    const balanceTotal=parseFloat(newBalance)-parseFloat(newWithdrawAmount);
    balance.innerText=balanceTotal;

    // Clear All Value
    withdrawAmount.value="";
});