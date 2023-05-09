// ====== exercício 3 letra A ======

const exercicio10 = (numero1, numero2) => {
    return (`O resultado da soma é: ${numero1 + numero2}.`)
}
// console.log(exercicio10(10, 36))

const exercicio20 = (numero3, numero4) => {
    return (`O resultado da subtração é: ${numero3 - numero4}.`)
}
// console.log(exercicio20(560, 345))

const exercicio30 = (numero5, numero6) => {
    return (`O resultado da multiplicação é: ${numero5 * numero6}.`)
}
// console.log(exercicio30(12, 5))

const exercicio40 = (numero7, numero8) => {
    return (`O resultado da divisão é: ${numero7 / numero8}.`)
}
// console.log(exercicio40(300, 12))

// ====== 

const nume1 = Number(prompt(`Digite seu primeiro número`))
const nume2 = Number(prompt(`Digite seu segundo número`))

// ======

exercicio10(nume1, nume2)
exercicio20(nume1, nume2)
exercicio30(nume1, nume2)
exercicio40(nume1, nume2)

// ======

console.log(exercicio10(nume1, nume2))
console.log(exercicio20(nume1, nume2))
console.log(exercicio30(nume1, nume2))
console.log(exercicio40(nume1, nume2))