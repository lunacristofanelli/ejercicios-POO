class Alumno {
    private nombre: string;
    private apellido: string;
    private examenes: number[];

    constructor(nombreAlumno: string, examenes: number[] = []) {
        this.nombre = nombreAlumno;
        this.examenes = examenes;
    }

    agregarExamen(nota: number) {
        this.examenes.push(nota);
    }

    obtenerPromedio() {
        if (this.examenes.length === 0) {
            return 0;
        }

        let suma = this.examenes.reduce((suma, alumno) => suma + alumno, 0);
        return suma / this.examenes.length;
    }
}

class Colegio {
    private alumnos: Alumno[] = [];

    agregarAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
    }


    // de no tener ningun examen va a devolver como valor un 0
    obtenerPromedioGeneral() {
        let sumaPromedios = this.alumnos.reduce((suma, alumno) => suma + alumno.obtenerPromedio(), 0);
        return sumaPromedios / this.alumnos.length || 0;
    }
}

let colegio = new Colegio();

let alumno1 = new Alumno("Juan Andreu");
alumno1.agregarExamen(7.5);
alumno1.agregarExamen(6);
colegio.agregarAlumno(alumno1);

let alumno2 = new Alumno("Luna Cristofanelli");
alumno2.agregarExamen(8);
alumno2.agregarExamen(4);
colegio.agregarAlumno(alumno2);

console.log("Promedio general de todos los alumnos: ", colegio.obtenerPromedioGeneral());
console.log("Promedio de Juan Andreu: ", alumno1.obtenerPromedio());
console.log("Promedio de Luna Cristofanelli: ", alumno2.obtenerPromedio());

//falta hacer el alta de los alumnos