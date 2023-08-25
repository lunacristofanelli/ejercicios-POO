class Item {
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
  
  class Stock extends Item {
    itemsDisponibles: Item[] = [];
    itemsVendidos: Item[] = [];
  
    constructor(nombreArticulo: string, alCosto: number) {
      super(nombreArticulo, alCosto);
    }
  
    public cargarItems(items: Item[]) {
      this.itemsDisponibles.push(...items);
    }
  
    public venderItem(nombreArticulo: string) {
      let index = -1;
  
      for (let i = 0; i < this.itemsDisponibles.length; i++) {
        if (this.itemsDisponibles[i].getTipoDeProducto() === nombreArticulo) {
          index = i;
          break; 
        }
      }
  
      if (index !== -1) {
        const vendido = this.itemsDisponibles.splice(index, 1)[0];
        this.itemsVendidos.push(vendido);
        console.log(`Se ha vendido ${vendido.getTipoDeProducto()} por $${vendido.getPrecioCosto()}`);
      } else {
        console.log(`El artículo ${nombreArticulo} no está disponible para la venta`);
      }
    }
  }
  
  let stockKiosco = new Stock("Yerba Playadito", 800);
  stockKiosco.cargarItems([new Item("Alfajor Fantoche", 150), new Item("Gaseosa Coca Cola", 310), new Item("Chicles Bobaloo", 105)]);
  
  stockKiosco.venderItem("Alfajor Fantoche");
  stockKiosco.venderItem("Gaseosa Coca Cola");
  stockKiosco.venderItem("Yerba Playadito");
