import React, { useState, createContext } from "react";

// Reference why we use React.ReactNode for children https://www.carlrippon.com/react-children-with-typescript/
interface ChildrenProps {
  children: React.ReactNode;
}
export interface IProductToDisplayInModal {
  product_name: string;
  sf_id: string;
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
  getProductSFId: (value: string) => string;
}

// Export context object
export const ModalContext = createContext<IModalContextValue>({
  openModal: false,
  setOpenModal: (value: boolean) => null,
  productName: "",
  setProductName: (value: string) => null,
  productToDisplay: null,
  getPrice: (value: string) => 0,
  getProductSFId: (value: string) => "",
});

// Context wrapper component
// export default function ModalContextProvider({ children }) - js style
export default function ModalContextProvider({ children }: ChildrenProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");

  const product_cat: { [key: string]: IProductToDisplayInModal } = {
    Sakura_Mochi: {
      product_name: "Sakura Mochi",
      sf_id: "01tIw000000kiKeIAI",
      product_price: 14,
      product_description:
        "Sakura Mochi is made of sweet pink mochi (sweet rice or sometimes called glutinous rice). It's usually filled with sweet red bean paste and wrapped in a salty pickled cherry leaf. It's usually enjoyed throughout the spring season in Japan",
    },
    Ichigo_Daifuku: {
      product_name: "Ichigo Daifuku",
      sf_id: "01tIw000000kiL0IAI",
      product_price: 15,
      product_description:
        "It's also known as Strawberry Mochi. It's a soft and chewy mochi stuffed with fresh juicy strawberry and sweet red bean paste ",
    },
    Warabi_Mochi: {
      product_name: "Warabi Mochi",
      sf_id: "01tIw000000kiL5IAI",
      product_price: 16,
      product_description:
        "It's is a chilled, deliciously chewy, jelly-like mochi covered with sweet and nutty soybean powder and drizzled with kuromitsu syrup. It is popular during summer in Japan",
    },
    Hishi_Mochi: {
      product_name: "Hishi Mochi",
      sf_id: "01tIw000000kiLAIAY",
      product_price: 17,
      product_description:
        "It's also known as 'Tricoloured Diamond Shaped Mochi'. It is a symbolic Japanese sweet associated with the Hinamatsuri `Girl's Day` festival, which coincides with the calendar date for Xiuxi. The sweet is diamond shapes and typically formed from three layers of red, white, and green mochi, from top to bottom ",
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

  function getProductSFId(product: string): string {
    let SFId = product_cat[product].sf_id;
    if (SFId != null) {
      return SFId;
    } else {
      return "Cannot find Product Salesforce ID";
    }
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
        getProductSFId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
