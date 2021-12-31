import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import { useContext } from "react";
import { OrderContext, IOrderProps } from "../contexts/OrderContext";
import Nav from "./Nav";
import {
  DeliveryContext,
  IDeliveryContextValue,
} from "../contexts/DeliveryContext";

export default function CheckOutReview() {
  const { orderArray, total } = useContext<IOrderProps>(OrderContext);
  const { delivery } = useContext<IDeliveryContextValue>(DeliveryContext);

  if (orderArray === null) {
    return null;
  }
  if (delivery === null) {
    return null;
  }

  return (
    <>
      <Nav></Nav>
      <div className="grid grid-cols-3 gap-8 px-28 py-6">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold py-2">
            {" "}
            Review Your Order and Pay
          </h1>
          <>
            <div>
              <h2 className="text-xl font-semibold py-4">Delivery</h2>
              {delivery.map((el) => {
                return (
                  <>
                    <div>
                      <p>
                        {el.firstName} {el.lastName}
                      </p>
                      <p>{el.phone}</p>
                      <p>{el.email}</p>
                    </div>
                    <div className="py-4">
                      <p>{el.address}</p>
                      <p>{el.unit ? el.unit : ""}</p>
                      <p>
                        {el.suburb}
                        {", "}
                        {el.city}
                        {", "}
                        {el.state}
                        {", "}
                        {el.postCode}
                        {", "}
                        {el.country}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </>
          <>
            <h2 className="text-xl font-semibold pt-4 pb-2">Payment</h2>
            <Payment />
          </>
        </div>
        <div>
          {<OrderSummary orderArr={orderArray} total={total}></OrderSummary>}
        </div>
      </div>
    </>
  );
}
