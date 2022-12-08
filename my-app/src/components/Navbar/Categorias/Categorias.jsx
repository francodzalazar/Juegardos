
import { Link } from "react-router-dom";
const Categorias = () => {
  return (
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <button className="btn btn-secondary"><Link className="nav-link" to={"/"}>Inicio</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/Accion"}>Accion</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/Deportes"}>Deportes</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/Lucha"}>Lucha</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/Multiplayer"}>Multiplayer</Link></button>
      </li>
      <li className="nav-item">
      <button className="btn btn-secondary"><Link className="nav-link" to={"/category/Shooter"}>Shooter</Link></button>
      </li>
    </ul>
  );
}

export default Categorias;
