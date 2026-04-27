import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatusCard from "../components/StatusCard";

function HomePage() {
    return (
        <main className="app">
        <Navbar />
        <div className="container app-shell">
            <Hero />
            <StatusCard />
        </div>
        </main>
    );
}

export default HomePage;