// console.log('Hola Mundo');

// Formas para crear variables

// let a = 10;
// var b= 10;
// const c=10; 

/* 
const no cambian de valor, son constantes
c=20; no se puede hacer

comentario multilinea
 
*/
let a=10,
b=20,
c=30,
d=10;
let x = a+b;
console.log(x); //log normal
console.warn(x); // warning
console.error(x); // error
// enviamos la variable como objeto
//Enviamos estilos de css a la consola
console.log('%c Mis variables son','color: darkblue;font-weight:bold');
console.log({a});
console.log({b});
console.log({c});

console.table({a,b,c,d,x}); // permite mostrar el objeto como tabla