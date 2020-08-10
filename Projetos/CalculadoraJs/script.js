let tela = document.getElementById('opAtual');
let resulAnt = document.getElementById('resulAnt');

let n1 = n2 = operacao = null;

function limpa(){
  tela.innerHTML = '';
  n1 = n2 = operacao = null;
};

function atualizaNumero (atual, novodigito){
  if (atual === null) return novodigito;
  let novo = atual * 10 + novodigito; // multiplica o atual por 10 faz com acrescente uma casa desicmal 0 no final
  if(novo > 99999999){
    return atual
  }
 return novo;
}


function atualizaTela(digito){
  if (operacao === null){ // primeira operação
    n1 = atualizaNumero (n1,digito);
    tela.innerHTML = n1;
  }else{
    n2 = atualizaNumero (n2,digito);
    tela.innerHTML = n2;
    
  }
}


function operator(op){
  if(operacao !== null){
    calcula();
  }
  operacao = op;
  if(n2 !== null){
    calcula();
  }

}

function calcula() {
  let result;
  switch (operacao) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }
  tela.innerHTML = result;
  sessionStorage.setItem('resultado anterior',result);
  resulAnt.innerHTML = `resultado anterior : ${sessionStorage.getItem('resultado anterior')}`;
  n1 = result;
  n2 = operacao = null;
};