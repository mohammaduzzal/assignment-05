


// first child

document.getElementById('first-input-btn').addEventListener('click', function(){
    const moneyFromNav = getTextFieldValueById('money-from-nav');
    const firstMoneyBoxValue = getTextFieldValueById('first-money-box');
    const firstInputValue = getInputFieldValueById('first-input-field');

    const firstTagH = document.getElementById('first-h-tag').innerText;

    // violation check
    if(!firstInputValue || firstInputValue <= 0){
        alert('invalid donation amount')
        return;
    }
    if(firstInputValue> moneyFromNav){
        alert('Insufficient balance')
        return
    }
   
   const newFirstMoneyBoxValue = firstMoneyBoxValue + firstInputValue;
   const newMoneyFromDiv = moneyFromNav - firstInputValue;

   document.getElementById('money-from-nav').innerText = newMoneyFromDiv;
   document.getElementById('first-money-box').innerText = newFirstMoneyBoxValue;


//    call success mgs function
showSuccessMessage();

// history added
const div = document.createElement('div');
div.classList = "bg-white p-3 rounded-md border border-gray-300";
div.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500"><span class="text-green-500">${firstInputValue}</span> tk. is Donated for ${firstTagH}</p>
    
`;

   document.getElementById('div-container').appendChild(div)

});

// second child
document.getElementById('second-btn').addEventListener('click', function(){
    const moneyFromNav = getTextFieldValueById('money-from-nav');
    const secondMoneyBoxValue =getTextFieldValueById('second-money-box');
    const secondInputValue = getInputFieldValueById('second-input-field');

    const secondTagH = document.getElementById('second-h-tag').innerText;
    
    // violation check
    if(!secondInputValue || secondInputValue <= 0){
        alert('invalid donation amount');
        return;
    }
    if(secondInputValue>moneyFromNav){
        alert('Insufficient balance');
        return;
    }

    const newSecondMoneyBoxValue = secondMoneyBoxValue + secondInputValue;
    const latestMoneyFromDiv = moneyFromNav - secondInputValue;

    document.getElementById('money-from-nav').innerText = latestMoneyFromDiv;
    document.getElementById('second-money-box').innerText = newSecondMoneyBoxValue;

    
//    call success mgs function
showSuccessMessage();

// history added
const div = document.createElement('div');
div.classList = "bg-white p-3 rounded-md border border-gray-300";
div.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500"><span class="text-green-500">${secondInputValue}</span> tk. is Donated for ${secondTagH}</p>
    
`;

   document.getElementById('div-container').appendChild(div)

})

// third child

document.getElementById('third-btn').addEventListener('click', function(){
    const moneyFromNav = getTextFieldValueById('money-from-nav');
    const thirdMoneyBoxValue = getTextFieldValueById('third-money-box');
    const thirdInputValue = getInputFieldValueById('third-input-field');
    const thirdTagH = document.getElementById('third-h-tag').innerText;

     // violation check
     if(!thirdInputValue || thirdInputValue <= 0){
        alert('invalid donation amount');
        return;
    }
    if(thirdInputValue > moneyFromNav){
        alert('Insufficient balance');
        return;
    }


    const newThirdMoneyBoxValue = thirdMoneyBoxValue + thirdInputValue;
    const updatedMoneyFromDiv = moneyFromNav - thirdInputValue;

    document.getElementById('money-from-nav').innerText = updatedMoneyFromDiv;
    document.getElementById('third-money-box').innerText = newThirdMoneyBoxValue;

    
//    call success mgs function
showSuccessMessage();

// history added
const div = document.createElement('div');
div.classList = "bg-white p-3 rounded-md border border-gray-300";
div.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500"><span class="text-green-500">${thirdInputValue}</span> tk. is Donated for ${thirdTagH}</p>
    
`;

   document.getElementById('div-container').appendChild(div)
})
