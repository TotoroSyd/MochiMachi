import mochi_machi_logo from "../media/MochiMachiLogo_white_rsize.png";
import { Link } from "react-router-dom";

export default function Nav() {
  // const { calSubTotal } = useContext<IOrderProps>(OrderContext);
  return (
    <nav className="grid grid-cols-2 gap-10">
      <div className="flex flex-row">
        <Link to="/">
          <img
            src={mochi_machi_logo}
            alt="mochimachilogo"
            className="m-2 h-14"
          />
        </Link>
      </div>
      <Link to="/checkout">
        <button className="font-semibold text-center" type="button">
          CHECKOUT
        </button>
      </Link>
    </nav>
  );
}
