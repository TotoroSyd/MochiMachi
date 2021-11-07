export default function Shipping() {
  return (
    <div>
      <h1 className="font-semibold">DELIVERY CONTACT</h1>
      <div className="w-full grid gap-y-4">
        <div className="grid grid-cols-2 gap-4 h-12">
          <input
            className="border-2 h-12 pl-2"
            placeholder="First Name"
            required
            type="text"
          ></input>
          <input
            className="border-2 h-12 pl-2"
            placeholder="Last Name"
            required
            type="text"
          ></input>
        </div>
        <input
          className="border-2 w-full h-12 pl-2"
          placeholder="Email"
          required
          type="text"
        ></input>
        <input
          className="border-2 w-full h-12 pl-2"
          placeholder="Phone"
          required
          type="text"
        ></input>
        <input
          className="border-2 w-full h-12 pl-2"
          placeholder="Street Address"
          required
          type="text"
        ></input>
        <input
          className="border-2 w-full h-12 pl-2"
          placeholder="Apt/Suite/Unit (Optional)"
          type="text"
        ></input>
        <div className="grid grid-cols-2 gap-4 h-12">
          <input
            className="border-2 h-12 pl-2"
            placeholder="Country"
            required
            type="text"
          ></input>
          <input
            className="border-2 h-12 pl-2"
            placeholder="State"
            required
            type="text"
          ></input>
        </div>
        <div className="grid grid-cols-2 gap-4 h-12">
          <input
            className="border-2 h-12 pl-2"
            placeholder="City"
            required
            type="text"
          ></input>
          <input
            className="border-2 h-12 pl-2"
            placeholder="Surburb/ Province"
            required
            type="text"
          ></input>
        </div>
        <input
          className="border-2 h-12 pl-2"
          placeholder="Postal Code"
          required
          type="text"
        ></input>
      </div>
    </div>
  );
}
