import "../App.css";
export default function FormMets() {
  return (
    <>
      <div className="formMets mt-8 flex flex-col justify-center">
        <h2 className="md:text-2xl font-bold text-center pb-4">
          Cek risiko sindrom metabolik anda
        </h2>
        <form
          action=""
          className="flex flex-col text-gray-800 p-6 text-xs gap-4 md:bg-gray-100 md:rounded w-full max-w-sm mx-auto border-1 border-gray-200"
        >
          <div className="usia">
            <h3 className="md:text-sm font-semibold pb-1">Usia</h3>
            <input
              type="number"
              id="usia"
              placeholder="Masukkan usia anda"
              className="border-1 w-82 p-1"
            />
          </div>
          <div className="gender">
            <h3 className="md:text-sm font-semibold pb-1">Jenis Kelamin</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="Laki-laki" />
                Laki-laki
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="Perempuan" />
                Perempuan
              </label>
            </div>
          </div>
          <div className="bmi flex gap-4">
            <div className="berat">
              <h3 className="md:text-sm font-semibold pb-1">
                Berat Badan (kg)
              </h3>
              <input
                type="number"
                name="berat"
                id="berat"
                placeholder="Contoh: 45"
                className="border-1 w-39 p-1"
              />
            </div>
            <div className="tinggi">
              <h3 className="md:text-sm font-semibold pb-1">
                Tinggi Badan (cm)
              </h3>
              <input
                type="number"
                name="berat"
                id="berat"
                placeholder="Contoh: 45"
                className="border-1 w-39 p-1"
              />
            </div>
          </div>
          <div className="glucose">
            <h3 className="md:text-sm font-semibold pb-1">Glukosa (mg/dL)</h3>
            <input
              type="number"
              id="usia"
              placeholder="Masukkan kadar glukosa anda"
              className="border-1 w-82 p-1"
            />
          </div>

          <div className="hdl">
            <h3 className="md:text-sm font-semibold pb-1">HDL (mg/dL)</h3>
            <input
              type="number"
              id="usia"
              placeholder="Masukkan kadar kolestrol HDL anda"
              className="border-1 w-82 p-1"
            />
          </div>

          <div className="tgl">
            <h3 className="md:text-sm font-semibold pb-1">Triglyserida</h3>
            <input
              type="number"
              id="usia"
              placeholder="Masukkan kadar triglyserida anda"
              className="border-1 w-82 p-1"
            />
          </div>
          <button className="mt-4 px-8 py-4 w-82 bg-[#290092] rounded font-bold text-white max-md:text-xs max-md:px-4 max-md:py-2 cursor-pointer">
            CEK KONDISI
          </button>
        </form>
      </div>
    </>
  );
}
