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

var numeroCartao = document.getElementById('numeroCartao');
var nomeTitular = document.getElementById("nomeTitular");
var Validade = document.getElementById("Validade");
var CVV = document.getElementById("CVV");

function chamarFuncoes(numeroCartao,nomeTitular,CVV,Validade){
    verificarCartao(numeroCartao,nomeTitular,CVV);
    validaData(Validade);
};
function verificarCartao(numeroCartao,nomeTitular,CVV){
    
    if(numeroCartao.length !== 16){
        alert('Número do cartao Inválido');
    };
    if(nomeTitular.length === ''){
        alert('Nome inválido')
    };
    if(CVV < 2 || CVV > 4){
        alert('Número inválido')
    }
}

function validaData (validade) {
    // Verifica se a entrada é uma string
    if (typeof validade !== 'string') {
      return false
    }
  
    // Verifica formado da data
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(validade)) {
      return false
    }
  
    // Divide a data para o objeto "data"
    const partesData = validade.split('/')
    const data = { 
      dia: partesData[0], 
      mes: partesData[1], 
      ano: partesData[2] 
    }
    
    const dia = parseInt(data.dia)
    const mes = parseInt(data.mes)
    const ano = parseInt(data.ano)
    
    const diasNoMes = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

    if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0) {
      diasNoMes[2] = 29
    }
    if (mes < 1 || mes > 12 || dia < 1) {
      return false
    }
    else if (dia > diasNoMes[mes]) {
      return false
    }
    return true
  }