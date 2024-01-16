function validarCpf() {
  // APLICAÇÃO DA MASCARA ↓
  let cpf = document.getElementById('cpf');
  cpf.value = cpf.value.replace(/\D/g, '');
  cpf.value = cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  let test = cpf.value.replaceAll('.', '').replaceAll('-', '');

  // VALIDAÇÃO DO CPF ↓
  count = 10;
  soma = 0;
  for (i = 0; i < test.length; i++) {
    soma += test[i] * count;
    if (i == 8) {
      if (
        Math.abs((soma % 11) - 11) == test[9] ||
        (Math.abs((soma % 11) - 11) >= 10 && test[10] == 0)
      ) {
        console.log((soma % 11) - 11);
        console.log('cpf ok');
      } else {        
        cpf.setCustomValidity("o cpf informado é inválido");
        document.body.innerHTML +=" <div id='validcpf' style='color:red'>" + cpf.validationMessage + "</div>";
      }
    }
    count -= 1;
  }
  count = 11;
  for (i = 0; i < test.length; i++) {
    soma += test[i] * count;
    if (i == 9) {
      if (
        Math.abs((soma % 11) - 11) == test[10] ||
        (Math.abs((soma % 11) - 11) >= 10 && test[10] == 0)
      ) {
        document.getElementById("validcpf").remove();
        console.log((soma % 11) - 11);
        console.log('cpf ok');
      } else {
        cpf.setCustomValidity("o cpf informado é inválido");
        document.body.innerHTML +=" <div id='validcpf' style='color:red'>" + cpf.validationMessage + "</div>";
      }
    }
    count -= 1;
  }
}
