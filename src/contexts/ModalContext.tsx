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
  product_name: string;
  setProductName: (value: string) => void;
  displayProduct: (value: string) => IProductToDisplayInModal | string;
}

// Export context object
export const ModalContext = createContext<IModalContextValue>({
  openModal: false,
  setOpenModal: (value: boolean) => null,
  product_name: "",
  setProductName: (value: string) => null,
  displayProduct: (value: string) => "",
});

// Context wrapper component
// export default function ModalContextProvider({ children }) - js style
export default function ModalContextProvider({ children }: ChildrenProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [product_name, setProductName] = useState<string>("");

  const product_cat: { [key: string]: IProductToDisplayInModal } = {
    Sakura_Mochi: {
      product_name: "Sakura Mochi",
      product_price: 14,
      product_description: "string",
    },
    Ichigo_Daifuku: {
      product_name: "Ichigo Daifuku",
      product_price: 15,
      product_description: "string",
    },
    Warabi_Mochi: {
      product_name: "Warabi Mochi",
      product_price: 16,
      product_description: "string",
    },
    Hishi_Mochi: {
      product_name: "Hishi Mochi",
      product_price: 17,
      product_description: "string",
    },
  };
  console.log("product_name before displayProduct function= " + product_name);
  function displayProduct(product_name: string) {
    let product_display_in_modal = {
      product_name: "",
      product_price: 0,
      product_description: "",
    };
    console.log("product_name in displayProduct function= " + product_name);
    console.log("product_cat[product_name] = " + product_cat[product_name]);
    if (!product_cat[product_name]) {
      return "hello from display product function";
    } else {
      product_display_in_modal = product_cat[product_name];
      return product_display_in_modal;
    }
  }

  // Return
  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        product_name,
        setProductName,
        displayProduct,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
