class Producto {
    protected TipoDeProducto: string;
    protected PrecioCosto: number;
  
    constructor(nombreArticulo: string, alCosto: number) {
      this.TipoDeProducto = nombreArticulo;
      this.PrecioCosto = alCosto;
    }
  
    public getTipoDeProducto(): string {
      return this.TipoDeProducto;
    }
  
    public getPrecioCosto(): number {
      return this.PrecioCosto;
    }
  }
  
  class Stock extends Producto {
    productosDisponibles: Producto[] = [];
    productosVendidos: Producto[] = [];
  
    constructor(nombreArticulo: string, alCosto: number) {
      super(nombreArticulo, alCosto);
    }
  
    public cargarItems(productos: Producto[]) {
      this.productosDisponibles.push(...productos);
    }
  
    public venderProducto(nombreArticulo: string) {
      let index = -1;
  
      for (let i = 0; i < this.productosDisponibles.length; i++) {
        if (this.productosDisponibles[i].getTipoDeProducto() === nombreArticulo) {
          index = i;
          break; 
        }
      }
  
      if (index !== -1) {
        let vendido = this.productosDisponibles.splice(index, 1)[0];
        this.productosVendidos.push(vendido);
        console.log(`Se ha vendido ${vendido.getTipoDeProducto()} por $${vendido.getPrecioCosto()}`);
      } else {
        console.log(`El artículo ${nombreArticulo} no está disponible para la venta`);
      }
    }
  }
  
  let stockKiosco = new Stock("Yerba Playadito", 800);
  stockKiosco.cargarItems([new Producto("Alfajor Fantoche", 150), new Producto("Gaseosa Coca Cola", 310), new Producto("Chicles Bobaloo", 105)]);
  
  stockKiosco.venderProducto("Alfajor Fantoche");
  stockKiosco.venderProducto("Gaseosa Coca Cola");
  stockKiosco.venderProducto("Yerba Playadito");
