import logo from "../assets/images/logotacticup26fondo.png";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <span className="hero__badge">Interactive World Cup Simulator 2026</span>
                <h1 className="hero__title">TactiCup 26</h1>
                <p className="hero__subtitle">Where strategy defines the game.</p>
                <p className="hero__description">
                Simulador táctico del Mundial 2026 con visualización en tiempo real,
                motor probabilístico de eventos y control estratégico del equipo por parte del usuario.
                </p>

                <div className="hero__actions">
                    <button className="btn btn--primary">Comenzar</button>
                    <button className="btn btn--secondary">Ver arquitectura</button>
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