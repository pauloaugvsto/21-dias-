
//informações usuário
let nomeDoUsuario = prompt('Insira seu nome');
let idadeDoUsuario = parseInt(prompt('Insira sua idade'));
let alturaDoUsuario = parseInt(prompt('Insira sua altura (em cm)'))
let pesoDoUsuario = parseInt(prompt('Insira seu peso (em kg)'))

//operações
let anoDeNascimento = 2023 - idadeDoUsuario
let imcDoUsuario = pesoDoUsuario / ((alturaDoUsuario / 100) * (alturaDoUsuario / 100))

//mensagem console
console.log('Olá ' + nomeDoUsuario + ', você tem ' + idadeDoUsuario + ' anos, nasceu em ' + anoDeNascimento
 + ', tem ' + alturaDoUsuario + 'cm de altura, pesa ' + pesoDoUsuario + 'kg, seu IMC é ' + imcDoUsuario + 'Kg/m².')
