import "../App.css";
export default function Home() {
  return (
    <>
      <div className="home md:h-screen max-md:h-90 bg-white flex flex-row pt-20 max-md:pt-15 shadow-md">
        <img src="/home.png" className="w-1/2" alt="" />
        <div className="teks-btn">
          <h2 className="text-7xl font-bold mr-20 lg:pt-40 md:pt-30 md:text-6xl max-md:text-3xl max-md:pt-10 max-md:mr-10">
            Mari deteksi sindrom metabolik lebih dini.
          </h2>
          <p className="pt-14 pb-4 text-lg max-md:text-xs max-md:pt-8 max-md:pb-2 max-sm:pt-4">
            Ingin tahu kondisimu?
          </p>
          <button className="btn-cek px-8 py-3 rounded-full font-bold text-white max-md:text-xs max-md:px-4 max-md:py-2 cursor-pointer">
            CEK SEKARANG
          </button>
        </div>
      </div>
    </>
  );
}
