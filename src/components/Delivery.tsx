import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DeliveryContext, IDeliveryContact } from "../contexts/DeliveryContext";
import { OrderContext } from "../contexts/OrderContext";
import { ContractContext, IContractData } from "../contexts/ContractContext";

export default function Delivery() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>(123);
  const [address, setAddress] = useState<string>("");
  const [unit, setUnit] = useState<number>(12);
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [suburb, setSuburb] = useState<string>("");
  const [postCode, setPostCode] = useState<number>(1234);
  const { delivery, setDelivery } = useContext(DeliveryContext);
  const { orderArray, total } = useContext(OrderContext);
  const { contractData, setContractData } = useContext(ContractContext);

  let deliveryDetails: IDeliveryContact = {
    firstName: "",
    lastName: "",
    email: "",
    phone: 123,
    address: "",
    unit: 12,
    country: "",
    state: "",
    city: "",
    suburb: "",
    postCode: 1234,
  };
  // Prepare contract data to pass into POST request. Store in ContractContext
  let contractDetails: IContractData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: 123,
    address: "",
    unit: 12,
    country: "",
    state: "",
    city: "",
    suburb: "",
    postCode: 1234,
    total: 100,
    orderArray: [],
  };

  // Functions
  function getFirstName(ev: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(ev.target.value);
  }

  function getLastName(ev: React.ChangeEvent<HTMLInputElement>) {
    setLastName(ev.target.value);
  }

  function getEmail(ev: React.ChangeEvent<HTMLInputElement>) {
    setEmail(ev.target.value);
  }

  function getPhone(ev: React.ChangeEvent<HTMLInputElement>) {
    setPhone(Number(ev.target.value));
  }

  function getAddress(ev: React.ChangeEvent<HTMLInputElement>) {
    setAddress(ev.target.value);
  }

  function getUnit(ev: React.ChangeEvent<HTMLInputElement>) {
    setUnit(Number(ev.target.value));
  }

  function getCountry(ev: React.ChangeEvent<HTMLInputElement>) {
    setCountry(ev.target.value);
  }

  function getState(ev: React.ChangeEvent<HTMLInputElement>) {
    setState(ev.target.value);
  }

  function getCity(ev: React.ChangeEvent<HTMLInputElement>) {
    setCity(ev.target.value);
  }

  function getSuburb(ev: React.ChangeEvent<HTMLInputElement>) {
    setSuburb(ev.target.value);
  }

  function getPostCode(ev: React.ChangeEvent<HTMLInputElement>) {
    setPostCode(Number(ev.target.value));
  }

  function submitDeliveryContact(ev: React.MouseEvent<HTMLButtonElement>) {
    // ev.preventDefault();
    deliveryDetails = {
      firstName,
      lastName,
      email,
      phone,
      address,
      unit,
      country,
      state,
      city,
      suburb,
      postCode,
    };
    setDelivery([...delivery, deliveryDetails]);
    contractDetails = {
      firstName,
      lastName,
      email,
      phone,
      address,
      unit,
      country,
      state,
      city,
      suburb,
      postCode,
      total,
      orderArray,
    };
    setContractData([...contractData, contractDetails]);
  }

  return (
    <div className="w-full grid gap-y-4">
      <h1 className="text-2xl font-bold py-2">Delivery Contact</h1>

      <div className="grid grid-cols-2 gap-4 h-12">
        <input
          className="border-2 h-12 pl-2"
          placeholder="First Name"
          required
          type="text"
          onChange={getFirstName}
        ></input>
        <input
          className="border-2 h-12 pl-2"
          placeholder="Last Name"
          required
          type="text"
          onChange={getLastName}
        ></input>
      </div>
      <input
        className="border-2 w-full h-12 pl-2"
        placeholder="Email"
        required
        type="text"
        onChange={getEmail}
      ></input>
      <input
        className="border-2 w-full h-12 pl-2"
        placeholder="Phone"
        required
        type="text"
        onChange={getPhone}
      ></input>
      <input
        className="border-2 w-full h-12 pl-2"
        placeholder="Street Address"
        required
        type="text"
        onChange={getAddress}
      ></input>
      <input
        className="border-2 w-full h-12 pl-2"
        placeholder="Apt/Suite/Unit (Optional)"
        type="text"
        onChange={getUnit}
      ></input>
      <div className="grid grid-cols-2 gap-4 h-12">
        <input
          className="border-2 h-12 pl-2"
          placeholder="Country"
          required
          type="text"
          onChange={getCountry}
        ></input>
        <input
          className="border-2 h-12 pl-2"
          placeholder="State"
          required
          type="text"
          onChange={getState}
        ></input>
      </div>
      <div className="grid grid-cols-2 gap-4 h-12">
        <input
          className="border-2 h-12 pl-2"
          placeholder="City"
          required
          type="text"
          onChange={getCity}
        ></input>
        <input
          className="border-2 h-12 pl-2"
          placeholder="Surburb/ Province"
          required
          type="text"
          onChange={getSuburb}
        ></input>
      </div>
      <input
        className="border-2 h-12 pl-2"
        placeholder="Postal Code"
        required
        type="text"
        onChange={getPostCode}
      ></input>
      <Link to="/review">
        <button
          type="submit"
          className="button bg-transparent font-bold py-2 px-4 rounded-full"
          onClick={submitDeliveryContact}
          disabled={total === 0 ? true : false}
        >
          Review and Pay
        </button>
      </Link>
    </div>
  );
}
