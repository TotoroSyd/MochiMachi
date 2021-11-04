import sakura_mochi from "../media/Sakura-mochi.jpeg";
import ichigo_daifuku from "../media/Strawberry-Daifuku.jpeg";
import warabi_mochi from "../media/warabi-mochi.jpeg";
import hishi_mochi from "../media/Hishi-Mochi.jpeg";

export default function LandingPage() {
  return (
    <body className="login">
      <div className="flex flex-col justify-center items-center">
        <section className="h-screen w-screen px-2 py-6">
          <nav>
            <img src="src/MochiMachiLogo_white.jpeg" alt="mochimachilogo" />
          </nav>
          <div className="banner h-full flex flex-col justify-center items-center">
            <div className="text-white font-bold text-7xl py-8">
              Delightful Sweet Japanese Mochi
            </div>
            <button
              type="button"
              className="button bg-transparent font-bold py-2 px-4 rounded-full"
            >
              Order Now
            </button>
          </div>
        </section>
        <section className="text-center w-2/5 py-28 text-2xl">
          Welcome to Mochi Machi - your home for authentic, freshmade Japanese
          Mochi.
        </section>
        <section className="h-screen w-4/5 px-2 grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-y-4">
            <img src={sakura_mochi} alt="sakura-mochi" />
            <div className="text-center text-5xl">A sign of the season</div>
          </div>
          <img src={ichigo_daifuku} alt="strawberry-mochi" />
          <img src={warabi_mochi} alt="mochi-soybean-powder" />
          <div className="grid grid-cols-1 gap-y-4">
            <img src={hishi_mochi} alt="hishi-diamond-mochi" />
            <div className="text-center text-5xl leading-relaxed">
              A symbol of good fortune
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}
