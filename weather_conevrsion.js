//The kelvin value stays constant throughout
const kelvin = 500;
//convert kelvin to celsius
const celsius = kelvin - 273;
//convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//round down fahrenheit variables
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degree's Fahrenheit`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} in newton`);
