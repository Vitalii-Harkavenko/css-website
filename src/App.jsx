import { Route, Routes } from "react-router-dom";
import NavPage from "./components/NavPage";
import LandingPage from "./components/LandingPage";
import ClientReviews from "./components/ClientReviews";
import MobileVersion from "./components/MobileVersion";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<NavPage/>} />
            <Route path="/landingPage" element={<LandingPage/>} />
            <Route path="/clientReviews" element={<ClientReviews/>} />
            <Route path="/mobileVersion" element={<MobileVersion/>} />
        </Routes>
    )
}