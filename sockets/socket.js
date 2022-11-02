  const {io} = require('../index.js');

  const Ventas = require('../models/ventas.js');
  const Venta = require('../models/venta.js');
  const ventas = new Ventas();
  console.log('-------------Servidor Incializado-------------');


  ventas.addVenta(new Venta('Venta'));
  ventas.addVenta(new Venta('Alquiler'));
  ventas.addVenta(new Venta('Anticrético'));

  console.log(ventas);

  //Mensaje de Sockets
  io.on('connection', client => {
  console.log('Cliente Conectado');

    client.emit('lista-servicios', ventas.getVentas());

    client.on('disconnect', () => { console.log('Cliente Desconectado');});
    client.on('mensaje', (payload) => {
      console.log('El Mensaje!!!',payload);
        io.emit('mensaje',{admin: 'nuevo mensaje' });
    });

    client.on('emitir-mensaje', (payload) => {
      //console.log(payload);
      //io.emit('nuevo-mensaje', payload);//Emite a todos los Clientes el mensaje
      client.broadcast.emit('nuevo-mensaje', payload);// Emite a todos Los Clientes menos al que envio el mensaje
    });


    client.on('agregar-servicio', (payload) => {
        const newTipoServicio = new Venta(payload.tipoVenta);
        ventas.addVenta(newTipoServicio);
        io.emit('lista-servicios', ventas.getVentas());
        console.log(payload);
    });

    client.on('cantidad-ventas', (payload) =>{
      console.log(payload);
      ventas.cantidadVenta(payload.id);
      io.emit('lista-servicios', ventas.getVentas());
    });

    client.on('delet-venta', (payload) =>{
      console.log('Se ha eliminado: ', payload);
      ventas.deleteVenta(payload.id);
      io.emit('lista-servicios', ventas.getVentas());
    })

  });
