// Função modal é para realizar o popUp (feito uma de cada pois não sabiamos replicar e apenas mudar o filme que aparecia)
const modal = document.querySelector('.modal-container')
const modal1 = document.querySelector('.modal-container1')
const modal2 = document.querySelector('.modal-container2')
const modal3 = document.querySelector('.modal-container3')
const modal4 = document.querySelector('.modal-container4')
const modal5 = document.querySelector('.modal-container5')
const modal6 = document.querySelector('.modal-container6')

function openModal(){
    modal.classList.add('active')
}
function closeModal(){
    modal.classList.remove('active')
}

function openModal1(){
    modal1.classList.add('active')
}
function closeModal1(){
    modal1.classList.remove('active')
}

function openModal2(){
    modal2.classList.add('active')
}
function closeModal2(){
    modal2.classList.remove('active')
}

function openModal3(){
    modal3.classList.add('active')
}
function closeModal3(){
    modal3.classList.remove('active')
}

function openModal4(){
    modal4.classList.add('active')
}
function closeModal4(){
    modal4.classList.remove('active')
}
function openModal5(){
    modal5.classList.add('active')
}
function closeModal5(){
    modal5.classList.remove('active')
}
function openModal6(){
    modal6.classList.add('active')
}
function closeModal6(){
    modal6.classList.remove('active')
}

document.addEventListener('DOMContentLoaded', function () {
    // Adiciona eventos de clique aos botões de compra
   // NAO PASSAR PROXIMA PAGINA   document.getElementById('btnCartao').addEventListener('click', confirmPurchase);
    document.getElementById('btnPix').addEventListener('click', confirmPurchase);
    document.getElementById('btnBoleto').addEventListener('click', confirmPurchase);
});

function confirmPurchase() {
    // Recupera o valor total dos assentos do armazenamento local
    const totalAssentos = parseFloat(localStorage.getItem('totalAssentos')) || 0;
    // Recupera o valor total dos aperitivos do armazenamento local
    const totalAperitivos = parseFloat(localStorage.getItem('totalAperitivos')) || 0;
    // Calcula o valor total da compra somando os valores dos assentos e aperitivos
    const valorTotal = totalAssentos + totalAperitivos;

    // Verifica se os valores foram carregados corretamente
    if (valorTotal > 0) {
        // Redirecionar para a página de revisão
        window.location.href = './review.html';
    } else {
        // Exibe uma mensagem de erro (opcional)
        console.error('Erro ao recuperar o valor total da compra.');
    }
}
