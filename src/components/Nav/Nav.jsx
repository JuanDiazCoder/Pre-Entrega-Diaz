import CardWidget from '../CardWidget/CardWidget';
import './Nav.css'

// eslint-disable-next-line react/prop-types
function Nav({cardCount,setCardCount, title}) {

  const handleClick = () => {
    setCardCount( x => (x + 1));
  } 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="navbar-brand mb-1 ">{title}</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Carrito</a>
            </li>
            <CardWidget cardCount={cardCount}/> 
            <button className="btn btn-primary nav-item" onClick={handleClick}>+</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;