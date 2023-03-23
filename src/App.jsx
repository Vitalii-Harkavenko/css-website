import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sectionTwo" element={<SectionTwo />}/>
      <Route path="/sectionThree" element={<SectionThree />}/>
      <Route path="/sectionFour" element={<SectionFour />}/>
    </Routes>
  )
}