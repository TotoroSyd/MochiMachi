import { IOrder } from "../contexts/OrderContext";
interface Props {
  orderArr: Array<IOrder>;
  total: number;
}
// can't pass directly an array to component function. an array must be warapped inside an object to be component's prop
export default function OrderSummary({ orderArr, total }: Props) {
  // console.log("orderArr in OrderSummary: ", orderArr);

  return (
    <div>
      <h1 className="text-2xl font-bold py-2">Order Summary</h1>

      {orderArr.map((el) => {
        return (
          <div key={el.product}>
            <div className="font-bold" key={el.product + "0"}>
              {el.product}
            </div>
            <div key={el.product + "1"} className="grid grid-cols-2">
              <span>Quantity: </span>
              <span>{el.quantity}</span>
            </div>
            <div key={el.product + "2"} className="grid grid-cols-2">
              <span>SubTotal: </span>
              <span>{el.subtt}</span>
            </div>
            <hr className="dashed"></hr>
          </div>
        );
      })}
      <div className="text-2xl font-semibold py-4 grid grid-cols-2">
        <span>Total</span>
        <span>{total}</span>
      </div>
    </div>
  );
}
