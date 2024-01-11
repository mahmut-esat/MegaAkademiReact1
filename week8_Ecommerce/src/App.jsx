import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Product from "./components/Product"
import Slider from "./components/Slider"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
