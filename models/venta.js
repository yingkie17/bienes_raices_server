const {v4: uuidv4 } = require('uuid');

class Venta {

    constructor( tipoVenta = 'no-tipoVenta') {

        this.idVenta = uuidv4(); //Identificador
        this.tipoVenta = tipoVenta;
        this.cantidadVenta = 0;
    }

}

module.exports = Venta;
