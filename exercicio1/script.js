const user = prompt("Qual o seu nome?")
const comida1 = prompt("Qual a sua primeira comida preferida?")
const comida2 = prompt("Qual a sua segunda comida preferida?")
const comida3 = prompt("Qual a sua terceira comida preferida?")
const mensagem = `
    Essas são as comidas favoritas de ${user}:
    - ${comida1}
    - ${comida2}
    - ${comida3}
    `   
console.log(mensagem)