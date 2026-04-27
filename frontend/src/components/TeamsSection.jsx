import "../styles/TeamsSection.css";

function TeamsSection() {
    return (
        <section className="teams-section">
        <div className="teams-section__header">
            <span className="teams-section__eyebrow">Datos del simulador</span>
            <h2 className="teams-section__title">Equipos y plantillas con lógica real</h2>
            <p className="teams-section__description">
            TactiCup 26 modela cada selección a partir de sus jugadores, posiciones
            y nivel general, para que cada partido combine incertidumbre con coherencia competitiva.
            </p>
        </div>

        <div className="teams-section__layout">
            <article className="teams-section__panel">
            <h3 className="teams-section__panel-title">Qué incluye cada selección</h3>

            <ul className="teams-section__list">
                <li>Jugadores organizados por su posición dentro del campo</li>
                <li>Nombre, número y nacionalidad visibles en la simulación</li>
                <li>Estadísticas individuales para influir en jugadas y eventos</li>
                <li>Media global del equipo para representar su fortaleza</li>
            </ul>
            </article>

            <article className="teams-section__panel teams-section__panel--accent">
            <h3 className="teams-section__panel-title">Qué busca este modelo</h3>
            <p className="teams-section__panel-text">
                El objetivo es que los equipos más fuertes tengan ventaja natural,
                pero sin eliminar sorpresas, errores, goles inesperados y momentos
                impredecibles que hacen realista un partido de fútbol.
            </p>
            </article>
        </div>
        </section>
    );
}

export default TeamsSection;