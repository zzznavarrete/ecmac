

//#region 

// new Propagation features 

const obj = {
    name: 'Nicolas',
    age: 23,
    country: 'CL'
}

let { name, ...all } = obj;

console.log(name, all)


const objChica = {
    name: 'Chica',
    age: 9
}

const objChicaConPais = {
    ...objChica,
    country: 'CL'
}

console.log(objChica);
console.log(objChicaConPais);

//#endregion


//#region 

// Finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello world')
            : reject(new Error('Test error'))
    });
}

helloWorld()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() =>  console.log('Finalizó'));



//#endregion



//#region 
// REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day)
//#endregion