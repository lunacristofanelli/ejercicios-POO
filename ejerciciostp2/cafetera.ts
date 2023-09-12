class Cafetera {
    private capacidadMaximaCafe: number;
    private cantidadActualCafe : number;

    constructor (capacidadMaximaCafe = 1000 , cantidadActualCafe = 0){
        this.capacidadMaximaCafe = capacidadMaximaCafe;
        this.cantidadActualCafe = capacidadMaximaCafe;

        if (cantidadActualCafe > capacidadMaximaCafe) 
            cantidadActualCafe = capacidadMaximaCafe;
    }

    public llenarCafetera () : string {
        this.cantidadActualCafe = this.capacidadMaximaCafe;
        return ("Su cafetera está llena");
    }

    public servirTaza(cantidad: number): void {
        if (cantidad <= this.cantidadActualCafe) {
            this.cantidadActualCafe -= cantidad;
            console.log(`Se sirvió una taza de ${cantidad} c.c. de café.`);
        } else {
            console.log("No hay suficiente café para llenar la taza.");
        }
    }

    public vaciarCafetera () : string {
        this.cantidadActualCafe = 0;
        return ("Su cafetera está vacía");
    }

    public agregarCafe (cantidad: number) : void {
        if (cantidad > 0) {
            this.cantidadActualCafe += cantidad;
            console.log (`Se agregó ${cantidad} c.c. de café a la cafetera`);
        } else ("Su cafetera está llena");
    }
}

let miCafetera = new Cafetera();
miCafetera.vaciarCafetera();
miCafetera.agregarCafe(600);
miCafetera.servirTaza(200);
console.log (miCafetera);
