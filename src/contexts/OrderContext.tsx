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
  // orderArray: IOrder[];
  orderArray: Array<IOrder>;
}

// Export context object
export const OrderContext = createContext<IOrderProps>({
  handleAddToCartButton: (value0: string, value1: { [key: string]: number }) =>
    null,
  orderProductNameArr: [],
  orderArray: [],
});

// Context wrapper component
// export default function OrderContextProvider({ children }) - js style
export default function OrderContextProvider({ children }: ChildrenProps) {
  const [orderArray, setArray] = useState<IOrder[]>([]);
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
      order.product = product;
      order.quantity = productTocart[product];
      order.subtt = calSubTotal(order);
      setArray([...orderArray, order]);
    }
    // product was ordered then update the quantity and sub total
    else {
      console.log("product was ordered");
      order.product = product;
      order.quantity = productTocart[product];
      order.subtt = calSubTotal(order);
      let dummyArr = orderArray;
      for (let i = 0; i < orderArray.length; i++) {
        if ((orderArray[i].product = product)) {
          dummyArr.splice(i, 1, order);
          setArray(dummyArr);
          break;
        }
      }
    }
  }

  function calSubTotal(order: IOrder) {
    // Get price from ModalContext
    let p = 0;
    let sub_total = 0;
    p = getPrice(order.product);
    // Calculate subtotal for each product that was ordered
    sub_total = p * order.quantity;
    return sub_total;
  }

  // Return
  return (
    <OrderContext.Provider
      value={{
        handleAddToCartButton,
        orderProductNameArr,
        orderArray,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
