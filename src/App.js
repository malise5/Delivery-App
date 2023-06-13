import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/registerForm" element={<RegisterForm />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
