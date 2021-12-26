import { IOrder } from "../contexts/OrderContext";
interface Props {
  orderArr: Array<IOrder>;
}
// can't pass directly an array to component function. an array must be warapped inside an object to be component's prop
export default function OrderSummary({ orderArr }: Props) {
  console.log("orderArr in OrderSummary: ", orderArr);

  return (
    <div>
      <h1 className="font-semibold h-12 bg-gray-500 text-white pl-2">
        ORDER SUMMARY
      </h1>

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
        <span>1000</span>
      </div>
    </div>
  );
}
