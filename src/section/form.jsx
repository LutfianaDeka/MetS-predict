import "../App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormMets() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usia: "",
    gender: "",
    lingkar_pinggang: "",
    berat: "",
    tinggi: "",
    glukosa: "",
    hdl: "",
    trigliserida: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      usia,
      gender,
      lingkar_pinggang,
      berat,
      tinggi,
      glukosa,
      hdl,
      trigliserida,
    } = formData;

    if (
      !usia ||
      !gender ||
      !lingkar_pinggang ||
      !berat ||
      !tinggi ||
      !glukosa ||
      !hdl ||
      !trigliserida
    ) {
      alert("Mohon isi semua data.");
      return;
    }

    const beratNum = parseFloat(berat);
    const tinggiMeter = parseFloat(tinggi) / 100;
    const bmi = beratNum / (tinggiMeter * tinggiMeter);
    const genderNum = gender === "Laki-laki" ? 1 : 0;

    const payload = {
      Age: parseFloat(usia),
      Sex: genderNum,
      WaistCirc: parseFloat(lingkar_pinggang),
      BMI: bmi,
      BloodGlucose: parseFloat(glukosa),
      HDL: parseFloat(hdl),
      Triglycerides: parseFloat(trigliserida),
    };

    console.log("📦 Data yang dikirim ke model:");
    console.table(payload);

    try {
      const res = await axios.post(
        "https://6ad0d140-b2b5-44b9-884c-80f31c5ecd16-00-3vlmzk4ociaws.sisko.replit.dev/predict",
        payload
      );
      const prediction = res.data.result;

      console.log(prediction);
      console.log(
        "📊 Hasil prediksi dari backend:",
        prediction,
        typeof prediction
      );

      if (parseInt(prediction) === 0) {
        navigate("/mets");
        console.log("✅ Hasil Prediksi: Met (Positif Sindrom Metabolik)");
      } else {
        navigate("/nomets");
        console.log("✅ Hasil Prediksi: No Met (Negatif Sindrom Metabolik)");
      }
    } catch (err) {
      console.error("❌ Gagal memproses prediksi:", err.message);
      alert("Gagal menghubungi server Flask. Pastikan server sedang berjalan.");
    }
  };

  return (
    <div className="formMets md:my-8 max-md:mt-4 flex flex-col justify-center">
      <h2 className="md:text-2xl font-bold text-center pb-4">
        Cek risiko sindrom metabolik anda
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-gray-800 p-6 text-xs gap-4 md:bg-gray-100 md:rounded w-full max-w-sm mx-auto md:border-1 md:border-gray-200"
      >
        <div className="usia">
          <h3 className="md:text-sm font-semibold pb-1">Usia</h3>
          <input
            type="float"
            name="usia"
            onChange={handleChange}
            placeholder="Masukkan usia anda"
            className="border-1 w-82 p-1"
          />
        </div>

        <div className="gender">
          <h3 className="md:text-sm font-semibold pb-1">Jenis Kelamin</h3>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Laki-laki"
                onChange={handleChange}
              />
              Laki-laki
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Perempuan"
                onChange={handleChange}
              />
              Perempuan
            </label>
          </div>
        </div>

        <div className="waistcirc">
          <h3 className="md:text-sm font-semibold pb-1">
            Lingkar Pinggang (cm)
          </h3>
          <input
            type="float"
            name="lingkar_pinggang"
            onChange={handleChange}
            placeholder="Masukkan lingkar pinggang anda"
            className="border-1 w-82 p-1"
          />
        </div>

        <div className="bmi flex gap-4">
          <div className="berat">
            <h3 className="md:text-sm font-semibold pb-1">Berat Badan (kg)</h3>
            <input
              type="float"
              name="berat"
              onChange={handleChange}
              placeholder="Contoh: 45"
              className="border-1 w-39 p-1"
            />
          </div>
          <div className="tinggi">
            <h3 className="md:text-sm font-semibold pb-1">Tinggi Badan (cm)</h3>
            <input
              type="float"
              name="tinggi"
              onChange={handleChange}
              placeholder="Contoh: 160"
              className="border-1 w-39 p-1"
            />
          </div>
        </div>

        <div className="glucose">
          <h3 className="md:text-sm font-semibold pb-1">Glukosa (mg/dL)</h3>
          <input
            type="float"
            name="glukosa"
            onChange={handleChange}
            placeholder="Masukkan kadar glukosa anda"
            className="border-1 w-82 p-1"
          />
        </div>

        <div className="hdl">
          <h3 className="md:text-sm font-semibold pb-1">HDL (mg/dL)</h3>
          <input
            type="float"
            name="hdl"
            onChange={handleChange}
            placeholder="Masukkan kadar kolestrol HDL anda"
            className="border-1 w-82 p-1"
          />
        </div>

        <div className="tgl">
          <h3 className="md:text-sm font-semibold pb-1">Triglyserida</h3>
          <input
            type="float"
            name="trigliserida"
            onChange={handleChange}
            placeholder="Masukkan kadar trigliserida anda"
            className="border-1 w-82 p-1"
          />
        </div>

        <button className="mt-4 px-8 py-4 bg-[#290092] rounded font-bold text-white max-md:text-xs max-md:px-4 max-md:py-2 cursor-pointer">
          CEK KONDISI
        </button>
      </form>
    </div>
  );
}
