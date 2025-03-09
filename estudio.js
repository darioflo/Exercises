let button = document.getElementById("button")
button.addEventListener("click", ()=>{
    console.log("Click");
    
})

let esPalindrome = (palabra) => {
    let palabraModificada = palabra.toLowerCase().split("")
    let palabraInvertida = [...palabraModificada].reverse()
    
    return palabraModificada.join() === palabraInvertida.join()        
}

console.log(esPalindrome("Oso"));
console.log(esPalindrome("Hola"));
console.log(esPalindrome("Ana"));

let fizzbuzz = () => {
    for (let i = 0; i < 99; i++) {
        if ( i % 3=== 0 ) {
            console.log("fizz");
        }
        if ( i % 5 === 0 ) {
            console.log("buzz");
        }

        if (i % 3=== 0 && i % 5 === 0) {
            console.log("fizzbuzz");   
        }
        console.log(i);
        
    }
}

console.log(fizzbuzz());

function esPrimo(numero){
    if ( numero < 1 ) return false

    for (let i = 2; i < numero; i++) {
        if(numero % i === 0){
            return false
        }    
    }
    return true
}

console.log(esPrimo(4));

function contarVocales(cadenaNueva){
    let vocales = ["a","A","e","E","i","I","o","O","u","U"]
    let cadena = cadenaNueva.split("")
    let cantVocales = 0
   vocales.forEach(element=>{
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index]=== element ) {
            cantVocales ++
        }
       }
   })
       return "La palabra " + cadenaNueva + " tiene " + cantVocales + " vocales" 

}

console.log(contarVocales("jajaj"));
console.log(contarVocales("Ericka"));


let removerDuplicados = (lista) => {
    return [...new Set(lista)]
}

console.log(removerDuplicados([1,1,2,3,4,4,5,6,6,6,7]));

let maximoDeLista = (numeros) => {
    let maximo = Math.max(...numeros)

    return maximo
}

console.log(maximoDeLista([1,2,3,4,5]));


let objeto = {
    nombre:"Dario",
    edad:24,
}

let palabra = "hola como estas querida"
console.log(palabra.split(""));



const generarAcronimo = (frase) => {
    let acronimo = []
    let fraseModificada = frase.split("")

    acronimo.push(fraseModificada[0])
  
  for (let index = 0; index < fraseModificada.length; index++) {
    if(fraseModificada[index] === " "){
          acronimo.push(fraseModificada[index+1])
        }
        console.log(acronimo);
        
  }
  return acronimo.join("").toUpperCase()
};

console.log(generarAcronimo("Not like us"));

let test = "kkkk"



