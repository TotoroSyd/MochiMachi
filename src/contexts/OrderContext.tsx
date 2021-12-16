import React, { createContext, useState } from "react";
// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}

export interface IOrderProps {
  handleAddToCartButton: (
    value0: string,
    value1: { [key: string]: number }
  ) => void;
  // orderProductNameArr: string[];
  // setOrderProductNameArr: (value: string[]) => void;
}

// Export context object
export const OrderContext = createContext<IOrderProps>({
  handleAddToCartButton: (value0: string, value1: { [key: string]: number }) =>
    null,
  // orderProductNameArr: [],
  // setOrderProductNameArr: (value: string[]) => null,
});

// Context wrapper component
// export default function OrderContextProvider({ children }) - js style
export default function OrderContextProvider({ children }: ChildrenProps) {
  const [orderProductNameArr, setOrderProductNameArr] = useState<string[]>([]);
  const [orderQty, setOrderQty] = useState<{ [key: string]: number }[]>([]);

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

  console.log(orderProductNameArr);
  console.log(orderQty);
  // Return
  return (
    <OrderContext.Provider
      value={{
        handleAddToCartButton,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
