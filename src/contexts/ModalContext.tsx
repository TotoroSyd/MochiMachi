import React, { useState, createContext } from "react";

// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}
export interface IProductToDisplayInModal {
  product_name: string;
  product_price: number;
  product_description: string;
}

export interface IModalContextValue {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  productName: string;
  setProductName: (value: string) => void;
  productToDisplay: IProductToDisplayInModal | null;
  getPrice: (value: string) => number;
}

// Export context object
export const ModalContext = createContext<IModalContextValue>({
  openModal: false,
  setOpenModal: (value: boolean) => null,
  productName: "",
  setProductName: (value: string) => null,
  productToDisplay: null,
  getPrice: (value: string) => 0,
});

// Context wrapper component
// export default function ModalContextProvider({ children }) - js style
export default function ModalContextProvider({ children }: ChildrenProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");

  const product_cat: { [key: string]: IProductToDisplayInModal } = {
    Sakura_Mochi: {
      product_name: "Sakura Mochi",
      product_price: 14,
      product_description: "Sakura Mochi is for spring",
    },
    Ichigo_Daifuku: {
      product_name: "Ichigo Daifuku",
      product_price: 15,
      product_description: "This is a strawberyy mochi",
    },
    Warabi_Mochi: {
      product_name: "Warabi Mochi",
      product_price: 16,
      product_description: "Soybean mochi",
    },
    Hishi_Mochi: {
      product_name: "Hishi Mochi",
      product_price: 17,
      product_description: "diamond shaped three layers mochi",
    },
  };

  // To be used in Modal, passed to ProductCard
  let productToDisplay: IProductToDisplayInModal = product_cat[productName];

  // Function
  function getPrice(product: string): number {
    let price = product_cat[product].product_price;
    if (price != null) {
      return price;
    } else return 0;
  }

  // Return
  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        productName,
        setProductName,
        productToDisplay,
        getPrice,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
