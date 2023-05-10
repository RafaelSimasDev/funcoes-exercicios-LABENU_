// ====== exercício 3 letra A ======

const funcaoSoma = (nume1, nume2) => {
    let soma = nume1 + nume2
    return (`O resultado da soma é: ${soma}.`)
}


const funcaoSubtracao = (nume1, nume2) => {
    let subtracao = nume1 - nume2
    return (`O resultado da subtração é: ${subtracao}.`)
}


const funcaoMultiplicacao = (nume1, nume2) => {
    let multiplicacao = nume1 * nume2
    return (`O resultado da multiplicação é: ${multiplicacao}.`)
}


const funcaoDivisao = (nume1, nume2) => {
    let divisao = nume1 / nume2
    return (`O resultado da divisão é: ${divisao}.`)
}


// ====== exercício 3 letra B ======

let nume1 = Number(prompt(`Digite seu primeiro número`))
let nume2 = Number(prompt(`Digite seu segundo número`))

// ====== exercício 3 letra C ======

// c) Invoque cada uma das 4 funções, passando como
// argumento os dois números recebidos do usuário.

funcaoSoma(nume1, nume2)
funcaoSubtracao(nume1, nume2)
funcaoMultiplicacao(nume1, nume2)
funcaoDivisao(nume1, nume2)

// ====== exercício 3 letra D ======

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções
// e imprima o resultado das operações no console.

let resultado1 = funcaoSoma(nume1, nume2)
console.log(resultado1)
let resultado2 = funcaoSubtracao(nume1, nume2)
console.log(resultado2)
let resultado3 = funcaoMultiplicacao(nume1, nume2)
console.log(resultado3)
let resultado4 = funcaoDivisao(nume1, nume2)
console.log(resultado4)
