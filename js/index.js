document.getElementById('first-input-btn').addEventListener('click', function(){
    const moneyFromNav = getTextFieldValueById('money-from-nav');
    const firstMoneyBoxValue = getTextFieldValueById('first-money-box');
    const firstInputValue = getInputFieldValueById('first-input-field');
   
   const newFirstMoneyBoxValue = firstMoneyBoxValue + firstInputValue;
   const newMoneyFromDiv = moneyFromNav - firstInputValue;

   document.getElementById('money-from-nav').innerText = newMoneyFromDiv;
   document.getElementById('first-money-box').innerText = newFirstMoneyBoxValue;
})