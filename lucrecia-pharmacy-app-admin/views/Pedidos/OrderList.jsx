import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa/index.esm';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Simulación de obtención de pedidos desde una API o base de datos
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/pedidos/');
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error al obtener los pedidos:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Lista de Pedidos</h2>
            {orders.length === 0 ? (
                <p>No hay pedidos registrados.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Fecha de Creación</th>
                            <th>Fecha de Entrega</th>
                            <th>Status</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.usuario}</td>
                                <td>{order.fecha_creacion}</td>
                                <td>{order.fecha_entrega ? order.fecha_entrega : '-'}</td>
                                <td>{order.status}</td>
                                <td>
                                    <Link to={`/pedidos/${order.id}`}><FaSearch></FaSearch>Ver Pedido</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default OrderList;