import logo from "../assets/images/logotacticup26fondo.png";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <span className="hero__badge">Interactive World Cup Simulator 2026</span>
                <h1 className="hero__title">Simula el Mundial 2026 desde la estrategia</h1>
                <p className="hero__subtitle">TactiCup 26</p>
                <p className="hero__description">
                                    Elige selecciones, define la táctica y observa el partido en tiempo real
                    con eventos dinámicos y comportamiento basado en la calidad de cada plantilla.</p>

                <div className="hero__actions">
                    <button className="btn btn--primary">Iniciar</button>
                    <button className="btn btn--secondary">Explorar equipos</button>
                </div>
            </div>

            <div className="hero__visual">
                <img
                src={logo}
                alt="Logo oficial de TactiCup 26"
                className="hero__logo"
                />
            </div>

        </section>
    );
}

export default Hero;