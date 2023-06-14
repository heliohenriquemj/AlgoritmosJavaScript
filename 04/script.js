
let student = prompt ("Qual o nome do(a) aluno(a)?")
let n1 = prompt ("Qual a nota da primeira prova?")
let n2 = prompt ("Qual a nota da segunda prova?")
let n3 = prompt ("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3 

let result = average > 6

average = average.toFixed(2)

alert (result)

if (result) {
alert ("Parabens, " + student + "! Sua media foi de: " + average)
} 
else if (average < 3) {
alert ("Reprovado!")
}
else {
alert (student + " Estude para a sua prova de recuperacao! Sua media foi de: " + average)
}