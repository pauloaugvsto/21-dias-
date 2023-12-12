//quest
const nomeDoUsuario = prompt('Insira seu nome')
const idadeDoUsuario = parseInt(prompt('Insira sua idade'))
const cartaDoUsuario = prompt('Você tem carta de motorista? (sim/não)')
const carroUsuario = prompt('Você tem um carro? (sim/não)')

//if's
if(idadeDoUsuario < 18 || cartaDoUsuario === 'não'){
    console.log(nomeDoUsuario + ', você não pode dirigir.')
}else{
    if(carroUsuario === 'não'){
        console.log(nomeDoUsuario + ', você pode dirigir mas não tem um carro.')
    }else{
        console.log(nomeDoUsuario + ', você será o motorista!')
    }
    }
    

