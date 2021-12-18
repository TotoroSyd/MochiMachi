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
    let price: { [key: string]: number } = {};
    let p = 0;
    let sub_total = 0;
    orderProductNameArr.forEach((element) => {
      // get price for each product that got ordered
      p = getPrice(element);
      // cover scenario price is null or NaN
      if (p) {
        price[element] = p;
      }
    });

    // Calculate subtotal for each product that was ordered
    let dummySubTotal: { [key: string]: number } = {};
    orderProductNameArr.forEach((el) => {
      // to get order quantityh
      orderQty.forEach((item) => {
        // calculate sub_total for each product that got ordered
        sub_total = item[el] * price[el];
        // cover scenario sub_total is null or NaN
        if (sub_total) {
          dummySubTotal[el] = sub_total;
          // update state
          setSubTotal([...subTotal, dummySubTotal]);
        }
      });
    });
  }

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
