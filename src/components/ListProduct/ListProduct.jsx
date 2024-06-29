import Producto from "../Product/Product";
import "./ListProduct.css";

const category = [
  {
    imagen: "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
    nombre: "Auto de carrera",
    precio: 345.600,
    stock: 3,
  },
  {
    imagen: "https://media.gq.com.mx/photos/5ffb6e84cbc9d2690de1643e/16:9/w_1920,c_limit/autos-200-mph.jpg",
    nombre: "Auto de lujo",
    precio: 210.500,
    stock: 2,
  },
  {
    imagen: "https://media.gq.com.mx/photos/604458fef0cc2a1d8969755c/16:9/w_1920,c_limit/10%20autos%20que%20quieren%20ser%20el%20mejor%20de%202021%20-%20BMW%204-Series%202021%20(1).jpg",
    nombre: "Auto deportivo",
    precio: 140.000,
    stock: 12,
  }
];

// eslint-disable-next-line react/prop-types
const Productos = ({ greetings }) => {
  return (
    <section className="container my-5">
      <h2 className="productos-title text-center mb-5">{greetings}</h2>
      <div className="row">
        {category.map((producto, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Producto
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
