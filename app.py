from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Penting agar React bisa akses

model = joblib.load('rf_model.pkl')  # Pastikan pathnya betul

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    print("Received:", data)

    features = np.array([
        data['Age'],
        data['Sex'],
        data['WaistCirc'],
        data['BMI'],
        data['BloodGlucose'],
        data['HDL'],
        data['Triglycerides']
    ]).reshape(1, -1)

    prediction = model.predict(features)
    return jsonify({'result': int(prediction[0])})

@app.route('/')
def index():
    return "Flask API is running."

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
