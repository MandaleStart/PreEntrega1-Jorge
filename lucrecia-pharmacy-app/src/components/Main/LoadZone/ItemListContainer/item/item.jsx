/* eslint-disable react/prop-types */
import { FaCartPlus, FaHeart } from 'react-icons/fa/index.esm';
const Item = ({ producto }) => {
  const renderProducto = producto.image ?? "https://i.ibb.co/MpG69V7/nofoto.png";

  return (
    <div className="card h-100 " >
      <img className="card-img-top" src={renderProducto} alt={producto.name} />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
      </div>
      <div className="card-footer d-flex">
      <div className=''>$ {producto.cost}</div>
        <button to="#" className="btn btn-success">
          <FaCartPlus />
        </button>
        <button to="#" className="btn btn-warning ">
          <FaHeart />Favoritos
        </button>
      </div>
    </div>
  );
};

export default Item;