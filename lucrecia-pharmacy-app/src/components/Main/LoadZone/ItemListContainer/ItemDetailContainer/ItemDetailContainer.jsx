import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/productos/${id}`);
      const data = await response.json();
      setProducto(data);
    } catch (error) {
      console.log('Error al obtener el producto:', error);
    }
  };

  if (!producto) {
    return <div>Cargando...</div>;
  }
  const renderProducto = producto.image ?? "https://i.ibb.co/MpG69V7/nofoto.png";
  return (
    <main className="container row">
      <div className='col-6 col-order-1'>
        <img src={renderProducto} alt={producto.name} />
      </div>
      <div className='col-6 col-order-2'>
        <h1>{producto.name}</h1>
        <p>Stock: {producto.stock} disponibles</p>
        <p>${producto.cost}</p>
        <button>Agregar al Carrito</button>
        <button>Agregar a Favoritos</button>
      </div>
    </main>
  );
};

export default ItemDetailContainer;