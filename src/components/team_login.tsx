import React, { ChangeEvent, useState } from "react";

export default function Login() {
  /* Do not combine states into an object
   ** because one at the time username, password changes.
   ** If we comebine them. state will rerender too many times which is not necessary
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Store value in state on change in formm
  const handleUserNameChange = (event: ChangeEvent) => {
    event.preventDefault();
    /* Unlike JS we cant simply use event.target.value
     ** event.target returns an HTMLElement. In TS, HTMLElement is broad and doesn't have 'value' property.
     ** must explicitly define HTMLInputElement (and extend of HTMLElement) which has 'value' property accoridng to TS
     */
    setUsername((event.target as HTMLInputElement).value);
  };

  const handlePasswordChange = (event: ChangeEvent) => {
    event.preventDefault();
    /* Unlike JS we cant simply use event.target.value
     ** event.target returns an HTMLElement. In TS, HTMLElement is broad and doesn't have 'value' property.
     ** must explicitly define HTMLInputElement (and extend of HTMLElement) which has 'value' property accoridng to TS
     */
    setPassword((event.target as HTMLInputElement).value);
  };

  // Validate user's input with data in salesforce

  return (
    <div className="login flex flex-col w-screen h-screen justify-center items-center bg-pink-500">
      <form className="flex flex-col w-96 h-96 bg-white-200 border-gray-900 border-2 justify-center items-center bg-white rounded-md shadow-2xl">
        <div className="mb-5 font-bold text-xl text-pink-500">
          MochiMachi Team Login
        </div>

        <label className="flex flex-col my-2 w-4/5 justify-center">
          <span className="text-gray-700">Username</span>
          <input
            className="form-input mt-1 px-2 block border-pink-500 border-2"
            placeholder="Happy.Mochi"
            type="text"
            onChange={handleUserNameChange}
          ></input>
        </label>

        <label className="flex flex-col my-2 w-4/5 justify-center">
          <span className="text-gray-700">Password</span>
          <input
            className="form-input mt-1 px-2 block border-pink-500 border-2"
            placeholder="****"
            type="text"
            onChange={handlePasswordChange}
          ></input>
        </label>

        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mt-5 rounded-full w-3/12"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
