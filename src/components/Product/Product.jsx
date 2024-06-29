/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

function Producto(props) {

    return (
        <div className="card mx-auto" style={{ width: '18rem' }}>
            <img src={props.imagen} className="card-img-top" alt={props.nombre} />
            <div className="card-body text-center">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Precio: €{props.precio.toFixed(3)}</p>
                <p className="card-text">Stock:{props.stock}</p>
                <button className="btn btn-primary">Añadir al carrito</button>
            </div>
        </div>
    );
}

Producto.propTypes = {
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired
};

export default Producto;