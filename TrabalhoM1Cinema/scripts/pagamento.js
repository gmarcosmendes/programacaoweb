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

function verificarCartao() {
  // Recupera os valores dos campos dentro da função
  var numeroCartao = document.getElementById('numeroCartao').value;
  var nomeTitular = document.getElementById('nomeTitular').value;
  var CVV = document.getElementById('CVV').value;
  var Validade = document.getElementById('Validade').value;

  // Verifique se todos os campos estão preenchidos
  if (!numeroCartao || !nomeTitular || !CVV || !Validade) {
      alert('Todos os campos devem ser preenchidos.');
      return;
  }

  // Remova espaços do número do cartão
  numeroCartao = numeroCartao.replace(/\s+/g, '');

  // Validação do número do cartão de crédito usando o algoritmo de Luhn
  function validarNumeroCartao(numero) {
      let soma = 0;
      let deveDobrar = false;

      // Percorre os dígitos de trás para frente
      for (let i = numero.length - 1; i >= 0; i--) {
          let digito = parseInt(numero.charAt(i), 10);
          if (deveDobrar) {
              digito *= 2;
              if (digito > 9) {
                  digito -= 9;
              }
          }
          soma += digito;
          deveDobrar = !deveDobrar;
      }

      // O número do cartão é válido se a soma for divisível por 10
      return soma % 10 === 0;
  }

  // Verifique se o número do cartão é válido
  if (!validarNumeroCartao(numeroCartao)) {
      alert('Número do cartão inválido.');
      return;
  }

  // Verifique nome do titular
  if (nomeTitular.trim() === '') {
      alert('Nome do titular inválido.');
      return;
  }

  // Verifique CVV
  if (CVV.length !== 3 || isNaN(CVV)) {
      alert('CVV inválido.');
      return;
  }

  // Verifique a data de validade
  if (!validaData(Validade)) {
      alert('Data de validade inválida.');
      return;
  }

  // Se chegar aqui, todos os dados estão válidos
  alert('Cartão válido!');
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