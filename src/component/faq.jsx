const faq = () => {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <section className="text-3xl font-jakartabold m-auto mb-10">
            Frequently Ask Question
          </section>
          <div className="grid grid-cols-2 gap-4 px-20">
            <div className="bg-gray-200 rounded-xl">
              <div className="py-5 pl-5">
                Bagaimana Cara Membuat Akun TokoTipu?
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl">
              <div className="py-5 pl-5">Bagaimana Caranya Memesan?</div>
            </div>
            <div className="bg-gray-200 rounded-xl">
              <div className="py-5 pl-5">
                Bagaimana Untuk Pengembalian Barang?
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl">
              <div className="py-5 pl-5">
                Bagaimana Caranya Menggunakan Kupon?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default faq;
