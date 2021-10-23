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

@app.route("/getAllFood/<pagenum>/")
def getAllFood(pagenum):
    '''
    Example Return:

    {
        "result": [
            {
                "food_id": 1,
                "food_name": "banana",
                "energy": 200,
                "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
            },
            {
                "food_id": 2,
                "food_name": "apple",
                "energy": 124,
                "image": "https://static.wikia.nocookie.net/the-snack-encyclopedia/images/7/7d/Apple.png/revision/latest?cb=20200706145821"
            }
        ]
    }
    '''
    try:
        # get data from database
        # for each page, contains 20 items
        foods = ["Milk, human", "Milk, NFS", "Milk, whole", "Milk, low sodium, whole"]
        ids = [1,2,3,4]
        calories = [70, 51, 60, 61]
        images = ["","","",""]

        res = []
        for id, food, calorie, image in zip(ids, foods, calories, images):
            res.append({
                "food_id": id,
                "food_name": food,
                "energy": calorie,
                "image": image
            })

        return {"result": res, "status": 200}
    except Exception as e:
        return {"result": e, "status": 500}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)