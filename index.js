// Iteraciones pair programing
// Arrays

// 1
let arrayVacio =[];
// 2
let arrayNumeros =[0,1,2,3,4,5,6,7,8,9];
// 3
let arrayNumerosPares =[0,2,4,6,8];
// 4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// funciones

// 5
function suma(num1,num2){
    return num1 + num2;
}
// 6
function potenciacion(num1,num2){
    return num1 ** num2;
}
// 7
function separarPalabras(argumentoTexto) {
    return argumentoTexto.split(' ');
}
// 8
// function repetirString(texto, numero){
//     let textoaAñadir = texto;
//     for (let i = 0; i <= numero; i++) {
//         texto = texto + textoaAñadir;
//     }
//     return texto;
// }
// 9
// function esPrimo(num1){
//     for (let i = 1; i <= num1; i++) {
//         if (num1 % i == 0 && (num1 !== 1 && i !== num1)) {
//             return false;
//         }
//     }
//     return true;
// }

// mezclando arrays y funciones

// 10
function ordenarArray(numeros){
     return numeros.sort((a,b) => a-b);
}
// 11
// function obtenerPares(numeros){
//     return numeros.filter(a => (a % 2 == 0))
// }
// 12
function pintarArray(textos) {
    let texto = '';
    for (let i = 0; i < textos.length; i++) {
        if (i == 0 ) {
            texto = textos[i]
        } else {
            texto = texto + ', ' + textos[i];
        }
    }
    return `[${texto}]`;
}

// 13

// function arrayMapi(array, func) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i][func]()
//     }
//     return array;
// }

// 14
// function eliminarDuplicados(array) {
//     let wtf = array.filter((item,index) => {
//         return data.indexOf(item) === index;
//     });
//     return wtf;
// }



// iteraciones proyecto individual
// Arrays

// 15
let arrayNumerosNeg =[0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
// 16
let holaMundo = [ 'Hola', 'Mundo']
// 17
let loGuardoTodo =[ 'hola', 'que', 23, 42.33 ,'tal']
// 18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

// funciones

// 19
function multiplicacion(num1,num2){
    return num1 * num2;
}
// 20
function division(num1,num2){
    return num1 / num2;
}
// 21

function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// 22


// mezclando arrays y funciones

// 23
function ordenarArray2(numeros) {
    return numeros.sort();
}

// 24
function obtenerImpares(numeros) {
    return numeros.filter(a => a % 2 !== 0)
}
// 25

// 26
