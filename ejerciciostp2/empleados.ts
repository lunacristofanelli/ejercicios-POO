export class Empleado {
    protected nombre: string;
    protected apellido: string;
    protected salarioMensual: number;

    public constructor(nombreEmpleado: string, apellidoEmpleado: string, salarioMensualEmpleado: number) {
        this.nombre = nombreEmpleado;
        this.apellido = apellidoEmpleado;
        this.salarioMensual = salarioMensualEmpleado;
    }

    public aumentarSalario(aumento: number): number {
        this.salarioMensual += aumento;
        return this.salarioMensual;
    }

    public reducirSalario(reduccion: number): number {
        this.salarioMensual -= reduccion;
        return this.salarioMensual;
    }
}

class Gerente extends Empleado {
    private area: string;
    private tareas: string;

    public constructor(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, areaGerente: string,) {
        super(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado);
        this.area = areaGerente;
    }

    asignarTareas(tareas: string[]) {
        console.log(`Tareas asignadas a ${this.nombre} en el área ${this.area}: ${tareas.join(', ')}`);
    }
}

class Trabajador extends Empleado {
    private horasTrabajadas: number;

    public constructor(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas: number) {
        super(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado);
        this.horasTrabajadas = horas;
    }

    public solicitarDiaLibre(): void {
        console.log(`${this.nombre},${this.apellido}, solicitó dia libre`);
    }
}

class EmpleadoTemportal extends Trabajador {
    private fechaFinContrato: Date;

    public constructor(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas, fechaFinContratio: Date) {
        super(nombreEmpleado, apellidoEmpleado, salarioMensualEmpleado, horas);
    }

    verificarVencimientoContrato(): boolean {
        let fechaActual = new Date();

        /* Comparar la fecha de vencimiento del contrato con la fecha actual */
        if (this.fechaFinContrato > fechaActual) {
            return false;
        } else {
            return true;
        /* El contrato ha vencido o está a punto de vencer */
        }
    }
}

let empleado1 = new Empleado("Juan","Andreu",200000);
let trabajador1 = new Trabajador("Luna","Cristofanelli",150000,8);
let empleadoTemporal1 = new EmpleadoTemportal("Pablo","Perez",50000,4,new Date (2/3/2023));

console.log(empleado1,trabajador1,empleadoTemporal1);
console.log(empleadoTemporal1.verificarVencimientoContrato());