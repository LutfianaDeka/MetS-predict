model = joblib.load('rf_model.pkl')
print(model.predict([[25, 1, 80, 23.5, 100, 45, 150]]))
