export default function Payment() {
  return (
    <div>
      <h1 className="font-semibold">PAYMENT DETAILS</h1>
      <div className="w-full grid gap-y-4">
        <input
          className="w-full border-2 h-12"
          placeholder="Name on card"
          type="text"
        ></input>
        <input
          className="w-full border-2 h-12"
          placeholder="Card number"
          type="text"
        ></input>
        <div className="grid grid-cols-4 gap-4">
          <input
            placeholder="Exp Date"
            type="text"
            className="border-2 h-12"
          ></input>
          <input
            placeholder="Exp Year"
            type="text"
            className="border-2 h-12"
          ></input>
          <input
            placeholder="CVC"
            type="text"
            className="border-2 h-12"
          ></input>
        </div>
      </div>
    </div>
  );
}
