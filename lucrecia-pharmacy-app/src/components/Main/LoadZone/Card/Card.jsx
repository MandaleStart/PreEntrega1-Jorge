/* eslint-disable react/prop-types */
const Card = ({ greeting }) => {
    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={greeting.image} alt={greeting.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{greeting.name}</h5>
                    <a href="#" className="btn btn-primary">Comprar</a>
                    <a href="#" className="btn btn-danger">Favoritos</a>
                </div>
        </div>
    )
};
export default Card;