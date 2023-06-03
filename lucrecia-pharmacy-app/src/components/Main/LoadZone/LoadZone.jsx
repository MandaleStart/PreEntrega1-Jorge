import { useEffect, useState } from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Card from './Card/Card';

const URL_PROD = "http://127.0.0.1:3000/productos/";

const LoadZone = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(URL_PROD, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => setProductos(data));
    }, []);

    return (
        <div className="col-8 col-order-2">
            <ItemListContainer greeting="este es el ItemListContainer con un mensaje en greeting" />
            <div className="Cards-List">
                {productos.map((producto) => (
                    <div key={producto.id}>
                        <Card data={producto} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoadZone;