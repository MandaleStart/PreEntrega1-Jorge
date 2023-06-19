import { useState } from 'react';

const CartSettings = () => {
  const [metodoPago, setMetodoPago] = useState('');
  const [direccionEnvio, setDireccionEnvio] = useState('');

  const handleMetodoPagoChange = (event) => {
    setMetodoPago(event.target.value);
  };

  const handleDireccionEnvioChange = (event) => {
    setDireccionEnvio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Método de pago:', metodoPago);
    console.log('Dirección de envío:', direccionEnvio);
  };

  return (
    <div>
      <h2>Envío y Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="metodoPago">Método de pago:</label>
          <select id="metodoPago" value={metodoPago} onChange={handleMetodoPagoChange}>
            <option value="">Seleccionar método de pago</option>
            <option value="tarjeta">Tarjeta de crédito</option>
            <option value="paypal">PayPal</option>
            <option value="transferencia">Transferencia bancaria</option>
          </select>
        </div>
        <div>
          <label htmlFor="direccionEnvio">Dirección de envío:</label>
          <input
            type="text"
            id="direccionEnvio"
            value={direccionEnvio}
            onChange={handleDireccionEnvioChange}
          />
        </div>
        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
};

export default CartSettings;