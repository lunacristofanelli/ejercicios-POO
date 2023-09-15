class Usuario {
    protected nombre: string;
    protected email: string;
    protected contraseña: string;

    public constructor(nombre: string, email: string, contraseña: string) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    public publicarPost(post: string) {
        console.log(`[${this.nombre}] ha publicado un post: ${post}`);
    }

    public comentarPost(post: string, comentario: string) {
        console.log(`[${this.nombre}] comentó en el posteo "${post}": ${comentario}`);
    }
}

class Influencer extends Usuario {
    private contenido: string;
    private seguidores: number;
    private seguidos: number;

    public constructor(nombre: string, email: string, contraseña: string, seguidores: number, tipoDeContenido: string, seguidos: number) {
        super(nombre, email, contraseña);
        this.contenido = tipoDeContenido;
        this.seguidores = seguidores;
        this.seguidos = seguidos;
    }

    public realizarColaboracion(otroInfluencer: Influencer) {
        console.log(`${this.nombre} realizó una colaboración con ${otroInfluencer.nombre}`);
    }
}

class Seguidor extends Usuario {

    public constructor(nombre: string, email: string, contraseña: string, public intereses: string[]) {
        super(nombre, email, contraseña);
        this.intereses = intereses;
    }

    public buscarContenidoRelacionado() {
        console.log(`${this.nombre} está buscando contenido relacionado a: ${this.intereses.join(', ')}`);
    }
}

let usuario1 = new Influencer("Maria Becerra", "mariabecerra@gmail.com", "maria1234", 20000000000, "Artistico, musical", 900);
let usuario2 = new Seguidor("Luna Cristofanelli", "lunacristofanelli@gmail.com", "luna1234", ["música", "artistas"]);

console.log(usuario1,usuario2);
usuario1.publicarPost("Nuevo posteo, denle like");
usuario1.realizarColaboracion(new Influencer("Emilia Mernes", "emiliamernes@gmail.com", "emilia1234", 50000000, "Modelo", 1200));

