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
  //   order_subTotal: number;
}

// Export context object
export const OrderContext = createContext<IOrderProps>({
  order_productName: "",
  setOrderProductName: (value: string) => null,
  order_quantity: 1,
  setOrderQuantity: (value: number) => null,
});

// Context wrapper component
// export default function OrderContextProvider({ children }) - js style
export default function OrderContextProvider({ children }: ChildrenProps) {
  const [order_productName, setOrderProductName] = useState<string>("");
  const [order_quantity, setOrderQuantity] = useState<number>(1);
  const [order_subTotal, setOrderSubtotal] = useState<number>(1);
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
