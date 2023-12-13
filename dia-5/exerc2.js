//opcoes
let combustivel = parseInt(prompt('Olá, seja bem vindo ao posto Ipiranga Online! ' + "\n" + 'Escolha uma das três opções:' + "\n" + "\n1 = Gasolina; \n2 = Álcool; \n3 = Calibrar pneus"))

//switchCase
switch (combustivel){
    case 1:
        valor = parseInt(prompt('Insira o valor que deseja abastecer em Gasolina'))
        console.log("Foram abastecidos " + (valor / 5) + " litros de Gasolina." )
        break;
    case 2:
        valor = parseInt(prompt('Insira o valor que deseja abastecer em Álcool'))
        console.log("Foram abastecidos " + (valor / 3) + " litros de Álcool.")
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Opção inválida!")
        break;
}