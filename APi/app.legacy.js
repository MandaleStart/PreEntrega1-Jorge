const express = require('express');
const app = express();
const productos = require('./legacy/productos.json');
const usuarios = require('./legacy/usuarios.json');
const orders = require('./legacy/orders.json')
const cors = require('cors');

app.use(express.json());
app.use(cors());
//falta configurar middleware para autenticacion


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
});*/

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
      <h3>Agregar un nuevo usuario</h3>
      <p>POST /usuarios/</p>
      <h3>Eliminar un usuario por su ID</h3>
      <p>DELETE /usuarios/:id</p>
      <h3>Editar un usuario por su ID</h3>
      <p>PUT /usuario/:id</p>
      
      <h2>PEDIDOS</h2>
      <h3>Obtener todos los pedido </h3>
      <p>GET /pedidos/</p>
      <h3>Obtener un pedido por su ID</h3>
      <p>GET /pedidos/:id</p>
      <h3>Agregar un nuevo pedido</h3>
      <p>POST /pedidos</p>
      <h3>Eliminar un pedido por su ID</h3>
      <p>DELETE /pedidos/:id</p>
      <h3>Editar un pedido por su ID</h3>
      <p>PUT /pedidos/:id</p>
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
    }
  });
  
  // Ruta para eliminar un pedido por su ID
  app.delete('/pedidos/:id', (req, res) => {
    const idPedido = parseInt(req.params.id);
    const indicePedido = orders.findIndex(pedido => pedido.id === idPedido);
  
    if (indicePedido === -1) {
      res.status(404).json({ mensaje: 'Pedido no encontrado' });
    } else {
      // Crea una copia de la lista orders antes de eliminar el pedido
      const ordersCopy = [...orders];
      ordersCopy.splice(indicePedido, 1);
      res.json({ mensaje: 'Pedido eliminado' });
    }
  });
  

app.listen(3000, () => {
  console.log('======================================================================')
  console.log('|              Servidor iniciado en el puerto 3000                   | ');
  console.log('======================================================================')
  console.log('|                        Advertencia:                                |');
  console.log('|               NO se utiliza FS para edicion de archivo             |');
  console.log('|   Los datos dentro de los archivo "ordenes.json", "usuarios.json"  | ')
  console.log('|             y "productos.json" no seran modificados                | ')
  console.log('======================================================================')
  console.log('|           Para guardar datos en los archivos use app.js            | ')
  console.log('======================================================================')
});
