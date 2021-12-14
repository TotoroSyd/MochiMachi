import React, { useContext } from "react";
import { ModalContext, IModalContextValue } from "../contexts/ModalContext";
import ProductCard from "./ProductCard";

export default function Modal() {
  // Call global var from context to use
  // Control open/ close modal by clicking "X" or "Close"
  const { setOpenModal, productToDisplay } =
    useContext<IModalContextValue>(ModalContext);

  // To be value for ProductCard's props
  let nameToDisplay = "";
  let priceToDisplay = 1;
  let descriptionToDisplay = "";

  // need to check null scenario
  if (productToDisplay != null) {
    nameToDisplay = productToDisplay.product_name;
    priceToDisplay = productToDisplay.product_price;
    descriptionToDisplay = productToDisplay.product_description;
  } else console.log("productToDisplay is null");

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{nameToDisplay}</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <ProductCard
                name={nameToDisplay}
                price={priceToDisplay}
                description={descriptionToDisplay}
              ></ProductCard>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
