import Nav from "./Nav";
import { useContext } from "react";
import { OrderContext, IOrderProps } from "../contexts/OrderContext";
import Delivery from "./Delivery";
import OrderSummary from "./OrderSummary";

export default function CheckOut() {
  const { orderArray, total } = useContext<IOrderProps>(OrderContext);

  if (orderArray === null) {
    return null;
  }

  return (
    <div>
      <Nav></Nav>
      <div className="grid grid-cols-3 gap-10 px-28">
        <form className="col-span-2">
          <Delivery></Delivery>
        </form>
        <div className="flex flex-col gap-y-10">
          {<OrderSummary orderArr={orderArray} total={total}></OrderSummary>}
        </div>
      </div>
    </div>
  );
}
