import { Link } from "react-router-dom";
import "../styles/FinalCtaSection.css";

function FinalCtaSection() {
    return (
        <section className="final-cta-section">
        <div className="final-cta-section__content">
            <span className="final-cta-section__eyebrow">Próximo paso</span>

            <h2 className="final-cta-section__title">
            Prepárate para dirigir el partido
            </h2>

            <p className="final-cta-section__description">
            TactiCup 26 combina estrategia, datos y visualización en tiempo real
            para ofrecer una experiencia distinta a la de un videojuego tradicional.
            Explora la propuesta del proyecto y prepárate para entrar al simulador.
            </p>

            <div className="final-cta-section__actions">
                <Link to="/simulator" className="btn btn--primary">Ir al simulador</Link>
            </div>
        </div>
        </section>
    );
}

export default FinalCtaSection;