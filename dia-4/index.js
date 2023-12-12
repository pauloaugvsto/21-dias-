
let idade = Number(prompt('Insira sua idade '))
let nome = prompt('Insira seu nome ')

// == igual / != diferente / < menor que / > maior que / >= <= maiorOuIgual e menorOuIgual
// === é igual o valor e o tipo / !== é diferente o valor e o tipo
// && E / || ou

if(idade === 19 && nome === "Paulo Augusto"){
    console.log('Seu nome é Paulo Augusto e você tem 19 anos.')
}else{
    if(idade === 19 || nome === "Paulo Augusto"){
        console.log('Seu nome é Paulo Augusto OU você tem 19 anos')
    }else{
        console.log('Seu nome NÃO é Paulo Augusto e você NÃO tem 19 anos.')
    }
}
    



