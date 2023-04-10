import { Route, Routes } from "react-router-dom";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import LandingPage from "./components/sectionOnePages/LandingPage";
import ClientReviews from "./components/sectionOnePages/ClientReviews";
import MobileVersion from "./components/sectionOnePages/MobileVersion";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<SectionOne/>} />
            <Route path="/landingPage" element={<LandingPage/>} />
            <Route path="/clientReviews" element={<ClientReviews/>} />
            <Route path="/mobileVersion" element={<MobileVersion/>} />
            <Route path="/sectionTwo" element={<SectionTwo/>} />
        </Routes>
    )
}