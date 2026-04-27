import "../styles/HiWSection.css";



function HowItWorksSection() {
    return (
        <section className="how-it-works">
        <div className="how-it-works__header">
            <span className="how-it-works__eyebrow">Funcionamiento</span>
            <h2 className="how-it-works__title">Cómo funciona TactiCup 26</h2>
            <p className="how-it-works__description">
            La experiencia está pensada para que el usuario tome decisiones estratégicas
            y el sistema transforme esas elecciones en una simulación visual del partido.
            </p>
        </div>

        <div className="how-it-works__grid">
            <article className="how-it-works__card">
            <span className="how-it-works__step">01</span>
            <h3 className="how-it-works__card-title">Elige las selecciones</h3>
            <p className="how-it-works__card-text">
                Selecciona los equipos que participarán en el partido y prepara el
                enfrentamiento inicial.
            </p>
            </article>

            <article className="how-it-works__card">
            <span className="how-it-works__step">02</span>
            <h3 className="how-it-works__card-title">Define la táctica</h3>
            <p className="how-it-works__card-text">
                Ajusta formación, presión, intensidad y enfoque estratégico antes de
                iniciar la simulación.
            </p>
            </article>

            <article className="how-it-works__card">
            <span className="how-it-works__step">03</span>
            <h3 className="how-it-works__card-title">Observa el partido en vivo</h3>
            <p className="how-it-works__card-text">
                Sigue los movimientos, eventos y cambios del marcador en tiempo real
                sobre una cancha en vista superior.
            </p>
            </article>
        </div>
        </section>
    );
}

export default HowItWorksSection;