const Item = ({ producto }) => {
const renderProducto = producto.image ?? "https://i.ibb.co/MpG69V7/nofoto.png";

    return (
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={renderProducto} alt={producto.name} />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
          <a href="#" className="btn btn-danger">
            Favoritos
          </a>
        </div>
      </div>
    );
  };
  
  export default Item;