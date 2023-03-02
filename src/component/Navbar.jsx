import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around py-6 border-t-4 border-ijo-muda items-center font-jakartamedium">
        <div>
          <section className="text-2xl font-jakartabold text-ijo-muda">
            TOKOTIPU
          </section>
        </div>
        <ul className="flex">
          <li className="pr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-10">
            <Link to="/">Kategori</Link>
          </li>
          <li className="">
            <Link to="/promo">Promo</Link>
          </li>
        </ul>
        <div>
          <button className="text-ijo-muda mr-5 px-8 py-2 border-2 rounded-md border-ijo-muda">
            <Link to="/login">Login</Link>
          </button>
          <button className="text-white px-8 py-2 bg-ijo-muda rounded-md">
            Daftar
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
