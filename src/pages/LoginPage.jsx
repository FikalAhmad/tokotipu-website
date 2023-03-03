import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgLogin from "../images/Sprinkle.jpg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    navigate("/");
  }

  return (
    <>
      <div className="flex font-jakartaregular">
        <div className="w-[1024px] m-10">
          <div className="w-full">
            <section className="text-2xl font-jakartabold">TOKO TIPU</section>
            <div className="mt-24">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-jakartabold">Welcome back</p>
                <p className="text-gray-400">Log in to your account</p>
              </div>
              <div className="flex justify-center mt-14 ">
                <form action="/" className="flex flex-col w-[550px]">
                  <label className="flex justify-between items-center mb-5">
                    Email:
                    <input
                      type="email"
                      className="w-96 p-3 bg-blue-100 rounded-lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </label>
                  <label className="flex justify-between items-center mb-5">
                    Password:
                    <input
                      type="password"
                      className="w-96 p-3 bg-blue-100 rounded-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </label>
                  <button
                    className="bg-ijo-muda py-2 rounded-lg text-white"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </form>
              </div>
              <p className="flex justify-center mt-5">
                Belum punya akun? <Link to="/daftar">Daftar Disini</Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96">
            <img className="w-full" src={bgLogin} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
