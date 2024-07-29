
function appendNumber(number) {
    let display = document.getElementById('display');
    display.value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.value;
    try {
        display.value = evaluateExpression(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

function evaluateExpression(expression) {
    // Eliminar espacios y reemplazar caracteres no permitidos
    expression = expression.replace(/[^0-9+\-*/().]/g, '');

    // Usar una expresión regular para comprobar si la expresión es válida
    let regex = /^[0-9+\-*/().]+$/;
    if (!regex.test(expression)) {
        throw new Error('Invalid characters');
    }

    // Evaluar la expresión usando la clase Function de forma segura
    return new Function('return ' + expression)();
}
