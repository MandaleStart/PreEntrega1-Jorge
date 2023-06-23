const express = require('express');
const app = express();
const productos = require('./productos.json');
const usuarios = require('./usuarios.json');
const orders = require('./ordenes.json');
const fs = require('fs');
const cors = require('cors');
const { exec } = require('child_process');

app.use(express.json());
app.use(cors());
//falta configurar middleware para autenticacion

// Página de inicio y guía de uso
app.get('/', (req, res) => {
  const guide = `
    <h1>API Guía de Uso</h1>
    <h2>Productos</h2>
    <h3>Obtener todos los productos</h3>
    <p>GET /productos</p>
    <h3>Obtener un producto por su ID</h3>
    <p>GET /productos/:id</p>
    <h3>Agregar un nuevo producto</h3>
    <p>POST /productos</p>
    <h3>Eliminar un producto por su ID</h3>
    <p>DELETE /productos/:id</p>
    <h3>Editar un producto por su ID</h3>
    <p>PUT /productos/:id</p>
    <h2>Usuarios</h2>
    <h3>Obtener todos los usuarios</h3>
    <p>GET /usuarios</p>
    <h3>Obtener un usuario por su ID</h3>
    <p>GET /usuarios/:id</p>
    <p>...</p>
  `;

  res.send(guide);
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

// Ruta para obtener un producto por su ID
app.get('/productos/:id', (req, res) => {
  const idProducto = parseInt(req.params.id);
  const producto = productos.find(producto => producto.id === idProducto);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
});

// Ruta para agregar un nuevo producto
app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  nuevoProducto.id = generarNuevoId(productos);

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);

  guardarProductos();
});

function generarNuevoId(arreglo) {
  const maxId = arreglo.reduce((max, item) => {
    return item.id > max ? item.id : max;
  }, 0);

  return maxId + 1;
}

// Ruta para eliminar un producto por su ID
app.delete('/productos/:id', (req, res) => {
  const idProducto = parseInt(req.params.id);
  const indiceProducto = productos.findIndex(producto => producto.id === idProducto);

  if (indiceProducto === -1) {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  } else {
    productos.splice(indiceProducto, 1);
    res.json({ mensaje: 'Producto eliminado' });

    guardarProductos();
  }
});

// Ruta para editar un producto por su ID
app.put('/productos/:id', (req, res) => {
  const idProducto = parseInt(req.params.id);
  const datosActualizados = req.body;
  const indiceProducto = productos.findIndex(producto => producto.id === idProducto);

  if (indiceProducto === -1) {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  } else {
    productos[indiceProducto] = { ...productos[indiceProducto], ...datosActualizados };
    res.json(productos[indiceProducto]);

    guardarProductos();
  }
});

// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Ruta para obtener un usuario por su ID
app.get('/usuarios/:id', (req, res) => {
  const idUsuario = parseInt(req.params.id);
  const usuario = usuarios.find(usuario => usuario.id === idUsuario);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
});

// Ruta para editar un usuario por su ID
app.put('/usuarios/:id', (req, res) => {
  const idUsuario = parseInt(req.params.id);
  const datosActualizados = req.body;
  const indiceUsuario = usuarios.findIndex(usuario => usuario.id === idUsuario);

  if (indiceUsuario === -1) {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  } else {
    usuarios[indiceUsuario] = { ...usuarios[indiceUsuario], ...datosActualizados };
    res.json(usuarios[indiceUsuario]);

    guardarUsuarios();
  }
});

// Ruta para eliminar un usuario por su ID
app.delete('/usuarios/:id', (req, res) => {
  const idUsuario = parseInt(req.params.id);
  const indiceUsuario = usuarios.findIndex(usuario => usuario.id === idUsuario);

  if (indiceUsuario === -1) {
    res.status(404).json({ mensaje: 'Usuario no encontrado' });
  } else {
    usuarios.splice(indiceUsuario, 1);
    res.json({ mensaje: 'Usuario eliminado' });

    guardarUsuarios();
  }
});

// Ruta para obtener todos los pedidos
app.get('/pedidos', (req, res) => {
  res.json(orders);
});

// Ruta para obtener un pedido por su ID
app.get('/pedidos/:id', (req, res) => {
  const idPedido = parseInt(req.params.id);
  const pedido = orders.find(pedido => pedido.id === idPedido);

  if (pedido) {
    res.json(pedido);
  } else {
    res.status(404).json({ mensaje: 'Pedido no encontrado' });
  }
});

// Ruta para agregar un nuevo pedido
app.post('/pedidos', (req, res) => {
  const nuevoPedido = req.body;
  nuevoPedido.id = generarNuevoId(orders);

  orders.push(nuevoPedido);
  res.status(201).json(nuevoPedido);

  guardarPedidos();
});

// Ruta para editar un pedido por su ID
app.put('/pedidos/:id', (req, res) => {
  const idPedido = parseInt(req.params.id);
  const datosActualizados = req.body;
  const indicePedido = orders.findIndex(pedido => pedido.id === idPedido);

  if (indicePedido === -1) {
    res.status(404).json({ mensaje: 'Pedido no encontrado' });
  } else {
    orders[indicePedido] = { ...orders[indicePedido], ...datosActualizados };
    res.json(orders[indicePedido]);

    guardarPedidos();
  }
});

// Ruta para eliminar un pedido por su ID
app.delete('/pedidos/:id', (req, res) => {
  const idPedido = parseInt(req.params.id);
  const indicePedido = orders.findIndex(pedido => pedido.id === idPedido);

  if (indicePedido === -1) {
    res.status(404).json({ mensaje: 'Pedido no encontrado' });
  } else {
    orders.splice(indicePedido, 1);
    res.json({ mensaje: 'Pedido eliminado' });

    guardarPedidos();
  }
});

function guardarProductos() {
  const productosJSON = JSON.stringify(productos, null, 2);
  fs.writeFileSync('./productos.json', productosJSON);
}

function guardarUsuarios() {
  const usuariosJSON = JSON.stringify(usuarios, null, 2);
  fs.writeFileSync('./usuarios.json', usuariosJSON);
}

function guardarPedidos() {
  const ordersJSON = JSON.stringify(orders, null, 2);
  fs.writeFileSync('./orders.json', ordersJSON);
}
// Ejecutar el comando para reiniciar el servicio
/*app.get('/restart', (req, res) => {
  res.send('Reiniciando el servicio...');
    exec('npm restart', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al reiniciar el servicio: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error al reiniciar el servicio: ${stderr}`);
      return;
    }
    console.log(`Servicio reiniciado: ${stdout}`);
  });
});

*/
app.listen(3000, () => {
  console.log('======================================================================')
  console.log('|              Servidor iniciado en el puerto 3000                   | ');
  console.log('======================================================================')
  console.log('|                        Advertencia:                                |');
  console.log('|    Se hace uso de FS para cualquier edicion o eliminacion          |');
  console.log('|  Los datos dentro de los archivo ordenes.json, usuarios.json       | ')
  console.log('|               y productos.json no seran recuperables               | ')
  console.log('======================================================================')
  console.log('|           Para pruebas puede usar app.legacy.js                    | ')
  console.log('======================================================================')
});