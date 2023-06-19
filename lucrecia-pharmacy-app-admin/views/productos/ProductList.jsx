import { useState, useEffect } from 'react';
function ProductList() {
    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("http://127.0.0.1:3000/productos/");
          const data = await response.json();
          setProductos(data);
          setCargandoProductos(false);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchData();
    }, []);
  
    if (cargandoProductos) {
      return <div>Cargando productos...</div>;
    }
  
    const handleClick = (productoId) => {
      console.log(`Producto seleccionado: ${productoId}`);
      // Realiza las acciones  cuando se hace clic en un producto
    };
    
  return (
    <div className="col-10 col-order-2">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Costo</th>
            <th>Categoría</th>
            <th>Sub-Categoría</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
        {productos.map(producto => (
            <tr key={producto.id} onClick={() => handleClick(producto.id)}>
              <td>{producto.id}</td>
              <td>{producto.name}</td>
              <td>{producto.brand}</td>
              <td>{producto.cost}</td>
              <td>{producto.categoria.nombre}</td>
              <td>{producto.categoria.sub}</td>
              <td>{producto.stock}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
