import { Link } from "react-router-dom";
import logoh from "./horizontal_blanco.svg";
import "./Navbar.css";
function Navbar(){
    return( 
        <>
        <header>
            <div className="logo">
               <img src={logoh} alt="Logo Hotelia blanco"></img>
            </div>
            <nav>
              <Link to="/" className="menu-item">Inicio</Link>
              <Link to="/habitaciones" className="menu-item">Habitaciones</Link>
              <Link to="/habitaciones/1" className="menu-item">Habitacion x</Link>

              <Link to="/login" className="btn-azul"><i className="fa-solid fa-user"></i>Iniciar sesión</Link>

              
            </nav>
        </header>
        </>
    );
}

export default Navbar;