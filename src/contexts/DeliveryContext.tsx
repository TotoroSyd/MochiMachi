import { createContext, useState } from "react";
// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}

export interface IDeliveryContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  unit: string;
  country: string;
  state: string;
  city: string;
  suburb: string;
  postCode: string;
  isNewCust: boolean;
}

export interface IDeliveryContextValue {
  delivery: Array<IDeliveryContact>;
  setDelivery: (value: IDeliveryContact[]) => void;
}

// Export context object
export const DeliveryContext = createContext<IDeliveryContextValue>({
  delivery: [],
  setDelivery: (value: IDeliveryContact[]) => null,
});

// Context wrapper component
// export default function ModalContextProvider({ children }) - js style
export default function DeliveryContextProvider({ children }: ChildrenProps) {
  const [delivery, setDelivery] = useState<IDeliveryContact[]>([]);
  // console.log("delivery", delivery);
  return (
    <DeliveryContext.Provider value={{ delivery, setDelivery }}>
      {children}
    </DeliveryContext.Provider>
  );
}
