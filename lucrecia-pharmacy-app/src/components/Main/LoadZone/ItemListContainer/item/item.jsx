/* eslint-disable react/prop-types */
const Item = ({ producto }) => {
const renderProducto = producto.image ?? "https://i.ibb.co/MpG69V7/nofoto.png";

    return (
      <div className="card sm" style={{ width: '18rem' }}>
        <img className="card-img-top" src={renderProducto} alt={producto.name} />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <button to="#" className="btn btn-success">
             $ {producto.cost}
            </button>
          <button to="#" className="btn btn-warning">
            Favoritos
            </button>
        </div>
      </div>
    );
  };
  
  export default Item;