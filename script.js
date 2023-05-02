function add() {
    let input1 = parseInt(document.getElementById("fnum").value);
    let input2 = parseInt(document.getElementById("snum").value);
    let result = input1 + input2;
    document.getElementById("result").value = result;
    document.getElementById('label').style.display = "block"; 
    document.getElementById('result').style.display = "block"; 
}

function subtract() {
    let input1 = parseInt(document.getElementById("fnum").value);
    let input2 = parseInt(document.getElementById("snum").value);
    let result = input1 - input2;
    document.getElementById("result").value = result;
    document.getElementById('label').style.display = "block"; 
    document.getElementById('result').style.display = "block"; 
}

function clearFields() {
    document.getElementById("fnum").value = "";
    document.getElementById("snum").value = "";
    document.getElementById("result").value = "";
    document.getElementById('label').style.display = "none"; 
    document.getElementById('result').style.display = "none"; 
}