//inf usuario
let numeroUm = Number(prompt('Insira um número'))
let numeroDois = Number(prompt('Insira outro número'))
let operacao = prompt('Insira a operação que deseja realizar entre os números')


//switchCase
switch (operacao){
    case "Soma":
        console.log(numeroUm + numeroDois)
        break;
    case "Subtração":
        console.log(numeroUm - numeroDois)
        break;
    case "Multiplicação":
        console.log(numeroUm * numeroDois)
        break;
    case "Divisão":
        console.log(numeroUm / numeroDois)
        break;

}

let opcao = parseInt(prompt("Escolha:" + "\n1 = +; \n2 = -;"))