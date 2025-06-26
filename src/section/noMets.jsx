export default function NoMets() {
  return (
    <>
      <div className="mets pt-20 h-screen mx-6 flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4">
          <div className="hasil flex flex-wrap">
            <img
              src="/no-mets.png"
              alt=""
              className="w-70 max-md:w-30 object-contain"
            />
            <p className="bg-gray-200 shadow-lg max-md:text-[10px] p-4 text-justify">
              Berdasarkan data yang Anda masukkan, Anda tidak berisiko mengalami
              Sindrom Metabolik. Disarankan untuk tetap menjalankan pola hidup
              sehat dengan rutin berolahraga, mengonsumsi makanan bergizi
              seimbang, dan melakukan pemeriksaan kesehatan secara berkala
            </p>
          </div>
          <div className="bg-gray-100 rounded font-bold max-md:text-xs border-1 border-gray-200 mt-4 h-40 flex flex-col gap-4 justify-center items-center p-4 text-center mx-auto">
            <img src="/icon2.png" alt="" className="w-10" />
            <p>Anda tidak berisiko Sindrom Metabolik</p>
          </div>
        </div>
        <h6 className="text-[10px] py-4">
          Disclamier: Ini bukan diagnosis medis, silakan konsultasi dengan
          dokter untuk pemeriksaan lebih lanjut{" "}
        </h6>
      </div>
    </>
  );
}
