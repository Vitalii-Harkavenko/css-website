import { Route, Routes } from "react-router-dom";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<SectionOne />}/>
            <Route path="/sectionTwo" element={<SectionTwo />}/>
        </Routes>
    )
}