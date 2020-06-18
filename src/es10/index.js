
// Flat, nos muestra las dimensiones X de un arreglo.

let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat()); // recibe como argumento la profundidad, sin argumento por defecto es 1


// Flat map, mapea cada elemento y le pasa una función a cada valor.

let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value**2]));


// Stream Start // Stream End - Elimina los espacios en blanco de un string (inicio o al final dependiendo el método)
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart());

let helloEnd = 'hello world                    ';
console.log(helloEnd);
console.log(helloEnd.trimEnd());



// Try - Catch sin el argumento del catch - viene por defecto 'error'

try {
    // do someting
}catch{
    console.log(error);
}

// Object.fromEntires <-- crea un elemento a raíz de 2 objetos
let entries = [["name", "nicolas"], ["age", 23 ]];
console.log(Object.fromEntries(entries));


// Ver que elemento se encuentra en un simbolo
let mySymbl = 'My Symbol';
let symbl = Symbol(mySymbl);
console.log(symbl.description);