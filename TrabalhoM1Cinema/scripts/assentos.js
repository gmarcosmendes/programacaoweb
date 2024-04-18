document.addEventListener('DOMContentLoaded', function() {
    const assentos = document.querySelectorAll('.cadeira');
    const botaoContinuar = document.getElementById('continuar');
    let totalAssentos = 0;
    let assentosSelecionados = []; // Array para armazenar os assentos selecionados

    // Adiciona evento de clique a cada assento
    assentos.forEach(function(assento) {
        assento.addEventListener('click', function() {
            assento.classList.toggle('selecionado');
            updateTotal();
        });
    });

    // Função para atualizar o total dos assentos
    function updateTotal() {
        totalAssentos = 0;
        assentosSelecionados = []; // Limpa o array de assentos selecionados
        assentos.forEach(function(assento) {
            if (assento.classList.contains('selecionado')) {
                totalAssentos += parseInt(assento.getAttribute('data-price'));
                assentosSelecionados.push(assento.textContent.trim()); // Adiciona o assento selecionado ao array
            }
        });
        document.getElementById('totalAssentos').textContent = 'Total dos assentos: R$' + totalAssentos.toFixed(2);
    }

    // Adiciona evento de clique ao botão "Continuar"
    botaoContinuar.addEventListener('click', function() {
        // Verifica se foram selecionados assentos
        if (totalAssentos > 0) {
            // Armazena o total dos assentos no localStorage
            localStorage.setItem('totalAssentos', totalAssentos.toFixed(2));
            // Armazena os assentos selecionados no localStorage
            localStorage.setItem('assentosSelecionados', JSON.stringify(assentosSelecionados));
            // Redireciona para a próxima página
            window.location.href = './aperitivos.html';
        } else {
            // Caso nenhum assento tenha sido selecionado, mostra um alerta
            alert('Por favor, selecione pelo menos um assento antes de continuar.');
        }
    });
});
