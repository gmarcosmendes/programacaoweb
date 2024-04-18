document.addEventListener('DOMContentLoaded', function() {
    const contadores = document.querySelectorAll('.contador');
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');

    function incrementCounter(index) {
        let count = parseInt(contadores[index].textContent);
        contadores[index].textContent = count + 1;
    }

    function decrementCounter(index) {
        let count = parseInt(contadores[index].textContent);
        if (count > 0) { // Garante que o contador não seja menor que zero
            contadores[index].textContent = count - 1;
        }
    }

    incrementButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            incrementCounter(index);
        });
    });

    decrementButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            decrementCounter(index);
        });
    });
});

let aperitivos = [10, 5, 4, 3, 13, 15]; // Array com os preços dos aperitivos e combos
let quantidades = [0, 0, 0, 0, 0, 0]; // Array para armazenar as quantidades selecionadas
let totalAperitivos = 0; // Variável para armazenar o total dos aperitivos

// Função para incrementar a quantidade de um aperitivo
function incrementCounter(index) {
    quantidades[index]++;
    updateTotal();
}

// Função para decrementar a quantidade de um aperitivo
function decrementCounter(index) {
    if (quantidades[index] > 0) {
        quantidades[index]--;
        updateTotal();
    }
}

// Função para atualizar o total dos aperitivos
function updateTotal() {
    totalAperitivos = 0;
    for (let i = 0; i < aperitivos.length; i++) {
        totalAperitivos += aperitivos[i] * quantidades[i];
    }
    document.getElementById('totalAperitivo').textContent = 'Total dos aperitivos: R$' + totalAperitivos.toFixed(2);
}

const botaoContinuar = document.querySelector('.fileira .button');

    // Adiciona evento de clique ao botão "Continuar"
    botaoContinuar.addEventListener('click', function() {
        // Armazena o total dos aperitivos no localStorage
        localStorage.setItem('totalAperitivos', totalAperitivos.toFixed(2));
        // Redireciona para a página de pagamento
        window.location.href = './pagamento.html';
    });