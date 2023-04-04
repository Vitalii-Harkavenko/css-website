import { Route, Routes } from "react-router-dom";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import LandingPage from "./components/sectionOnePages/LandingPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<SectionOne />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/sectionTwo" element={<SectionTwo />} />
        </Routes>
    )
}