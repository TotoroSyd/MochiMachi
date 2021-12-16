import React, { createContext, useState } from "react";
// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}

export interface IOrderProps {
  order_productName: string;
  setOrderProductName: (value: string) => void;
  order_quantity: number;
  setOrderQuantity: (value: number) => void;
  //   updateOrderProductKey: (value0: string, value1: number) => void;
  //   orderProductKey: string[];
  //   order_subTotal: number;
}

// Export context object
export const OrderContext = createContext<IOrderProps>({
  order_productName: "",
  setOrderProductName: (value: string) => null,
  order_quantity: 1,
  setOrderQuantity: (value: number) => null,
  //   updateOrderProductKey: (value0: string, value1: number) => null,
  //   orderProductKey: [],
});

// Context wrapper component
// export default function OrderContextProvider({ children }) - js style
export default function OrderContextProvider({ children }: ChildrenProps) {
  const [order_productName, setOrderProductName] = useState<string>("");
  const [orderProductKeyy, setOrderProductKeyy] = useState([]);
  const [order_quantity, setOrderQuantity] = useState<number>(1);
  const [order_subTotal, setOrderSubtotal] = useState<number>(1);

  // Calculate subtotal
  let orderProductKey: string[] = [];
  let orderQuantity: { [key: string]: number } = {};

  // Functions
  function updateOrderProductKey(product: string, quantity: number): void {}

  function updateOrderQuantity(product: string, quantity: number): void {}
  // Return
  return (
    <OrderContext.Provider
      value={{
        order_quantity,
        setOrderQuantity,
        order_productName,
        setOrderProductName,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
