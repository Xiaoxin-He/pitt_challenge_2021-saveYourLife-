from flask import Flask
from flask import request

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
        images = ["https://media.npr.org/assets/img/2015/04/07/breast-milk_custom-a66e540b37943ead359ef56810a0fffc80c95362.jpg","https://happyforks.com/static/foto/prod/mobile-l/4.jpg","https://i5.walmartimages.com/asr/83f533c3-3234-4bea-80bf-a0f9a43cd279_2.9b223f40bab27c513ba64f9f0e3fc2d9.jpeg","https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/00713757061933_C1N1f.JPG"]

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

@app.route("/insertFoodRecord/", methods=["POST"])
def insertFoodRecord():
    '''
    Example Request:
    
    {
        "uid": 1,
        "foods": [
            {
                "food_id": 1,
                "amount": 200,
            },
            {
                "food_id": 2,
                "amount": 100
            }
        ],
        "date": datetime
    }
    '''
    try:
        uid = request.form["uid"]
        foods = request.form["foods"]
        date = request.form["date"]

        # call sql insert
        for food in foods:
            pass

        return {"result": "succeed", "status": 200}
    except Exception as e:
        return {"result": e, "status": 500}
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)