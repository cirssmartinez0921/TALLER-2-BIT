let nombreAlumno=prompt ("ingresa tu nombre");
alumno={}
let materias= [];

for (let o = 0; o < 3; o++) {
    let notas = [];
    let nombreMateria = {
        nommateria:"",
        notas:[]
    }
    const materia = prompt ("digita la materia");
    nombreMateria.nommateria=materia;

 for (let i = 0; i < 3; i++) {
     const nota = Number(prompt("digita una nota"));
     notas.push (nota);
    }
    nombreMateria.notas= notas;
    materias.push (nombreMateria);
}
alumno.materias= materias;

console.log( alumno );
/** Solucion: Sacar el promedio e indicar si el alumno aprobo */


/**estamos iterando materias de un alumno */
for (let i = 0; i < 3; i++) {
    const infoMateria = {}
     infoMateria.nombre=alumno.materias[i].nommateria
    const notas= alumno.materias[i].notas;
    // console.log( notas );
    let suma=0
    let promedio=0
    /**estamos iterando las notas de la materia de un alumno */
    for (let j = 0; j < 3; j++) {
        const nota=notas[j]
        suma=suma+nota
    }
    promedio=suma/3 
    infoMateria.promedio=promedio
    console.log( nombreAlumno+ ( (promedio >= 3.5) ? " aprobo " : " reprobo " ) + infoMateria.nombre);
}



 