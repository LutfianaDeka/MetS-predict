# metspredict: sistem deteksi dini risiko sindrom metabolik

MetsPredcit merupakan aplikasi berbasis web yang dirancang untuk membantu pengguna melakukan deteksi dini terhadap risiko sindrom metabolik. proyek ini mengintegrasikan model machine learning klasifikasi (random forest) dengan antarmuka web modern yang responsif.

## 🚀 fitur utama
* **kalkulator bmi otomatis:** menghitung indeks massa tubuh secara real-time dari input berat dan tinggi badan.
* **prediksi cerdas:** menggunakan model random forest yang telah dilatih untuk menangani ketidakseimbangan data (*class imbalance*) menggunakan teknik smote/adasyn.
* **antarmuka responsif:** dibangun dengan react dan tailwind css untuk pengalaman pengguna yang optimal di berbagai perangkat.
* **arsitektur terpisah:** menggunakan flask sebagai api backend yang dideploy secara mandiri di hugging face spaces.

## 🛠️ teknologi yang digunakan

### frontend
* **react.js:** library utama untuk membangun antarmuka pengguna.
* **tailwind css:** framework css untuk styling yang cepat dan modern.
* **axios:** untuk komunikasi asinkron dengan api backend.
* **react router:** untuk manajemen navigasi halaman.

### backend (api)
* **python & flask:** framework ringan untuk melayani endpoint prediksi.
* **scikit-learn:** untuk implementasi algoritma random forest.
* **joblib:** untuk memuat model machine learning (.pkl).
* **docker:** untuk standarisasi environment saat deployment di hugging face.

## 📦 struktur folder
```text
├── frontend/ (react app)
│   ├── src/
│   │   ├── section/ (komponen form, navbar, dll)
│   │   ├── app.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend/ (api & ml model)
    ├── app.py
    ├── rf_model.pkl
    ├── dockerfile
    └── requirements.txt