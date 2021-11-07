import mochi_machi_logo from "../media/MochiMachiLogo_white_rsize.png";
import { Link } from "react-router-dom";

export default function Nav() {
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
        <h1 className="font-semibold">CHECKOUT</h1>
      </div>
      <Link to="/checkout">
        <p className="text-center">Check out</p>
      </Link>
    </nav>
  );
}
