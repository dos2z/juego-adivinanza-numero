
let numero
numero = Math.random() * 10; 

numero = Math.ceil(numero);

alert("El programa generará un número del 1 al 10, debe tratar de adivinarlo");

let adivinar;

while (adivinar != numero) {
    adivinar = Number(prompt("Ingrese un número del 1 al 10"));
    if (adivinar < numero) {
        alert("El número es mayor que " + adivinar);
    }else if (adivinar > numero) {
        alert("El número es menor que " + adivinar);
    }
}
alert("Correcto!! el número es: " + numero);