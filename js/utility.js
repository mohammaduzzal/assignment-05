// getInputFieldValueById function

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber
    
}

// getTextFieldValueById function

 function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber
 }

//  Hide and see function

function getSectionByDivId(id){
    // hiding div
    document.getElementById('three-card-div').classList.add('hidden');
    document.getElementById('history-div').classList.add('hidden');

    // showing div
    document.getElementById(id).classList.remove('hidden')
}