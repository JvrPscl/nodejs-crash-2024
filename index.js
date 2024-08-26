// console.log('Hello world');

// Importamos en common JS 
// const generateRandomNumber = require('./utils');

// Importamos varios
// const { generateRandomNumber, celsiusToFahrenheit }= require('./utils');

// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Temperature 0ºC to ºF: ${celsiusToFahrenheit(0)}`);


// En ES Modules según type en package JSON
import getPosts, { getPostsLength } from './postController.js';

// console.log(`Registros: ${getPosts().entries}`);
console.log(getPosts());
console.log(`Registros: ${getPostsLength()}`);

