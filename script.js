const firstName = "Gabriel"
const firstNameWithUppercase = firstName.toUpperCase()
console.log(firstNameWithUppercase)
//Los valores primitivos en javascript son INMUTABLES, tenemos que crear otra variable para poder generar el nombre "Gabriel" en mayusculas. Esto en python se puede hacer normal.

/*const list = []
const AnotherList = list.concat("Gabriel","Jesus")
console.log(AnotherList)
const lista = []
lista.push(123)*/

const persona = {
    nombre : "Miguel",
    LastName : "Molina",
    age: 18,
    isDeveloper: true,
    links: ['facebook.com','google.com']
}

/*console.log(persona.LastName)
console.log(persona.links[0])
const field = 'age'
console.log(persona[field])*/

function sum(operando1, operando2) {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

console.log(sum(1,2))
