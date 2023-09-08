var Alumno = /** @class */ (function () {
    function Alumno(nombreAlumno, examenes) {
        if (examenes === void 0) { examenes = []; }
        this.nombre = nombreAlumno;
        this.examenes = examenes;
    }
    Alumno.prototype.agregarExamen = function (nota) {
        this.examenes.push(nota);
    };
    Alumno.prototype.obtenerPromedio = function () {
        if (this.examenes.length === 0) {
            return 0;
        }
        var suma = this.examenes.reduce(function (suma, alumno) { return suma + alumno; }, 0);
        return suma / this.examenes.length;
    };
    return Alumno;
}());
var Colegio = /** @class */ (function () {
    function Colegio() {
        this.alumnos = [];
    }
    Colegio.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Colegio.prototype.obtenerPromedioGeneral = function () {
        var sumaPromedios = this.alumnos.reduce(function (suma, alumno) { return suma + alumno.obtenerPromedio(); }, 0);
        return sumaPromedios / this.alumnos.length || 0;
    };
    return Colegio;
}());
var colegio = new Colegio();
var alumno1 = new Alumno("Juan Andreu");
alumno1.agregarExamen(7.5);
alumno1.agregarExamen(6);
colegio.agregarAlumno(alumno1);
var alumno2 = new Alumno("Luna Cristofanelli");
alumno2.agregarExamen(8);
alumno2.agregarExamen(4);
colegio.agregarAlumno(alumno2);
console.log("Promedio general de todos los alumnos: ", colegio.obtenerPromedioGeneral());
console.log("Promedio de Juan Andreu: ", alumno1.obtenerPromedio());
console.log("Promedio de Luna Cristofanelli: ", alumno2.obtenerPromedio());
