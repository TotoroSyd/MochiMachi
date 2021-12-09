import React, { useContext } from "react";
import sakura_mochi from "../media/Sakura-mochi.jpeg";
import ichigo_daifuku from "../media/Strawberry-Daifuku.jpeg";
import warabi_mochi from "../media/warabi-mochi.jpeg";
import hishi_mochi from "../media/Hishi-Mochi.jpeg";
import Footer from "./Footer";
// import ProductCard from "./ProductCard";
import Nav from "./Nav";
import Modal from "./Modal";
import {
  ModalContext,
  IModalContextValue,
  IProductToDisplayInModal,
} from "../contexts/ModalContext";

export default function LandingPage() {
  // Call global var from context to use
  const { openModal, setOpenModal, setProductName, displayProduct } =
    useContext<IModalContextValue>(ModalContext);

  // let productToDisplay: IProductToDisplayInModal | string = "";
  function handleImageClick(ev: React.MouseEvent<HTMLButtonElement>): void {
    setOpenModal(true);
    setProductName(ev.currentTarget.value);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="h-screen w-screen px-2 pb-6">
        <Nav></Nav>
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
            <div className="image">
              <button
                type="button"
                value="Sakura_Mochi"
                onClick={handleImageClick}
              >
                <img
                  src={sakura_mochi}
                  alt="sakura-mochi"
                  className="w-full image__img"
                  id="product_sakura_mochi"
                />
                <div className="image__overlay text-4xl w-full h-14">
                  <p>Sakura Mochi</p>
                </div>
              </button>
            </div>

            <div className="text-center text-5xl w-full">
              A sign of the season
            </div>
          </div>

          <div className="image">
            <button>
              <img
                src={ichigo_daifuku}
                alt="strawberry-mochi"
                className="w-full image__img"
                id="product_ichigo_daifuku"
              />
              <div className="image__overlay text-4xl w-full h-14">
                <p>Ichigo Daifuku</p>
              </div>
            </button>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-x-6">
          <div className="image">
            <button>
              <img
                src={warabi_mochi}
                alt="mochi-soybean-powder"
                className="w-full image__img"
                id="product_warabi_mochi"
              />
              <div className="image__overlay text-4xl w-full h-14">
                <p>Warabi Mochi</p>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1">
            <div className="image">
              <button>
                <img
                  src={hishi_mochi}
                  alt="hishi-diamond-mochi"
                  className="w-full image__img"
                  id="product_hishi_mochi"
                />
                <div className="image__overlay text-4xl w-full h-14">
                  <p>Hishi Mochi</p>
                </div>
              </button>
            </div>

            <div className="text-center text-5xl leading-relaxed w-full">
              A symbol of good fortune
            </div>
          </div>
        </section>
      </section>
      {openModal ? <Modal></Modal> : null}
      <Footer></Footer>
    </div>
  );
}
