// import logo from "./logo.svg";
// import "./App.css";

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CheckOut from "./components/CheckOutPage";
import CheckOutReview from "./components/CheckOutReview";
// import Payment from "./components/Payment";
import ModalContextProvider from "./contexts/ModalContext";
import OrderContextProvider from "./contexts/OrderContext";
import DeliveryContextProvider from "./contexts/DeliveryContext";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  return (
    <ModalContextProvider>
      <OrderContextProvider>
        <DeliveryContextProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="orderconfirmation" element={<OrderConfirmation />} />
              <Route path="review" element={<CheckOutReview />} />
            </Routes>
          </div>
        </DeliveryContextProvider>
      </OrderContextProvider>
    </ModalContextProvider>
  );
}

export default App;
