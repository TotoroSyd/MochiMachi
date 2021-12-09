// import logo from "./logo.svg";
// import "./App.css";

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CheckOut from "./components/CheckOutPage";
import CheckOutReview from "./components/CheckOutReview";
import Payment from "./components/Payment";
import ModalContextProvider from "./contexts/ModalContext";

function App() {
  return (
    <ModalContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="payment" element={<Payment />} />
          <Route path="review" element={<CheckOutReview />} />
        </Routes>
      </div>
    </ModalContextProvider>
  );
}

export default App;
