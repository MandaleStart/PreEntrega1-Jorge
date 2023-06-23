import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa/index.esm';

const URL_ORDER = 'http://127.0.0.1:3000/pedidos/';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [showDelivered, setShowDelivered] = useState(true);
  const [showCancelled, setShowCancelled] = useState(true);
  const [showPending, setShowPending] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(URL_ORDER);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error al obtener los pedidos:', error);
      }
    };

    fetchOrders();
  }, []);

  const deleteOrder = async (id) => {
    fetch(`/pedidos/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log('Pedido eliminado exitosamente');
        } else {
          console.error('Error al eliminar el pedido');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud DELETE', error);
      });
  };

  const getOrderStatusClass = (status) => {
    if (status === 'entregado') {
      return 'text-success';
    } else if (status === 'cancelado') {
      return 'text-danger';
    } else {
      return 'text-warning';
    }
  };

  const toggleShowDelivered = () => {
    setShowDelivered(!showDelivered);
  };

  const toggleShowCancelled = () => {
    setShowCancelled(!showCancelled);
  };

  const toggleShowPending = () => {
    setShowPending(!showPending);
  };

  const filteredOrders = orders.filter(order => {
    if (order.status === 'entregado' && !showDelivered) {
      return false;
    }
    if (order.status === 'cancelado' && !showCancelled) {
      return false;
    }
    if (order.status !== 'entregado' && order.status !== 'cancelado' && !showPending) {
      return false;
    }
    return true;
  });

  return (
    <div className='bg-white'>
      <div className="d-flex justify-content-between">
        <h2>Lista de Pedidos</h2>
        <div>
          <button className='btn btn-success' onClick={toggleShowDelivered}>
            {showDelivered ? 'Ocultar Entregados' : 'Mostrar Entregados'}
          </button>
          <button className='btn btn-danger' onClick={toggleShowCancelled}>
            {showCancelled ? 'Ocultar Cancelados' : 'Mostrar Cancelados'}
          </button>
          <button className='btn btn-warning' onClick={toggleShowPending}>
            {showPending ? 'Ocultar Pendientes' : 'Mostrar Pendientes'}
          </button>
        </div>
      </div>
      {filteredOrders.length === 0 ? (
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
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.usuario}</td>
                <td>{order.fecha_creacion}</td>
                <td>{order.fecha_entrega ? order.fecha_entrega : '-'}</td>
                <td className={`text-capitalize ${getOrderStatusClass(order.status)}`}>{order.status}</td>
                <td>
                  <button className='btn btn-primary'>
                    <Link to={`/pedidos/${order.id}`} className='text-white'>
                      <FaSearch></FaSearch>Ver Pedido
                    </Link>
                  </button>
                  <button className='btn btn-danger' onClick={() => deleteOrder(order.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderList;