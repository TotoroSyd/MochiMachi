import React, { createContext, useContext, useState } from "react";
import { ModalContext, IModalContextValue } from "./ModalContext";
// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}
export interface IOrder {
  product: string;
  quantity: number;
  subtt: number;
}

export interface IOrderProps {
  handleAddToCartButton: (
    value0: string,
    value1: { [key: string]: number }
  ) => void;
  orderProductNameArr: string[];
  orderArray: Array<IOrder>;
  total: number;
}

// Export context object
export const OrderContext = createContext<IOrderProps>({
  handleAddToCartButton: (value0: string, value1: { [key: string]: number }) =>
    null,
  orderProductNameArr: [],
  orderArray: [],
  total: 0,
});

// Context wrapper component
// export default function OrderContextProvider({ children }) - js style
export default function OrderContextProvider({ children }: ChildrenProps) {
  const [orderArray, setArray] = useState<IOrder[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [orderProductNameArr, setOrderProductNameArr] = useState<string[]>([]);
  const { getPrice } = useContext<IModalContextValue>(ModalContext);

  // Functions
  function handleAddToCartButton(
    product: string,
    productTocart: { [key: string]: number }
  ): void {
    let order: IOrder = {
      product: "product",
      quantity: 2,
      subtt: 28,
    };

    // product wasn't ordered, add to cart
    if (!orderProductNameArr.includes(product)) {
      setOrderProductNameArr([...orderProductNameArr, product]);
      // capture order details
      order.product = product;
      order.quantity = productTocart[product];
      // cal subtotal of the order
      order.subtt = calSubTotal(order);
      // add order to order array (cart)
      setArray([...orderArray, order]);
      // cal total all orders
      setTotal(calTotal(order.subtt, orderArray, false));
    }
    // product was ordered then update quantity and sub total
    else {
      console.log("product was ordered");
      // capture order details
      order.product = product;
      order.quantity = productTocart[product];
      // cal subtotal of the order
      order.subtt = calSubTotal(order);
      // update quantity and sub total in order array (cart)
      let dummyArr = orderArray;
      for (let i = 0; i < orderArray.length; i++) {
        if (orderArray[i].product === order.product) {
          // console.log(`orderArray[%i].product: %s`, i, orderArray[i].product);
          dummyArr.splice(i, 1, order);
          setArray(dummyArr);
          break;
        }
      }
      // cal total all orders
      setTotal(calTotal(0, orderArray, true));
    }
  }

  function calSubTotal(order: IOrder): number {
    // Get price from ModalContext
    let p = 0;
    let sub_total = 0;
    p = getPrice(order.product);
    // Calculate subtotal for each product that was ordered
    sub_total = p * order.quantity;
    return sub_total;
  }

  function calTotal(
    subtt: number,
    orderlist: IOrder[],
    reOrder: boolean
  ): number {
    let dummytotal = 0;
    if (reOrder === false) {
      dummytotal = total;
      dummytotal += subtt;
    } else {
      orderlist.forEach((element) => {
        dummytotal = dummytotal + element.subtt;
      });
    }
    return dummytotal;
  }

  // Return
  return (
    <OrderContext.Provider
      value={{
        handleAddToCartButton,
        orderProductNameArr,
        orderArray,
        total,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
