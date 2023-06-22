

const arrayMateria = [];
const alumno = [];


function pedirNombre() {
    const alumno = prompt ("digita un nombre");
    return alumno;
}

function pedirMateria() {
    const materia = prompt ("digita una materia");
    return materia;
}

function pedirNota() {
    const nota = Number (prompt("digita una nota"))
    return nota;
}


let alumnos = Number (prompt("¿cuantos alumnos deseas ingresar?"));


for (let i = 0; i < alumnos; i++){
    const numNombre = pedirNombre ();

    let numeroMaterias = Number (prompt("¿cuantas materias deseas ingresar?"));

    for (let j = 0; j < numeroMaterias; j++) {
        let nota = 0;
        let objMaterias;
        objMaterias = {
            nombreAlumno:'',
            nombreMateria:'', 
            notas: [], //lista de notas1
            promedio: 0,
            resPromedio: '',
     }

    objMaterias.nombreAlumno = numNombre.trim();
     const newMateria = pedirMateria();
     objMaterias.nombreMateria = newMateria
         numeroNotas = Number (prompt("¿cuantas notas deseas ingresar?"))
        
         for (let k = 0; k < numeroNotas; k++) {
            const newnota = pedirNota ();
            objMaterias.notas.push(newnota);
            nota = nota + newnota;   
         }

         nota = nota / numeroNotas;
         objMaterias.promedio =nota;

         if (nota >= 3.4 ){
            objMaterias.resPromedio= "aprobo";
         }
         else{
            objMaterias.resPromedio= "reprobo"
         }
         console.log(arrayMateria);
         arrayMateria.push(objMaterias)
       }
    }
    
    
//         let materias= [];
//         let nomAlumno = {
//             alumno:"",
//             materias:{
//              notas: []
//             }   
//         }
//         const nombreAlumno =pedirnombre ();
//         nomAlumno.alumno=nombreAlumno;
  
//         for (let j = 0; j < 3; j++){
//                 const materia = pedirmateria ();
//                 materias.push (materia);
//             }
//                 nomAlumno.materias=materias;
//                 alumnos.push (nomAlumno);
//                 nomAlumno.materias.notas=[]
              
//                 for(let k = 0; k < 3; k++){
//                     const nota =Number (prompt("digita una nota"));
//                     notas.push (nota)
//                 }
//                 materias.notas=notas;
//                 materias.push(notas)
                
                
                


//     //nombreAlumno.push (alumno);
//      console.log(nomAlumno);
// }

//
