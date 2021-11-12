import React, { useState } from "react";
import { Link } from "react-router-dom";

interface DeliveryContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  unit: string;
  country: string;
  state: string;
  city: string;
  suburb: string;
  postCode: string;
}
export default function Shipping() {
  let [firstName, setFirstName] = useState<string>("");
  let [lastName, setLastName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [phone, setPhone] = useState<string>("");
  let [address, setAddress] = useState<string>("");
  let [unit, setUnit] = useState<string>("");
  let [country, setCountry] = useState<string>("");
  let [state, setState] = useState<string>("");
  let [city, setCity] = useState<string>("");
  let [suburb, setSuburb] = useState<string>("");
  let [postCode, setPostCode] = useState<string>("");
  let [deliveryContact, setDeliveryContact] = useState<DeliveryContact | null>(
    null
  );

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
    setPhone(ev.target.value);
  }

  function getAddress(ev: React.ChangeEvent<HTMLInputElement>) {
    setAddress(ev.target.value);
  }

  function getUnit(ev: React.ChangeEvent<HTMLInputElement>) {
    setUnit(ev.target.value);
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
    setPostCode(ev.target.value);
  }

  function submitDeliveryContact(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    setDeliveryContact({
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
    });
    console.log(deliveryContact);
  }

  return (
    <div className="w-full grid gap-y-4">
      <h1 className="font-semibold h-12 bg-gray-500 text-white pl-2">
        DELIVERY CONTACT
      </h1>

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
      <button
        type="submit"
        className="button bg-transparent font-bold py-2 px-4 rounded-full"
        onClick={submitDeliveryContact}
      >
        Next
      </button>
    </div>
  );
}
