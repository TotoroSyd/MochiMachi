import fireworkIcon from "../media/fireworkIcon.svg";
export default function OrderConfirmation() {
  return (
    <div className="bg-green-50 h-screen flex flex-row justify-center">
      <div className="shadow-2xl w-3/5 h-1/2 bg-white self-center py-6">
        <img
          src={fireworkIcon}
          alt="firework icon"
          className="w-full h-1/2 object-center my-4"
        />
        <h1 className="text-4xl font-bold text-green-500 text-center">
          Your order is complete!
        </h1>
        <p className="text-center py-2">
          You will be receiving a confirmation email with order details.
        </p>
      </div>
    </div>
  );
}
