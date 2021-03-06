import React, { useContext, useState } from "react";
import { ModalContext, IModalContextValue } from "../contexts/ModalContext";
import { OrderContext, IOrderProps } from "../contexts/OrderContext";

interface Product_props {
  name: string;
  price: number;
  description: string;
}

export default function ProductCard(product: Product_props) {
  let [qty, setQty] = useState<number>(0);
  let productTocart: { [key: string]: number } = {};
  const { productName } = useContext<IModalContextValue>(ModalContext);
  const { handleAddToCartButton } = useContext<IOrderProps>(OrderContext);

  let minusQty = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    // let minus_btn: HTMLButtonElement = ev.currentTarget;
    minus_Qty();
  };

  let plusQty = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    // let plus_btn: HTMLButtonElement = ev.currentTarget;
    plus_Qty();
  };

  // Functions
  function minus_Qty(): void {
    setQty(qty - 1);
    if (qty <= 1) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  }

  function plus_Qty(): void {
    setQty(qty + 1);
  }

  function add_to_cart(ev: React.MouseEvent<HTMLButtonElement>): void {
    ev.preventDefault();
    let pro = ev.currentTarget.value;
    productTocart[pro] = qty;
    handleAddToCartButton(pro, productTocart);
  }

  return (
    <div>
      {/* Unused for now because we have modal title */}
      {/* <h2 className="font-semibold text-2xl pb-2">{product.name}</h2> */}
      <h4>
        <span className="font-bold">Price:</span> ${product.price}
      </h4>
      <h4>
        <span className="font-bold">Description:</span> {product.description}
      </h4>
      <div className="grid grid-cols-2 gap-2 w-28 pt-2 pb-4">
        <span className="font-bold">Quantity</span>
        {/* Quantity box */}
        <div className="grid grid-cols-3 w-16 border-2 border-gray-300 rounded-md mx-4">
          <button
            className="text-center border-r-2 border-gray-300"
            type="button"
            onClick={minusQty}
          >
            -
          </button>
          <div className="text-center">{qty}</div>
          <button
            className="text-center border-l-2 border-gray-300"
            type="button"
            onClick={plusQty}
          >
            +
          </button>
        </div>
      </div>
      {/* Confirm Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="submit"
          className="button bg-transparent font-bold py-2 px-4 rounded-full"
          value={productName}
          onClick={add_to_cart}
        >
          ADD TO CART
        </button>
        {/* <Link to="/checkout">
          <button
            type="submit"
            className="button bg-transparent font-bold py-2 px-4 rounded-full"
            onClick={() => <CheckOut />}
          >
            CHECK OUT
          </button>
        </Link> */}
      </div>
    </div>
  );
}
