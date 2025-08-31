// alert("java check")
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === 'AC'){
            currentInput = '' ;
            display.textContent = '0';
        } else if (value === '='){
            try{
                const expression = currentInput.replace(/%/g, '/100');
                const result = eval(expression);
                display.textContent = result;
                currentInput = result.toString();

            } catch{
                display.textContent = 'ERROR ';
                currentInput = '';

            }
        }else{
            if (button.querySelector('i'))return;
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});