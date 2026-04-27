import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SimulatorPage from "./pages/SimulatorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/simulator" element={<SimulatorPage />} />
    </Routes>
  );
}


export default App;

