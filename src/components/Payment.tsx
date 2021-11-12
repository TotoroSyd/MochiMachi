import React, { useState } from "react";
import { Link } from "react-router-dom";

interface PaymentDetails {
  cardName: string;
  cardNumber: string;
  expDate: string;
  expYear: string;
  cvc: string;
}

export default function Payment() {
  let [cardName, setCardName] = useState<string>("");
  let [cardNumber, setCardNumber] = useState<string>("");
  let [expDate, setExpDate] = useState<string>("");
  let [expYear, setExpYear] = useState<string>("");
  let [cvc, setCvc] = useState("");
  let [payment, setPayment] = useState<PaymentDetails | null>(null);

  // Functions
  function getCardName(ev: React.ChangeEvent<HTMLInputElement>) {
    setCardName(ev.target.value);
  }

  function getCardNumber(ev: React.ChangeEvent<HTMLInputElement>) {
    setCardNumber(ev.target.value);
  }

  function getExpDate(ev: React.ChangeEvent<HTMLInputElement>) {
    setExpDate(ev.target.value);
  }

  function getExpYear(ev: React.ChangeEvent<HTMLInputElement>) {
    setExpYear(ev.target.value);
  }

  function getCvc(ev: React.ChangeEvent<HTMLInputElement>) {
    setCvc(ev.target.value);
  }

  function submitPaymentDetails(ev: React.MouseEvent<HTMLButtonElement>) {
    // No ev.preventDefault(); to allow Review page to load
    setPayment({ cardName, cardNumber, expDate, expYear, cvc });
    console.log(payment);
  }

  return (
    <div className="py-6 grid gap-y-4">
      <h1 className="font-semibold h-12 bg-gray-500 text-white pl-2">
        PAYMENT DETAILS
      </h1>

      <input
        className="w-full border-2 h-12"
        placeholder="Name on card"
        type="text"
        onChange={getCardName}
      ></input>
      <input
        className="w-full border-2 h-12"
        placeholder="Card number"
        type="text"
        onChange={getCardNumber}
      ></input>
      <div className="grid grid-cols-3 gap-4">
        <input
          placeholder="03"
          type="text"
          className="border-2 h-12"
          onChange={getExpDate}
        ></input>
        <input
          placeholder="2026"
          type="text"
          className="border-2 h-12"
          onChange={getExpYear}
        ></input>
        <input
          placeholder="CVC"
          type="text"
          className="border-2 h-12"
          onChange={getCvc}
        ></input>
      </div>
      <Link to="/review">
        <button
          type="submit"
          className="button bg-transparent font-bold py-2 px-4 rounded-full"
          onClick={submitPaymentDetails}
        >
          Review
        </button>
      </Link>
    </div>
  );
}
