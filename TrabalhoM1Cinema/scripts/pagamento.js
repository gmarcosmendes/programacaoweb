document.addEventListener('DOMContentLoaded', function () {
    // Recupera o valor total dos assentos do armazenamento local
    const totalAssentos = parseFloat(localStorage.getItem('totalAssentos')) || 0;
    // Recupera o valor total dos aperitivos do armazenamento local
    const totalAperitivos = parseFloat(localStorage.getItem('totalAperitivos')) || 0;
    // Calcula o valor total da compra somando os valores dos assentos e aperitivos
    const valorTotal = totalAssentos + totalAperitivos;
    // Exibe o valor total da compra na página
    document.getElementById('valorTotal').textContent = 'R$ ' + valorTotal.toFixed(2);
});