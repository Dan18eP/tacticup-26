import "../styles/TacticsSection.css";

function TacticsSection() {
    return (
        <section className="tactics-section">
        <div className="tactics-section__header">
            <span className="tactics-section__eyebrow">Interacción del usuario</span>
            <h2 className="tactics-section__title">
            El usuario dirige la estrategia del partido
            </h2>
            <p className="tactics-section__description">
            TactiCup 26 no busca que el usuario controle manualmente a cada jugador,
            sino que tome decisiones tácticas que modifiquen el comportamiento colectivo del equipo.
            </p>
        </div>

        <div className="tactics-section__grid">
            <article className="tactics-section__card">
            <h3 className="tactics-section__card-title">Formación</h3>
            <p className="tactics-section__card-text">
                Configura esquemas como 4-3-3, 4-4-2 o variantes más ofensivas y defensivas.
            </p>
            </article>

            <article className="tactics-section__card">
            <h3 className="tactics-section__card-title">Presión</h3>
            <p className="tactics-section__card-text">
                Decide si el equipo espera en bloque medio, defiende bajo o presiona alto.
            </p>
            </article>

            <article className="tactics-section__card">
            <h3 className="tactics-section__card-title">Intensidad</h3>
            <p className="tactics-section__card-text">
                Ajusta qué tan agresivo será el equipo en ataque, recuperación y disputa del balón.
            </p>
            </article>

            <article className="tactics-section__card">
            <h3 className="tactics-section__card-title">Estilo de juego</h3>
            <p className="tactics-section__card-text">
                Define si el partido se orienta más hacia posesión, equilibrio o juego directo.
            </p>
            </article>
        </div>
        </section>
    );
}

export default TacticsSection;