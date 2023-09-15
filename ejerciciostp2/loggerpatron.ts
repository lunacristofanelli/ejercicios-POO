class Logger {
    private static instance: Logger | null = null;
    private log: string[] = [];

    private constructor() {
    }

    public static getInstance(): Logger {
        if (Logger.instance === null) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public accederAlSistema(usuario: string) {
        const acceso = `${usuario} inició sesion el dia ${new Date().toLocaleString()}`;
        this.log.push(acceso);
    }

    public mostrarLog() {
        console.log("Registro de accesos al sistema:");
        this.log.forEach((acceso, index) => {
            console.log(`${index + 1}: ${acceso}`);
        });
    }
}

let logger = Logger.getInstance();
logger.accederAlSistema("Usuario n° 1");
logger.mostrarLog();
