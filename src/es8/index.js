//#region

// ENTRIES - Transforma elementos a una matriz

const data = {
  frontend: "Nicolas",
  backend: "Nicolas",
  designer: "Chica",
};

// Transforma el objeto a una matriz

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// OBJECT VALUES - Devuelve un arreglo de strings
const values = Object.values(data);
console.log(values);

// PADSTART / PADEND - Nos permite añadir valores a los string, dando primero el número de caracteres como máximo antes o despues de que empiece a escribir el método

const string = "hello";

// argumentos= (Define un largo máximo de caracteres, le entrega el string a insertar antes del texto original, pero priorizando el original para respetar el largo máximo dado)
console.log(string.padStart(10, "123456789")); // hasta el va

//argumentos (Define un largo máximo de caractéres, le entrega el string a insertar DESPUES del texto original, pero priorizando el original para respetar el largo máximo dado)
console.log(string.padEnd(12, "123456789"));

//#endregion

//#region

// ASYNC / AWAIT

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
    try{    
        const hello = await helloWorld();
        console.log(hello);
    }catch(ex){
        console.log(ex);
    }
}


helloAsync();




//#endregion
