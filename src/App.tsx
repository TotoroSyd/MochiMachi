// import logo from "./logo.svg";
// import "./App.css";

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CheckOut from "./components/CheckOutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
