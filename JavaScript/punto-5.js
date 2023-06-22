// A partir de la siguiente lista.

// const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
// Contar cuantos valores de tipo tiene la lista.number
// Contar cuantos valores de tipo tiene la lista.string
// A partir de la lista datos crear una lista nueva donde se agrupen todos los valores de tipo .number
// A partir de la lista datos crea una lista nueva donde se agrupen todos los valores de tipo .string
// Agregar a la lista donde agrupamos todos los valores de tipo el valor contenido en el único objeto que tiene la lista.string
// El resultado esperado de este ejercicio debe ser el siguiente:

// datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
// numeros = [ 3, 4.7, 2023, 12 ];
// cadenas = [ 'juan', 'mango', 'Sofia' ];

const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];

let contadorNumeros = 0;
  numeros : []
  for (let i = 0; i < datos.length; i++) {
    const valor = datos[i];
    //  console.log( valor);
    if (typeof valor == "number")  { 
        console.log("aqui voy a contar");
        contadorNumeros = contadorNumeros + 1 
    }
        
  }
    console.log(contadorNumeros);

   let contadorString = 0;
    for (let i = 0; i < datos.length; i++) {
      const valor = datos[i];

      if (typeof valor == "string") {
          contadorString = contadorString +1
      }
      
    }
   console.log(contadorString);