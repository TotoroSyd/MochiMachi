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
}

export interface IDeliveryContextValue {
  delivery: Array<IDeliveryContact>;
  setDelivery: (value: IDeliveryContact[]) => void;
  isNewCust: boolean;
  setIsNewCust: (value: boolean) => void;
}

// Export context object
export const DeliveryContext = createContext<IDeliveryContextValue>({
  delivery: [],
  setDelivery: (value: IDeliveryContact[]) => null,
  isNewCust: false,
  setIsNewCust: (value: boolean) => null,
});

// Context wrapper component
// export default function ModalContextProvider({ children }) - js style
export default function DeliveryContextProvider({ children }: ChildrenProps) {
  const [delivery, setDelivery] = useState<IDeliveryContact[]>([]);
  const [isNewCust, setIsNewCust] = useState(false);
  // console.log("delivery", delivery);
  return (
    <DeliveryContext.Provider
      value={{ delivery, setDelivery, isNewCust, setIsNewCust }}
    >
      {children}
    </DeliveryContext.Provider>
  );
}
