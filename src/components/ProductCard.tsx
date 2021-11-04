export default function ProductCard() {
  return (
    <div>
      {/* product image */}
      <h2>Product Name: </h2>
      <h4>Price</h4>
      <span>Description: </span>
      <div>
        <span>QTY</span>
        {/* Quantity box */}
        <button
          type="submit"
          className="button bg-transparent font-bold py-2 px-4 rounded-full"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
