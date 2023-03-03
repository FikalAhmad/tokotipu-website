const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="font-jakartaregular">
        <div className="m-10">
          <section className="text-2xl font-jakartabold">TOKO TIPU</section>
          <div className="flex flex-col m-auto border-2 rounded-3xl w-[640px] mt-5 p-10">
            <div className="flex flex-col items-center ">
              <section className="text-3xl font-jakartabold">
                Welcome to TokoTipu
              </section>
              <p className="text-gray-400">Register your account here</p>
            </div>
            <div className="flex justify-center mt-10">
              <form action="/" className="flex flex-col w-[550px]">
                <label className="flex justify-between items-center mb-5">
                  Nama:
                  <input
                    type="text"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                  ></input>
                </label>
                <label className="flex justify-between items-center mb-5">
                  Nomor Telepon:
                  <input
                    type="text"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                  ></input>
                </label>
                <label className="flex justify-between items-center mb-5">
                  Email:
                  <input
                    type="email"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                  ></input>
                </label>
                <label className="flex justify-between items-center mb-5">
                  Password:
                  <input
                    type="password"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                  ></input>
                </label>
                <label className="flex justify-between items-center mb-5">
                  Password:
                  <input
                    type="password"
                    className="w-96 p-3 bg-blue-100 rounded-lg"
                  ></input>
                </label>
                <label className="flex justify-evenly items-center mb-5">
                  <input type="checkbox" value="testing"></input>
                  Dengan ini anda menyetujui untuk membuat akun TokoTipu
                </label>
                <button
                  className="bg-ijo-muda py-2 rounded-lg text-white"
                  onClick={handleSubmit}
                >
                  Daftar Sekarang
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
