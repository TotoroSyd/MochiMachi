export default function ProductCard() {
  return (
    <div>
      {/* product image */}
      <span>Product Name: </span>
      <span>Description: </span>
      <div>
        <span>Order</span>
        {/* Quantity box */}
        <button type="submit" className="button">
          Purchase
        </button>
      </div>
    </div>
  );
}
