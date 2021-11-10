// import logo from "./logo.svg";
// import "./App.css";

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CheckOut from "./components/CheckOutPage";
import CheckOutReview from "./components/CheckOutReview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="review" element={<CheckOutReview />} />
      </Routes>
    </div>
  );
}

export default App;
