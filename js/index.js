


// first child

document.getElementById('first-input-btn').addEventListener('click', function(){
    const moneyFromNav = getTextFieldValueById('money-from-nav');
    const firstMoneyBoxValue = getTextFieldValueById('first-money-box');
    const firstInputValue = getInputFieldValueById('first-input-field');

    // violation check
    if(!firstInputValue || firstInputValue <= 0){
        alert('invalid donation amount')
        return;
    }
    if(firstInputValue> moneyFromNav){
        alert('invalid donation amount')
        return
    }
   
   const newFirstMoneyBoxValue = firstMoneyBoxValue + firstInputValue;
   const newMoneyFromDiv = moneyFromNav - firstInputValue;

   document.getElementById('money-from-nav').innerText = newMoneyFromDiv;
   document.getElementById('first-money-box').innerText = newFirstMoneyBoxValue;
});

// second child
document.getElementById('second-btn').addEventListener('click', function(){
    const moneyFromNav = getTextFieldValueById('money-from-nav');
    const secondMoneyBoxValue =getTextFieldValueById('second-money-box');
    const secondInputValue = getInputFieldValueById('second-input-field');
    
    // violation check
    if(!secondInputValue || secondInputValue <= 0){
        alert('invalid donation amount');
        return;
    }
    if(secondInputValue>moneyFromNav){
        alert('invalid donation amount');
        return;
    }

    const newSecondMoneyBoxValue = secondMoneyBoxValue + secondInputValue;
    const latestMoneyFromDiv = moneyFromNav - secondInputValue;

    document.getElementById('money-from-nav').innerText = latestMoneyFromDiv;
    document.getElementById('second-money-box').innerText = newSecondMoneyBoxValue;
})

// third child

document.getElementById('third-btn').addEventListener('click', function(){
    const moneyFromNav = getTextFieldValueById('money-from-nav');
    const thirdMoneyBoxValue = getTextFieldValueById('third-money-box');
    const thirdInputValue = getInputFieldValueById('third-input-field');

     // violation check
     if(!thirdInputValue || thirdInputValue <= 0){
        alert('invalid donation amount');
        return;
    }
    if(thirdInputValue > moneyFromNav){
        alert('invalid donation amount');
        return;
    }


    const newThirdMoneyBoxValue = thirdMoneyBoxValue + thirdInputValue;
    const updatedMoneyFromDiv = moneyFromNav - thirdInputValue;

    document.getElementById('money-from-nav').innerText = updatedMoneyFromDiv;
    document.getElementById('third-money-box').innerText = newThirdMoneyBoxValue;
})
