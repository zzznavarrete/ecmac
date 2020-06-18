//#region
//- INICIO: Default Params y Concatenación --

// without es6 (Antiguamente)
function newFunction(name, age, country) {
  var name = name || "Nicolas";
  var age = age || 23;
  var country = country || "CL";
  console.log(name, age, country);
}

// es6 : Parámetros por defecto
function newFunction2(name = "Nicolas", age = 23, country = "CL") {
  console.log(name, age, country);
}

// calling the function es6
newFunction2();
newFunction2("Chica", 9, "CL");

// Templeta literals
let hello = "Hello";
let world = "world";

// without es6
let epicPhrase = hello + " " + world;

// es6
let epicPhraseWithEs6 = `${hello} ${world}`;

console.log(epicPhraseWithEs6);

// - FIN: Default Params y Concatenación --
//#endregion

//#region
// LET y CONST, Multilínea, Spread Operator y Desestructuración

// MULTILINEA 
// without es6
let lorem = "Quiero escribir una frase épica que pueda separar \n" +
  "de la manera sin es6";

let lorem2 = `La manera de separar frases con es6 es esta
con las comillas francesas :)`;

console.log(lorem2);


// DESESTRUCTURACIÓN

let person = {
    'name': 'Nicolas',
    'age' : 23,
    'country' : 'CLP'
}

//witouth es6
console.log(person.name, person.age, person.country);

// es6
let {
    name, age, country
} = person;

console.log(name, age, country)


// Spread operator

let team1 = ['Nicolas', 'Bastian', 'Chica'];
let team2 = ['Valentina', 'Catalina', 'Rex'];

// Estructurar los teams, los '...' es para unir al arreglo toda la info del team 1
let education = ['David', ...team1, ...team2];

console.log(education);



// LET Y CONST

// witouth es6
var hola = 'hola'

// es6
{
    var globalVar = "Global";
}
{
    let globalLet = "Global let";
}

// con var si es accesible a todo el scope
console.log(globalVar)
// es6 nos permite declarar 'let' que limita el scope de la variable a dentro del bloque de código en donde esté declarada
// Si descomentamos lo de abajo daría error
//console.log(globalLet)

// CONSTANTE 
// en es6 se agregó la constante que permite crear espacios en memoria que no puedan ser cambiados en el tiempo.
const a = 'b';
// Si descomentamos lo de abajo daría error
//a = 'c';



// FIN: LET y CONST, Multilínea, Spread Operator y Desestructuración
//#endregion


//#region 
// INICIO: Arrow Functions, Promesas y Parámetros en objetos

// Objetos
let name = 'Nicolas'
let age = 32;

// without es6
obj = {name: name, age: age};

// es6
objEs6 = {name, age};

console.log(objEs6);


// ARROW FUNCTIONS

const names = [
    {
        name: 'Nicolas',
        age: 23
    },
    {
        name: 'Chica',
        age: 9
    }
]

// withouth es6
let listOfNames = names.map(function (item){
    console.log(item.name);
});

// es6
let listOfNameEs6 = names.map(item => {
    console.log(item.name);
});

// es6 - Otra forma de arrow function
const listOfNames3 = (name, age, country) => {
    // do something
}

// es6 - Otra forma de arrow function
const listOfNames4 = name => {
    // do something
}

// es6 - Otra forma de arrow function
const square = num => num * num;


// PROMESAS

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        // La promesa tiene la espera de una lógica que nosotros vamos a resolver
        if (true){
            resolve('Resolve');
        } else{
            reject('Reject');
        }
    });
}

helloPromise()
    .then(response => {console.log(response); // Presentamos la respuesta del método con la promesa
    }).catch(error => console.log(error) // Presentamos en caso de que haya un error
    );


// FIN: Arrow Functions, Promesas y Parámetros en objetos
//#endregion


//#region 

// INICIO: Clases, Módulos y Generadores

class calculator {
    
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return (this.valueA + this.valueB);
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


// MODULO
import { helloModule } from './module';
helloModule();



// GENERATOR
// Muy importante cuando trabajamos con lógicas o series de algoritmos.
function* helloWorld(){
    if (true){
        yield 'Hello '
    }
    if (true){
        yield 'world, from generator function'
    }
}

const generatorHello = helloWorld();
// podré ocupar 'next' para recueprar el primer valor lógico y luego si lo ejecuto de nuevo vuelve a recorrer la logica
console.log(generatorHello.next().value);
// 2do valor
console.log(generatorHello.next().value);

// FIN: Clases, Módulos y Generadores
//#endregion


