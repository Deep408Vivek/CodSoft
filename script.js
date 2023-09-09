let displayValue = '';
function appendToResult(value){
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function calculateResult(){
    var result = document.getElementById('result').value;
    var calculateResult = eval(result);
    document.getElementById('result').value = calculateResult;
    displayValue = calculateResult;
}

function clearResult(){
    document.getElementById('result').value = "";
    displayValue = "";
}

function deleteLast(){
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
    displayValue = result.slice(0, -1);
}