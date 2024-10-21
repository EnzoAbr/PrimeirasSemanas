//Variáveis para armazenar a expressão e o resultado
let currentInput = '';
let display = document.querySelector('Input[type="text"]');
//Função para atualizar o display
function updateDisplay(value) {
    display.value = value;
}
// Adiciona eventos de clique para todos os botões numéricos e operadores
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        let buttonValue = this.innerHTML;
        // Se for botão "Igual", calculará o resultado
        if (buttonValue === '=') {
            try {
                currentInput = eval(currentInput); //Calcula a expressão
                updateDisplay(currentInput); //Atualiza o display

            } catch (e) {
                updateDisplay('erro'); //exibe erro em caso de cáculo inválido

            }
        } // Atribui ao botão '+/-' a função de trocar o sinal
        else if (buttonValue === '+/-') {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateDisplay(currentInput);
        }
        // Atribui ao botão '%' a função de mostrar a porsentagem do valor
        else if (buttonValue === '%') {
            currentInput + (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);

        }

        //se for o botão "C" limpará o display
        else if (buttonValue === 'C') {
            currentInput = '';
            updateDisplay(currentInput);
        }
        //Se for botões
        else {
            if (buttonValue === 'x') {
                buttonValue = '*'; // Substitui "x" por "*"
            } else if (buttonValue === ',') {
                buttonValue = '.'; // Substitui "," por "."
            }
            currentInput += buttonValue;
            updateDisplay(currentInput);

        }

    })
})
