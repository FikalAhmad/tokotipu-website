import loginimage from "../images/loginimage.png";

const LoginPage = () => {
  return (
    <>
      <div className="flex font-jakartaregular">
        <div className="w-[1024px] m-10">
          <div className="w-full">
            <section className="text-2xl font-jakartabold">TOKO TIPU</section>
            <div className="">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-jakartabold">Welcome back</p>
                <p className="text-gray-400">Log in to your account</p>
              </div>
              <div>
                <form action="/" className="flex flex-col">
                  <label>Email</label>
                  <input type="email" placeholder="email"></input>
                  <label>Password</label>
                  <input type="password" placeholder="password"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96">
            <img className="w-full" src={loginimage} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
