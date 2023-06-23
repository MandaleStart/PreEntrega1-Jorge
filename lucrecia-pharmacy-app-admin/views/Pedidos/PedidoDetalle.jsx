import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const PedidoDetalle = () => {
    const location = useLocation();
    const pedidoId = location.pathname.split('/').pop(); // Obtiene el último segmento de la URL

    const [pedido, setPedido] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchPedido = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3000/pedidos/${pedidoId}`);
                const data = await response.json();
                setPedido(data);
            } catch (error) {
                console.error('Error al obtener el pedido:', error);
            }
        };

        fetchPedido();
    }, [pedidoId]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/productos');
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        fetchProductos();
    }, []);

    const getNombreProducto = (productoId) => {
        const productId = Number(productoId.replace(/\(.*\)/g, '')); // Eliminar paréntesis y convertir a número
        const producto = productos.find((producto) => producto.id === productId);
        return producto ? producto.name : 'Nombre no disponible';
      };
      
      const getCantidadProducto = (productoId) => {
        const startIndex = productoId.indexOf('(') + 1; // Índice de inicio del número entre paréntesis
        const endIndex = productoId.indexOf(')'); // Índice de fin del número entre paréntesis
        const cantidad = Number(productoId.substring(startIndex, endIndex)); // Obtener el número y convertirlo a número
        return cantidad;
      };

      const getIdProducto = (productoId) => {
        const startIndex = productoId.indexOf('('); // Índice de inicio del paréntesis
        const productId = Number(productoId.substring(0, startIndex)); // Obtener el número y convertirlo a número
        return productId;
      };
      
    return (
        <div>
            <h2>Detalles del Pedido N°{pedidoId}</h2>
            {pedido ? (
                <div className='row '>
                    <table className="table table-striped  col box">
                        <tbody>
                            <tr>
                                <th>ID:</th>
                                <td>{pedido.id}</td>
                            </tr>
                            <tr>
                                <th>Usuario:</th>
                                <td>{pedido.usuario}</td>
                            </tr>
                            <tr>
                                <th>Direccion:</th>
                                <td>{pedido.direccion}</td>
                            </tr>
                            <tr>
                                <th>Localidad:</th>
                                <td>{pedido.localidad}</td>
                            </tr>
                            <tr>
                                <th>Fecha de Creación:</th>
                                <td>{pedido.fecha_creacion}</td>
                            </tr>
                            <tr>
                                <th>Fecha de Entrega:</th>
                                <td>{pedido.fecha_entrega}</td>
                            </tr>
                            <tr>
                                <th>Estado:</th>
                                <td>{pedido.status}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='col-8 box'>
                        <h3>Productos Adquiridos:</h3>
                        {pedido.productos.length === 0 ? (
                            <p>No hay productos registrados.</p>
                        ) : (
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th className='col-2'>ID</th>
                                        <th className='col-6'>Nombre</th>
                                        <th className='col-2'>Cantidad:</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {pedido.productos.map((productoId) => (
                                        <tr key={productoId}>
                                            <td><Link to={'/productos/' + getIdProducto(productoId)}>{getIdProducto(productoId)}</Link></td>
                                            <td><Link to={'/productos/' + getIdProducto(productoId)}>{getNombreProducto(productoId)}</Link></td>
                                            <td><Link to={'/productos/' + getIdProducto(productoId)}>{getCantidadProducto(productoId)}</Link></td>
                                        </tr>
                                        
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            ) : (
                <p>Cargando el pedido...</p>
            )}
        </div>
    );
};
export default PedidoDetalle;