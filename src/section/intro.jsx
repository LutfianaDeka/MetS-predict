export default function Intro() {
  return (
    <>
      <div className="home mt-8 flex flex-col justify-center ">
        <h2 className="md:text-2xl font-bold text-center ">
          Apa itu sindrom metabolik?
        </h2>
        <div className="box flex md:bg-gray-100 p-8 max-md:py-4 mt-4 max-md:mt-2 rounded w-full max-w-5xl mx-auto md:shadow-lg max-md:flex-col  ">
          <img
            src="/dash.png"
            className="w-70 object-contain max-md:block max-md:mx-auto max-md:w-1/2 border-1 border-gray-400"
            alt=""
          />
          <p className="md:pl-6 max-md:text-xs max-md:pt-6 text-justify max-md:pb-1">
            Sindrom Metabolik merupakan suatu kelainan yang ditandai dengan
            kondisi obesitas sentral, resistensi insulin, hipertensi, dan
            dislipidemia. Kondisi ini dapat meningkatkan risiko seseorang
            terkena penyakit stroke, kardiovaskular, dan diabetes tipe 2.
            <br />
            <br />
            Menurut National Heart, Lung, and Blood Institute, seseorang
            didiagnosis mengidap Sindrom Metabolik apabila memiliki tiga atau
            lebih dari kriteria berikut:
            <ul className="list-disc list-inside mt-2">
              <li>Tekanan darah ≥ 130/85 mmHg</li>
              <li>Gula darah puasa (Fasting Glucose) ≥ 100 mg/dL</li>
              <li>
                Kolesterol HDL (baik): &lt; 40 mg/dL (pria), &lt; 50 mg/dL
                (wanita)
              </li>
              <li>Trigliserida &gt; 150 mg/dL</li>
              <li>Lingkar pinggang: &gt; 102 cm (pria), &gt; 89 cm (wanita)</li>
            </ul>
          </p>
        </div>
        <hr className="md:mt-8 mx-8 border-gray-400 border-t-2" />
      </div>
    </>
  );
}
