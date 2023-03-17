import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";

export default function App() {
  return (
    <div className="content w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  )
}