import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SteamStats from "./pages/SteamStats";
import BTrNPMS from "./pages/BTrNPMS";
import AppointMed from "./pages/AppointMed";
import AdKnow from "./pages/AdKnow";
import ProjectPASIL from "./pages/ProjectPASIL";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects/steamstats"
                    element={<SteamStats />}
                />

                <Route
                    path="/projects/btrnpms"
                    element={<BTrNPMS />}
                />

                <Route
                    path="/projects/appointmed"
                    element={<AppointMed />}
                />

                <Route
                    path="/projects/adknow"
                    element={<AdKnow />}
                />

                <Route
                    path="/projects/projectpasil"
                    element={<ProjectPASIL />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;