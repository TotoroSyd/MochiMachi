import Nav from "./Nav";
import Payment from "./Payment";
import Shipping from "./Shipping";
import OrderSummary from "./OrderSummary";

export default function CheckOut() {
  return (
    <div>
      <Nav></Nav>
      <div className="grid grid-cols-3 gap-10 px-28 py-6">
        <form className="col-span-2">
          <Shipping></Shipping>
          <Payment></Payment>
        </form>
        <div className="flex flex-col gap-y-10">
          <OrderSummary></OrderSummary>
          <button
            type="submit"
            className="button bg-transparent font-bold py-2 px-4 rounded-full"
          >
            REVIEW
          </button>
        </div>
      </div>
    </div>
  );
}
