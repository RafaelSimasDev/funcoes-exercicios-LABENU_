// ========== função A ==========

const letraA =(num1, num2) => {
    const soma = num1 + num2
    
    return (`A soma dos números foi: ${soma}.`)
}
// console.log(letraA(2, 5))

// ========== função B ==========

const letraB =(nume1, nume2) => {
    return (`O primeiro número é maior que o segundo? ${nume1 > nume2}`)
}
// console.log(letraB(3, 7))
// console.log(letraB(56, 10))

// ========== função C ==========

const letraC = (numero1) => {
    const par = numero1 %2 === 0

    return (`O número ${numero1} é par. ${par} `)
}
// console.log(letraC(5))
// console.log(letraC(8))

// ========== função D ==========

const letraD = (salarioBruto) => {
    const nome = `João`
    const salarioLiquido = salarioBruto - (salarioBruto*0.1)

    return (`${nome} recebe ${salarioBruto.toFixed(2)} reais de 
salário, com o desconto do INSS 
o salário de ${nome} ficou ${salarioLiquido.toFixed(2)} reais.`)

}
// console.log(letraD(6321.90))
// console.log(letraD(8570.00))
