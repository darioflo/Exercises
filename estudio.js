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

function esCapicua(numero){
    let numeroComparado = numero.toString().split("").reverse()
    return numero === parseInt(numeroComparado.join(""))
}

console.log(esCapicua(556));
console.log(esCapicua(555));
console.log(esCapicua(5562));
console.log(esCapicua(666));

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

function convertirAGeringoso(texto) {
    let vocales = ["a","e","i","o","u"]
    let textoModificado = texto.split("")
    let textoGeringoso = []

    textoModificado.forEach(element=>{
      for (let index = 0; index < vocales.length; index++) {
            if (element === vocales[index]) {
                textoGeringoso.push(element)
                textoGeringoso.push("p")
            }
      }
      textoGeringoso.push(element)
    })

  return textoGeringoso.join("")
  
}


console.log(convertirAGeringoso("Hola"));

function numeroMayorYMenor(numbers) {
    return [Math.max(...numbers), Math.min(...numbers)]
}

console.log(numeroMayorYMenor([1,2,3,4,5,6]));



const filtrarEstudiantesAprobados = (estudiantes) => {
    let estudiantesAprobados = []

  estudiantes.forEach(element=>{
      let suma = element.calificaciones.reduce((acumulado,valorActual) => acumulado + valorActual,0)
      let promedio = suma / element.calificaciones.length

      if (promedio > 70) {
          estudiantesAprobados.push(element.nombre)
      }
  })
  return estudiantesAprobados
};

console.log(filtrarEstudiantesAprobados(estudiantes = [
    { nombre: "Juan", calificaciones: [80, 90, 85] },
    { nombre: "María", calificaciones: [70, 60, 75] },
    { nombre: "Pedro", calificaciones: [90, 85, 95] },
    { nombre: "Ana", calificaciones: [60, 75, 80] }
  ]));


  function filterEvenNumbers(arr) {
    return arr.filter(element => element % 2 === 0)
   }

   function sumArray(arr) {   
    return arr.reduce((acumulado,valorActual)=>acumulado+valorActual,0)
  }

    function duplicarArray(arr){
    let arregloDuplicado = []

    arr.forEach((element)=>{
        arregloDuplicado.push(element)
        arregloDuplicado.push(element)
    })

    return arregloDuplicado
}

console.log(duplicarArray([1,2,3,4,5]));


function calcularFactorial(numero){
    let factorial = 1
        while (numero >= 1) {
            factorial *= numero
            numero --
        }
    return factorial
  }

  console.log(calcularFactorial(5));
  

  function sumaDePrimos(num){
    let primosMenores = []
  
    for (let index = 0; index < num; index++) {
        if (esPrimo(index)) {
          primosMenores.push(index)
        }
    }
    return primosMenores.reduce((acumulado,valorActual)=> acumulado + valorActual,0)
  }

  console.log(sumaDePrimos(20));
  

  function esPerfecto(num){
    let numeros = []
    for (let index = 1; index < num; index++) {
      if (num % index === 0 ) {
          numeros.push(index)
      }
    }
  return num === numeros.reduce((acumulado,valorActual)=> acumulado +valorActual,0)
}

console.log(esPerfecto(18));
console.log(esPerfecto(12));
console.log(esPerfecto(10));
console.log(esPerfecto(6));



function armstrong(numero){
    let arregloNumeros = numero.toString().split("")
    let arregloComparado = arregloNumeros.map(element=> Math.pow(element,arregloNumeros.length))

    return numero === arregloComparado.reduce((acumulado,valorActual)=>acumulado+valorActual,0)
}

console.log(armstrong(371));
console.log(armstrong(36));
console.log(armstrong(651));

function factorizacion(num) {
    let divisoresPrimos = [];
    for (let index = 2; index <= num; index++) {
        if (num % index === 0 && esPrimo(index)) {
            divisoresPrimos.push(index);
            num /= index;
            index = 1; // Reiniciar el índice para verificar el mismo factor nuevamente
        }
    }
    return divisoresPrimos;
}

  console.log(factorizacion(12));
  

  function sumarHasta(numero) {
    let suma = []

  for (let index = 0; index <= numero; index++) {
        suma.push(index)        
  }

  return suma.reduce((acumulado,valorActual)=> acumulado + valorActual, 0)
}
console.log(sumarHasta(5));


function sumarDigitos(numero) {
    let suma = numero.toString().split("").map(Number)
    console.log(suma);
    return suma.reduce((acumulado, valorActual) => acumulado + valorActual, 0)
  }


  console.log(sumarDigitos(65));
  

  function sumaCubos(n) {
    let cubos = []
      for (let index = 0; index <= n; index++) {
              cubos.push(Math.pow(index,3))
      }
      console.log(cubos);
    return cubos.reduce((acumulado, valorActual) => acumulado + valorActual, 0)
    }

console.log(sumaCubos(3));



let coincidencia = (palabra, frase)=> {
    let palabras = frase.split(" ").map(w => w.replace(/[.,:;!?]/g, ""))
    let cantVeces = 0
    
    
    palabras.forEach((element)=>{
        if (element === palabra) {
            cantVeces ++
        }
    })
    return cantVeces
}

console.log(coincidencia("palabra", "Aqui hay varias palabras: palabra, palabra, palabra"));
