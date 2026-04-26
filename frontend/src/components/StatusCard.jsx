function StatusCard() {
    return (
        <section className="status-card">
            <h2 className="status-card__title">Estado actual del proyecto</h2>
            <div className="status-grid">
                <article className="status-item">
                    <span className="status-item__label">Frontend</span>
                    <strong className="status-item__value">En construcción</strong>
                </article>

                <article className="status-item">
                    <span className="status-item__label">Backend</span>
                    <strong className="status-item__value">Configurado</strong>
                </article>

                <article className="status-item">
                    <span className="status-item__label">Tiempo real</span>
                    <strong className="status-item__value">SSE definido</strong>
                </article>

                <article className="status-item">
                    <span className="status-item__label">Modo de juego</span>
                    <strong className="status-item__value">Dirección táctica</strong>
                </article>
            </div>
        </section>
    );
}

export default StatusCard;