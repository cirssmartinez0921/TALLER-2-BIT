let nombre = {};
let alumnos = [];
let notas= [];

for (let i = 0; i < 3; i++){
        let materias= [];
        let nomAlumno = {
            alumno:"",
            materias:{
             notas: []
            }   
            
        }
        const nombreAlumno = prompt ("ingresa tu nombre");
        nomAlumno.alumno=nombreAlumno;
  
        for (let j = 0; j < 3; j++){
                const materia = prompt ("digita la materia");
                materias.push (materia);
            }
                nomAlumno.materias=materias;
                alumnos.push (nomAlumno);
                nomAlumno.materias.notas=[]
              
                for(let k = 0; k < 3; k++){
                    const nota =Number (prompt("digita una nota"));
                    notas.push (nota)
                }
                materias.notas=notas;
                materias.push(notas)
                
                
                


    //nombreAlumno.push (alumno);
     console.log(nomAlumno);
}


