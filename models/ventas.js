

//Esta clase va permitir agregar a la lista un nuevo tipo de venta
class Ventas {
  constructor() {
    this.ventas = [];
  }

  addVenta(venta = new Venta() ){
    this.ventas.push(venta);
  }

  getVentas(){
    return this.ventas;
  }

  deleteVenta(idVenta =''){
    this.ventas = this.ventas.filter(venta => venta.idVenta !== idVenta);
    return this.ventas;
  }

  cantidadVenta(idVenta = ''){
    this.ventas = this.ventas.map(venta => {
      if (venta.idVenta == idVenta) {
        venta.cantidadVenta++;
        return venta;
      }else {
        return venta;
      }
    });
  }

}

module.exports = Ventas;
