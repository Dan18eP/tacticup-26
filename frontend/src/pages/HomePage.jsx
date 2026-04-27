import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/HowItWorksSection";
import TeamsSection from "../components/TeamsSection";
import TacticsSection from "../components/TacticsSection";
import FinalCtaSection from "../components/FinalCtaSection";

function HomePage() {
    return (
        <main className="app">
            <Navbar />

        <div className="container app-shell">
            <section id="inicio">
                <Hero />
            </section>

            <section id="funcionamiento">
                <HowItWorksSection />
            </section>

            <section id="equipos">
                <TeamsSection />
            </section>

            <section id="tacticas">
                <TacticsSection />
            </section>

        
            <FinalCtaSection />
        
        </div>
        </main>
    );
}

export default HomePage;