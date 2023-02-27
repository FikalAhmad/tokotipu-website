import Navbar from "../component/Navbar";
import Product from "../component/topProduk";
import Frequents from "../component/faq";
import tshirt from "../images/tshirt.png";
import shoes from "../images/shoes.png";
import jeans from "../images/jeans.png";
import Footer from "../component/footer";

const Homepage = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="h-96 bg-coklat-krem bg-girl-fashion bg-no-repeat bg-right-top bg-auto font-jakartaregular">
          <div className="ml-20 p-16 w-[550px]">
            <p className="text-3xl">
              Diskon <b>30%</b> Hari ini
            </p>
            <p className="text-5xl text-ijo-tua my-10 font-jakartabold">
              Promo 2023 Jacket Collection
            </p>
            <button className="py-2 px-5 bg-white rounded-md">
              Beli Sekarang
            </button>
          </div>
        </div>
        <br />
        <div className="flex justify-evenly font-jakartaregular">
          <div className="flex w-1/4 h-32 bg-coklat-krem rounded-lg text-white">
            <div className="p-5">
              <p className="text-3xl font-jakartabold">T-Shirt</p>
              <button className="mt-3 text-coklat-krem bg-white px-3 py-2 rounded-md text-sm">
                Beli Sekarang
              </button>
            </div>
            <img className="w-40 m-auto" src={tshirt} alt=""></img>
          </div>
          <div className="flex w-1/4 h-32 bg-gray-300 rounded-lg text-black">
            <div className="p-5">
              <p className="text-3xl font-jakartabold">Sepatu</p>
              <button className="mt-3 text-gray-300 bg-black px-3 py-2 rounded-md text-sm">
                Beli Sekarang
              </button>
            </div>
            <img className="w-32 m-auto" src={shoes} alt=""></img>
          </div>
          <div className="flex w-1/4 h-32 bg-ijo-muda rounded-lg text-white">
            <div className="p-5">
              <p className="text-3xl font-jakartabold">Jeans</p>
              <button className="mt-3 text-ijo-muda bg-white px-3 py-2 rounded-md text-sm">
                Beli Sekarang
              </button>
            </div>
            <img className="w-32 m-auto" src={jeans} alt=""></img>
          </div>
        </div>
        <Product />
        <div className="bg-gray-300 font-jakartaregular my-20">
          <div className="flex flex-col items-center p-20">
            <section className="font-jakartabold text-4xl">
              Let's Keep In Touch
            </section>
            <p>Subscribe untuk dapatkan diskon 15% untuk Pemesanan Pertama</p>
            <div>
              <form className="mt-5" action="">
                <input
                  className="rounded-l-lg w-96 h-10 p-3"
                  type="email"
                ></input>
                <button
                  className="px-8 py-2 text-white bg-black rounded-r-lg "
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <Frequents />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
