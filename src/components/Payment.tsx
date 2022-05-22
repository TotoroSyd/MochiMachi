import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";

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
  const { setArray, setTotal } = useContext(OrderContext);

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

  async function submitPaymentDetails(ev: React.MouseEvent<HTMLButtonElement>) {
    // No ev.preventDefault(); to allow Order Confirmation page to load
    ev.preventDefault();
    setPayment({ cardName, cardNumber, expDate, expYear, cvc });
    setArray([]);
    setTotal(0);
    // eslint-disable-next-line no-restricted-globals
    // location.href = "/orderconfirmation";
    // handle respone from fetchcreatecontract

    let createContractRes = async () => {
      interface fetchOp {
        method: string;
        headers: { [key: string]: string };
        body: any;
      }

      interface PromiseRes {
        id: string;
        success: boolean;
        errors: string;
      }
      let url = "http://localhost:3001/createAccount";
      let options: fetchOp = {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: "test creating account from MochiMachi",
      };

      // function status(response: PromiseRes) {
      //   // Check status and return resolve or reject
      //   if (response.success) {
      //     return Promise.resolve(response);
      //   } else {
      //     return Promise.reject(new Error(response.errors));
      //   }
      // }
      // function jsonn(response: any) {
      //   return response.json();
      // }

      let fetchPromise;
      //Handle promise
      try {
        fetchPromise = await fetch(url, options);
        return fetchPromise.json();
      } catch (error) {
        console.log("Request failed", error);
      }

      // fetchPromise.then(status)
      //   .then(jsonn).catch((error:any)=> {console.log('Request failed', error)})
      //   return '';
    };
    let res = await createContractRes();
    console.log("createContractRes: ", res);
  }

  return (
    <div className="py-6 grid gap-y-4">
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
      <Link to="/orderconfirmation" target="_blank">
        <button
          type="submit"
          className="button bg-transparent font-bold py-2 px-4 rounded-full"
          onClick={submitPaymentDetails}
        >
          Pay
        </button>
      </Link>
    </div>
  );
}
