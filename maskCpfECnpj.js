function validarCpf() {
  // APLICAÇÃO DA MASCARA ↓
  let cpf = document.getElementById('cpf');
  cpf.value = cpf.value.replace(/\D/g, '');
  cpf.value = cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  let test = cpf.value.replaceAll('.', '').replaceAll('-', '');

  // VALIDAÇÃO DO CPF ↓
  count = 10;
  soma = 0;
  // Verifica se o cpf é composto somente por caracters iguais
    if(/^(.)\1+$/.test(test)){   
      cpf.setCustomValidity("O CPF informado é inválido");          
      exibirMensagemErro(cpf.validationMessage);
      return;
    }
    removerMensagemErro();
    
  // Validação dos digitos verificadores
  for (i = 0; i < test.length; i++) {
    soma += test[i] * count;
    if (i == 8) {
      if (
        Math.abs((soma % 11) - 11) != test[9] ||
        (Math.abs((soma % 11) - 11) >= 10 && test[10] != 0)
      ) {
          cpf.setCustomValidity("O CPF informado é inválido");
          exibirMensagemErro(cpf.validationMessage);
          return;
      }
      removerMensagemErro();
    }
    count -= 1;
  }
  count = 11;
  soma = 0;
  for (i = 0; i < test.length; i++) {
    soma += test[i] * count;
    if (i == 9) {
      if (Math.abs((soma % 11) - 11) != test[10]){
        if(Math.abs((soma % 11) - 11) >= 10 && test[10] != 0){
          console.log(soma % 11);
          console.log(test[10] - 11 )
          cpf.setCustomValidity("O CPF informado é inválido");
          exibirMensagemErro(cpf.validationMessage);
          return 0;
        }
      }
    }
    removerMensagemErro();
    count -= 1;
  }
}

function exibirMensagemErro(mensagem) {
  const mensagemErro = document.getElementById('validcpf');
  if (!mensagemErro) {
    const divErro = document.createElement('div');
    divErro.id = 'validcpf';
    divErro.style.color = 'red';
    divErro.textContent = mensagem;
    document.body.appendChild(divErro);
  }
}

function removerMensagemErro() {
  const mensagemErro = document.getElementById('validcpf');
  if (mensagemErro) {
    mensagemErro.remove();
  }
}
