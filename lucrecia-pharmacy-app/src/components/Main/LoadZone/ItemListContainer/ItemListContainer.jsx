import { useEffect, useState } from 'react';
import Item from './item/item'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ categoria  }) => {
  {/*, stock ,price ,brands*/}
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/productos/');
      const data = await response.json();
      setProductos(data);

    } catch (error) {
      console.log('Error al obtener los productos:', error);
    }
  };

  const filteredProductos = categoria
  ? categoria === "all"
    ? productos
    : productos.filter((producto) => producto.categoria.id === categoria)
  : [];

  return (
    <div className="container row">
      {filteredProductos.map((producto) => (
        <Link className="col-3 " key={producto.id} to={`/item/${producto.id}`} style={{ textDecoration: 'none' }}>
          <Item producto={producto} />
        </Link>
      ))}
    </div>
  );
};

export default ItemListContainer;