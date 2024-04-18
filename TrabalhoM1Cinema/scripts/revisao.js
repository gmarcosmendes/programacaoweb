document.addEventListener('DOMContentLoaded', function() {
    // Recupera o filme selecionado do localStorage
    const selectedMovie = localStorage.getItem('selectedMovie');
    // Exibe o filme selecionado na revisão da compra
    document.getElementById('selectedMovie').textContent = selectedMovie;
});

document.addEventListener('DOMContentLoaded', function() {
    // Recupera o filme selecionado do localStorage
    const selectedSeats = localStorage.getItem('totalAssentos');
    // Exibe o filme selecionado na revisão da compra
    document.getElementById('selectedSeats').textContent = "R$ " + selectedSeats;
});

document.addEventListener('DOMContentLoaded', function() {
    // Recupera o filme selecionado do localStorage
    const selectedSnacks = localStorage.getItem('totalAperitivos');
    // Exibe o filme selecionado na revisão da compra
    document.getElementById('selectedSnacks').textContent = "R$ " + selectedSnacks;
});

document.addEventListener('DOMContentLoaded', function() {
    // Recupera o filme selecionado do localStorage
    const selectedSeats = parseFloat(localStorage.getItem('totalAssentos')) || 0;
    const selectedSnacks = parseFloat(localStorage.getItem('totalAperitivos')) || 0;
    const totalCompra = selectedSeats + selectedSnacks;
    // Exibe o filme selecionado na revisão da compra
    document.getElementById('totalCompra').textContent = "R$ " + totalCompra.toFixed(2);
});