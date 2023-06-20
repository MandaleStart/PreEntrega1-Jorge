import { useState } from "react";
const CartList = (listaIDs) => {
    const [ids, setIDs] = useState(listaIDs);

    const handleDelete = (id) => {
      const updatedIDs = ids.filter((item) => item.id !== id);
      setIDs(updatedIDs);
    };
  
    return (
      
        <tbody>
          {ids.map((item) => (
            <tr key={item.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.costo}</td>
              <td>
                <button onClick={() => handleDelete(producto.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
    );
  };
export default CartList;