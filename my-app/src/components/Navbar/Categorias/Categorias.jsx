
import { Link } from "react-router-dom";
const Categorias = () => {
  return (
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <button className="btn btn-secondary"><Link className="nav-link" to={"/"}>Inicio</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/1"}>Accion</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/2"}>Estrategia</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/3"}>Lucha</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/4"}>Multiplayer</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/5"}>Shooter</Link></button>
      </li>
    </ul>
  );
}

export default Categorias;
