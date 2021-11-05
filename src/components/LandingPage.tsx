import sakura_mochi from "../media/Sakura-mochi.jpeg";
import ichigo_daifuku from "../media/Strawberry-Daifuku.jpeg";
import warabi_mochi from "../media/warabi-mochi.jpeg";
import hishi_mochi from "../media/Hishi-Mochi.jpeg";
import mochi_machi_logo from "../media/MochiMachiLogo_white_rsize.png";

export default function LandingPage() {
  return (
    <body className="flex flex-col justify-center items-center">
      <section className="h-screen w-screen px-2 pb-6">
        <nav>
          <img
            src={mochi_machi_logo}
            alt="mochimachilogo"
            className="m-2 h-14"
          />
        </nav>
        <div className="banner h-full flex flex-col justify-center items-center">
          <div className="text-white font-bold text-7xl py-8">
            Delightful Sweet Japanese Mochi
          </div>
          <button
            type="button"
            className="button bg-transparent font-bold py-2 px-4 rounded-full"
          >
            <a href="#product_section">Order Now</a>
          </button>
        </div>
      </section>
      <section className="text-center w-1/2 py-28 text-2xl">
        Welcome to Mochi Machi - your home for authentic, freshmade Japanese
        Mochi.
      </section>
      <section className="grid w-4/5 gap-y-6" id="product_section">
        <section className="grid grid-cols-2 gap-x-6">
          <div className="grid grid-cols-1">
            <img src={sakura_mochi} alt="sakura-mochi" className="w-full" />
            <div className="text-center text-5xl w-full">
              A sign of the season
            </div>
          </div>
          <img src={ichigo_daifuku} alt="strawberry-mochi" className="w-full" />
        </section>

        <section className="grid grid-cols-2 gap-x-6">
          <img
            src={warabi_mochi}
            alt="mochi-soybean-powder"
            className="w-full"
          />
          <div className="grid grid-cols-1">
            <img
              src={hishi_mochi}
              alt="hishi-diamond-mochi"
              className="w-full"
            />
            <div className="text-center text-5xl leading-relaxed w-full">
              A symbol of good fortune
            </div>
          </div>
        </section>
      </section>
    </body>
  );
}
