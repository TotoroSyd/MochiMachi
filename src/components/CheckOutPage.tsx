import Nav from "./Nav";
import Payment from "./Payment";
import Shipping from "./Shipping";

export default function CheckOut() {
  return (
    <div>
      <Nav></Nav>
      <div>
        <form>
          <Shipping></Shipping>
          <Payment></Payment>
        </form>
      </div>
    </div>
  );
}
