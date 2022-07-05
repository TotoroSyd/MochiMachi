import { createContext, useState } from "React";
import { IOrder } from "./OrderContext";
// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}

export interface IContractData {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
  unit: number;
  country: string;
  state: string;
  city: string;
  suburb: string;
  postCode: number;
  total: number;
  orderList: Array<IOrder>;
}

export interface IContractContextValue {
  contractData: Array<IContractData>;
  setContractData: (value: IContractData[]) => void;
}

// Export context object
export const ContractContext = createContext({
  contractData: [],
  setContractData: (value: IContractData[]) => null,
});

export default function ContractContextProvider(children: ChildrenProps) {
  const [contractData, setContractData] = useState<IContractData[]>([]);
  return (
    <ContractContext.Provider value={{ contractData, setContractData }}>
      {children}
    </ContractContext.Provider>
  );
}
