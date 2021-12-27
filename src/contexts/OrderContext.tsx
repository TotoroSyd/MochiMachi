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
  console.log("orderArray in OrderContext: ", orderArray);
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
      order.product = product;
      order.quantity = productTocart[product];
      order.subtt = calSubTotal(order);
      setArray([...orderArray, order]);
    }
    // product was ordered then update quantity and sub total
    else {
      console.log("product was ordered");
      order.product = product;
      order.quantity = productTocart[product];
      order.subtt = calSubTotal(order);
      // update quantity and sub total
      let dummyArr = orderArray;
      for (let i = 0; i < orderArray.length; i++) {
        if ((orderArray[i].product = product)) {
          dummyArr.splice(i, 1, order);
          setArray(dummyArr);
          break;
        }
      }
    }

    setTotal(calTotal(orderArray));
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

  function calTotal(orderlist: IOrder[]): number {
    console.log("orderlist: ", orderlist);
    let total = 0;
    orderlist.forEach((order) => {
      total = total + order.subtt;
    });
    return total;
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
