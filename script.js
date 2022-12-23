let buttons = document.querySelectorAll('button');
let currentOperand = document.querySelector('[data-current-operand]');
let previousoperand = document.querySelector('[data-previous-operand]')

let buttonsok = Array.from(buttons);

buttonsok.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case "AC":
                currentOperand.innerText = '';
                break;
            case 'DEL':
                if (currentOperand.innerText.length > 0) {
                    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
                }
                break;
            case '=':
                if (currentOperand.innerText.length > 0) {
                    try {
                        currentOperand.innerText = eval(currentOperand.innerText);
                    } catch {
                        currentOperand.innerText = 'Error';
                    }
                } else {
                    null;
                }
                break;
            default:
                currentOperand.innerText += e.target.innerText;
            
        }
    })
})