import mochi_machi_logo from "../media/MochiMachiLogo_white_rsize.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="grid grid-cols-2 gap-10">
      <div>
        <Link to="/">
          <img
            src={mochi_machi_logo}
            alt="mochimachilogo"
            className="m-2 h-14"
          />
        </Link>
      </div>
      <div className="grid content-center">
        <Link to="/checkout">
          <button className="font-bold text-center text-xl" type="button">
            Checkout
          </button>
        </Link>
      </div>
    </nav>
  );
}
