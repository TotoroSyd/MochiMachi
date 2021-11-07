export default function Payment() {
  return (
    <div className="py-6 grid gap-y-4">
      <h1 className="font-semibold h-12 bg-gray-500 text-white pl-2">
        PAYMENT DETAILS
      </h1>

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
      <div className="grid grid-cols-3 gap-4">
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
        <input placeholder="CVC" type="text" className="border-2 h-12"></input>
      </div>
    </div>
  );
}
