import React, { createContext, useState } from "react";
// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}

export interface IOrderProps {
  //   order_productName: string;
  //   setOrderProductName: (value: string) => void;
  order_quantity: number;
  setOrderQuantity: (value: number) => void;
  updateOrderProductNameArr: (value0: string) => void;
  orderProductNameArr: string[];
  setOrderProductNameArr: (value: string[]) => void;
  //   order_subTotal: number;
}

// Export context object
export const OrderContext = createContext<IOrderProps>({
  //   order_productName: "",
  //   setOrderProductName: (value: string) => null,
  order_quantity: 1,
  setOrderQuantity: (value: number) => null,
  updateOrderProductNameArr: (value0: string) => null,
  orderProductNameArr: [],
  setOrderProductNameArr: (value: string[]) => null,
});

// Context wrapper component
// export default function OrderContextProvider({ children }) - js style
export default function OrderContextProvider({ children }: ChildrenProps) {
  //   const [order_productName, setOrderProductName] = useState<string>("");
  const [order_quantity, setOrderQuantity] = useState<number>(1);
  const [orderProductNameArr, setOrderProductNameArr] = useState<string[]>([]);

  // Calculate subtotal
  //   let orderProductNameArray: string[] = [];
  let orderQuantity: { [key: string]: number } = {};

  // Functions
  function updateOrderProductNameArr(product: string): void {
    if (!orderProductNameArr.includes(product)) {
      setOrderProductNameArr([...orderProductNameArr, product]);
    } else {
      console.log("product was ordered");
    }
  }

  function updateOrderQuantity(product: string, quantity: number): void {}
  // Return
  return (
    <OrderContext.Provider
      value={{
        order_quantity,
        setOrderQuantity,
        // order_productName,
        // setOrderProductName,
        updateOrderProductNameArr,
        orderProductNameArr,
        setOrderProductNameArr,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
