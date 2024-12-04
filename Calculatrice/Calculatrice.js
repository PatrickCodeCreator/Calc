function validateInput(value) {
    return !isNaN(value) && value.trim() !== '';
}

function calculate(operation) {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    if (!validateInput(input1) || !validateInput(input2)) {
        document.getElementById('result').textContent = "Erreur : Veuillez entrer des nombres valides.";
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').textContent = "Erreur : Division par zéro.";
                return;
            } else {
                result = num1 / num2;
            }
            break;
    }

    document.getElementById('result').textContent = `Résultat : ${result}`;
}