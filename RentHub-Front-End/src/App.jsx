import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import LandlordSignup from './pages/Landlordsignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landlord-signup" element={<LandlordSignup />} />

      </Routes>
    </Router>
  );
}

export default App;
