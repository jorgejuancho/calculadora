// console.log('Aplicacion Calculadora')

// function sumar() {

//     const forma1 = document.getElementById("forma");

//     let operandoA = forma1['operandoA'];
//     let operandoB = forma1['operandoB'];
//     let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

//     if (isNaN(resultado))
//     // cuando el condicional solo lleva una linea no es necesario poner las llaves despues de los parentesis.
//         resultado = 'la operacion no inclueye un numero';
    
//     document.getElementById('resultado').innerHTML = `el resultado de la suma es: ${resultado}`;
//     // el signo peso ${x} se usa para traer el resultado de la variabla x
//     // innerHTML devuelve un mensaje  ejemplo `el resultado de la suma es`

//     console.log(`el resultado de la suma es: ${resultado}`);
// }
console.log('Aplicación Calculadora');

function sumar(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}
function restar(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la resta es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}
function multiplicar(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la multiplicación es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}
function dividir(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la División es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}