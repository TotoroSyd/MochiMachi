import React, { createContext, useContext, useState } from "react";
import { ModalContext, IModalContextValue } from "./ModalContext";
// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}

export interface IOrderProps {
  handleAddToCartButton: (
    value0: string,
    value1: { [key: string]: number }
  ) => void;
  calSubTotal: () => void;
  // //Do not need to set interface for state orderProductNameArr if we dont plan to export it out of this context via createContext
  // orderProductNameArr: string[];
  // setOrderProductNameArr: (value: string[]) => void;
}

// Export context object
export const OrderContext = createContext<IOrderProps>({
  handleAddToCartButton: (value0: string, value1: { [key: string]: number }) =>
    null,
  calSubTotal: () => null,
  // orderProductNameArr: [],
  // setOrderProductNameArr: (value: string[]) => null,
});

// Context wrapper component
// export default function OrderContextProvider({ children }) - js style
export default function OrderContextProvider({ children }: ChildrenProps) {
  const [orderProductNameArr, setOrderProductNameArr] = useState<string[]>([]);
  const [orderQty, setOrderQty] = useState<{ [key: string]: number }[]>([]);
  const [subTotal, setSubTotal] = useState<{ [key: string]: number }[]>([]);
  const { getPrice } = useContext<IModalContextValue>(ModalContext);

  // Functions
  function handleAddToCartButton(
    product: string,
    productTocart: { [key: string]: number }
  ): void {
    let index = 0;
    // product wasn't ordered, add to cart
    if (!orderProductNameArr.includes(product)) {
      setOrderProductNameArr([...orderProductNameArr, product]);
      setOrderQty([...orderQty, productTocart]);
    }
    // product was ordered then update the quantity
    else {
      index = orderProductNameArr.indexOf(product);
      orderQty.splice(index, 1, productTocart);
      console.log("product was ordered");
    }
  }

  function calSubTotal() {
    // Get price from ModalContext
    // let priceArr: number[] = [];
    let priceArr: { [key: string]: number } = {};
    let price = 0;
    let sub_total = 0;
    orderProductNameArr.forEach((element) => {
      price = getPrice(element);
      // cover scenario price is null at first render
      if (price != null) {
        priceArr[element] = price;
      }
    });
    console.log("priceArr: " + JSON.stringify(priceArr));
    // Calculate subtotal
    orderProductNameArr.forEach((el) => {
      orderQty.forEach((item) => {
        for (let i = 0; i < priceArr.length; i++) {
          sub_total = item[el] * priceArr[el];
          setSubTotal([...subTotal, { el: sub_total }]);
        }
      });
    });
  }

  // console.log(orderProductNameArr);
  // console.log(orderQty);
  console.log(subTotal);
  // Return
  return (
    <OrderContext.Provider
      value={{
        handleAddToCartButton,
        calSubTotal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
