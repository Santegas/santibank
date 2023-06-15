export default function ehUmCpf(campo) {
  const cpf = campo.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

  if (cpf.length !== 11) {
    console.log("CPF inválido!");
    return;
  }

  if (
    validaNumerosRepetidos(cpf) ||
    validaPrimeiroDigito(cpf) ||
    validaSegundoDigito(cpf)
  ) {
    campo.setCustomValidity('Esse cpf não é válido!');
  }
}
  
  function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
    ];
  
    return numerosRepetidos.includes(cpf);
  }
  
  function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;
  
    for (let tamanho = 0; tamanho < 9; tamanho++) {
      soma += cpf[tamanho] * multiplicador;
      multiplicador--;
    }
  
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
      soma = 0;
    }
  
    return soma != cpf[9];
  }
  
  function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;
  
    for (let tamanho = 0; tamanho < 10; tamanho++) {
      soma += cpf[tamanho] * multiplicador;
      multiplicador--;
    }
  
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
      soma = 0;
    }
  
    return soma != cpf[10];
  }

  var cpf = document.querySelector("#cpf");

cpf.addEventListener("input", function() {
  if (cpf.value) {
    cpf.value = cpf.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o ponto após os primeiros 3 dígitos
    cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o ponto após os segundos 3 dígitos
    cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere o traço antes dos últimos 2 dígitos
  }
}); 