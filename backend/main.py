from flask import Flask

app = Flask(__name__)

@app.route("/test/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/predict/", methods=["GET", "POST"])
def predict():
    # get data from last 7 days
    history = []
    return

@app.route("/getAllFood/<pagenum>")
def getAllFood(pagenum):
    # get data from database
    # for each page, contains 20 items
    foods = ["Milk, human", "Milk, NFS", "Milk, whole", "Milk, low sodium, whole"]
    ids = [1,2,3,4]
    calories = [70, 51, 60, 61]

    res = []
    for id, food, calory in zip(ids, foods, calories):
        res.append({
            "food_id": id,
            "food_name": food,
            "energy": calory
        })

    return {"result":res}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)