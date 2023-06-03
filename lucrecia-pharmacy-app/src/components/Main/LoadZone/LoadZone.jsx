import { useEffect, useState } from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const URL_PROD = "http://127.0.0.1:3000/productos/";

const ApiFetch = async () => {
    try {
        const response = await fetch(URL_PROD, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
        return [];
    }
};

const LoadZone = () => {
    const [productos, setProductos] = useState([]);
    console.log(productos)
    useEffect(() => {
        ApiFetch().then(data => {
            setProductos(data);
        });
    }, []);

    return (
        <div className="col-8 col-order-2">
            <ItemListContainer greeting={"este es el ItemListContainer con un mensaje en greeting"} />
            {productos}
        </div>
    );
};

export default LoadZone;