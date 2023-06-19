import { useState } from 'react';
const ProductEdit = () => {
    const [producto, setProducto] = useState({
        id: '',
        nombre: '',
        marca: '',
        costo: '',
        stock: '',
        categoria: '',
        subcategoria: '',
        imagen: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto({ ...producto, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(producto); // enviarlos a la API de productos
      };
    
    return(
        <div className="col-10 col-order-1">
        <h1>Agregar</h1>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input type="text" name="id" value={producto.id} onChange={handleChange} />
          </label>
          <br />
          <label>
            Nombre:
            <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} />
          </label>
          <br />
          <label>
            Marca:
            <input type="text" name="marca" value={producto.marca} onChange={handleChange} />
          </label>
          <br />
          <label>
            Costo:
            <input type="text" name="costo" value={producto.costo} onChange={handleChange} />
          </label>
          <br />
          <label>
            Stock disponible:
            <input type="text" name="stock" value={producto.stock} onChange={handleChange} />
          </label>
          <br />
          <label>
            Categoría:
            <input type="text" name="categoria" value={producto.categoria} onChange={handleChange} />
          </label>
          <br />
          <label>
            Sub Categoría:
            <input type="text" name="subcategoria" value={producto.subcategoria} onChange={handleChange} />
          </label>
          <br />
          <label>
            Imagen:
            <input type="text" name="imagen" value={producto.imagen} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Guardar Producto</button>
        </form>
      </div>
    );
  }
export default ProductEdit;