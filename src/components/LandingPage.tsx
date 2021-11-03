import ProductCard from "./ProductCard";

export default function LandingPage() {
  return (
    <div className="login">
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
        <section className="h-screen w-4/5 bg-pink-200 px-2">
          <ProductCard></ProductCard>
        </section>
      </div>
    </div>
  );
}
