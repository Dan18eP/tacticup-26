import "../styles/navbar.css";
import logo from "../assets/images/tacticup26logo.png";

function Navbar() {
    return (
        <header className="navbar">
        <div className="navbar__container container">
            <div className="navbar__brand">
            <img
                src={logo}
                alt="Logo de TactiCup 26"
                className="navbar__logo"
            />
            <div className="navbar__brand-text">
                <span className="navbar__title">TactiCup 26</span>
                <span className="navbar__tagline">Where strategy defines the game</span>
            </div>
            </div>

            <nav className="navbar__nav" aria-label="Navegación principal">
            <a href="#inicio" className="navbar__link">Inicio</a>
            <a href="#simulador" className="navbar__link">Simulador</a>
            <a href="#equipos" className="navbar__link">Equipos</a>
            <a href="#tacticas" className="navbar__link">Tácticas</a>
            </nav>

            <div className="navbar__actions">
            <button className="btn btn--primary">Comenzar</button>
            </div>
        </div>
        </header>
    );
}

export default Navbar;