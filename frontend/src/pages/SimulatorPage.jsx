import { Link } from "react-router-dom";
import "../styles/SimulatorPage.css";
import fieldImage from "../assets/images/field.jpg";

function SimulatorPage() {
    return (
        <main className="simulator-page">
            <div className="simulator-page__container">

                <div className="simulator-page__topbar">
                    <Link to="/" className="simulator-page__back">
                        ← Volver al inicio
                    </Link>

                    <div className="simulator-page__brand">
                        <span className="simulator-page__brand-name">TactiCup 26</span>
                        <span className="simulator-page__brand-tagline">World Cup match simulator</span>
                    </div>

                    <button className="simulator-page__login btn btn--secondary">
                        Login
                    </button>
                </div>

                <header className="simulator-page__header">
                    <div className="simulator-page__team simulator-page__team--left">
                        <span className="simulator-page__team-name">COL</span>
                        <span className="simulator-page__team-score">0</span>
                    </div>

                    <div className="simulator-page__match-center">
                        <span className="simulator-page__match-time">00:00</span>
                        <span className="simulator-page__match-status">Simulación lista</span>
                    </div>

                    <div className="simulator-page__team simulator-page__team--right">
                        <span className="simulator-page__team-score">0</span>
                        <span className="simulator-page__team-name">ARG</span>
                    </div>
                </header>

                <section className="simulator-page__content">
                    <div className="simulator-page__field-wrapper">
                        <div
                            className="simulator-page__field"
                            style={{ backgroundImage: `url(${fieldImage})` }}
                        >
                            {/* Colombia */}
                            <div className="player-marker player-marker--red" style={{ top: "50%", left: "8%" }}><span>1</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "18%", left: "20%" }}><span>2</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "35%", left: "22%" }}><span>3</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "63%", left: "22%" }}><span>4</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "82%", left: "20%" }}><span>5</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "28%", left: "38%" }}><span>6</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "50%", left: "40%" }}><span>8</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "72%", left: "38%" }}><span>10</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "20%", left: "56%" }}><span>7</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "50%", left: "58%" }}><span>9</span></div>
                            <div className="player-marker player-marker--red" style={{ top: "80%", left: "56%" }}><span>11</span></div>

                            {/* Argentina */}
                            <div className="player-marker player-marker--blue" style={{ top: "50%", left: "92%" }}><span>1</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "18%", left: "80%" }}><span>2</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "35%", left: "78%" }}><span>3</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "63%", left: "78%" }}><span>4</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "82%", left: "80%" }}><span>5</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "28%", left: "62%" }}><span>6</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "50%", left: "60%" }}><span>8</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "72%", left: "62%" }}><span>10</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "20%", left: "44%" }}><span>7</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "50%", left: "42%" }}><span>9</span></div>
                            <div className="player-marker player-marker--blue" style={{ top: "80%", left: "44%" }}><span>11</span></div>

                            <div className="ball-marker" style={{ top: "48%", left: "50%" }} />
                        </div>
                    </div>

                    <aside className="simulator-page__sidebar">
                        <div className="sim-card">
                            <h2 className="sim-card__title">Controles</h2>
                            <div className="sim-card__actions">
                                <button className="btn btn--primary">Iniciar</button>
                                <button className="btn btn--secondary">Pausar</button>
                                <button className="btn btn--secondary">Reiniciar</button>
                            </div>
                        </div>

                        <div className="sim-card">
                            <h2 className="sim-card__title">Eventos</h2>
                            <ul className="sim-events">
                                <li className="sim-events__item">00:00 Partido preparado</li>
                                <li className="sim-events__item">00:00 Alineaciones cargadas</li>
                                <li className="sim-events__item">00:00 Esperando inicio</li>
                            </ul>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}

export default SimulatorPage;