from flask import Flask
from flask import request, jsonify
import sql_util

app = Flask(__name__)

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
        # for each page, contains 10 items
        # foods = ["Milk, human", "Milk, NFS", "Milk, whole", "Milk, low sodium, whole"]
        # ids = [1,2,3,4]
        # calories = [70, 51, 60, 61]
        # images = ["https://media.npr.org/assets/img/2015/04/07/breast-milk_custom-a66e540b37943ead359ef56810a0fffc80c95362.jpg","https://happyforks.com/static/foto/prod/mobile-l/4.jpg","https://i5.walmartimages.com/asr/83f533c3-3234-4bea-80bf-a0f9a43cd279_2.9b223f40bab27c513ba64f9f0e3fc2d9.jpeg","https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/00713757061933_C1N1f.JPG"]

        pagenum = int(pagenum)
        start = 10 * (pagenum - 1)
        end = 10 * pagenum
        sql = f"select * from food where food_id>{start} and food_id<={end};"
        sql_res = sql_util.execute(sql)
        print(sql_res)

        res = []
        for id, food, calorie, image in sql_res:
            res.append({
                "food_id": id,
                "food_name": food,
                "energy": calorie,
                "image": image
            })

        return jsonify([{"result": res, "status": 200}])
    except Exception as e:
        return jsonify([{"result": e, "status": 500}])

@app.route("/insertFoodRecord", methods=["POST"])
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
        data = request.get_json()
        uid = data["uid"] if "uid" in data else 1
        foods = data["foods"]
        date = "2021-10-24"

        # call sql insert
        for food in foods:
            values = (int(uid), int(food["food_id"]), float(food["amount"]), date)
            sql = "INSERT INTO food_record VALUES (%s,%s,%s,%s)"

            res = sql_util.execute(sql, values)
        # print(sql_util.execute("select * from food_record;"))
        return jsonify([{"result": "succeed", "status": 200}])
    except Exception as e:
        return jsonify([{"result": e, "status": 500}])
    
@app.route("/getAllFitness/")
def getAllFitness():


    return

@app.route("/insertFitnessRecord", methods=["POST"])
def insertFitnessRecord():
    return

@app.route("/getAllMood/")
def getAllMood():
    return

@app.route("/getAllSleep/")
def getAllSleep():
    try:
        uid = 1
        sql = "SELECT duration, date from sleep_record where uid=1 order by date desc limit 30"
        sql_res = sql_util.execute(sql)
        res = []
        for duration, date in sql_res:
            res.append({"sleeptime":float(duration), "date":date})

        return jsonify([{"result": res, "status": 200}])

    except Exception as e:
        return jsonify([{"result": e, "status": 500}])
    

@app.route("/insertWeightMoodSleep", methods=["POST"])
def insertWeight():
    try:
        '''
        Example Request:
        {
            "weight": 50,
            "sleeptime": 8.5,
            "mood": 5,
            "date": "2021-10-24",
            "uid": 1
        }
        '''

        data = request.get_json()
        uid = int(data["uid"]) if "uid" in data else 1
        weight = float(data["weight"]) 
        mood = int(data["mood"]) if "mood" in data else 5.0
        date = "2021-10-24"
        sleeptime = float(data["sleeptime"]) if "mood" in data else 8.0

        # insert weight
        sql = "INSERT INTO weight_record VALUES (%s,%s,%s)"
        res = sql_util.execute(sql, (uid, weight, date))

        # insert sleeptime
        sql = "INSERT INTO sleep_record VALUES (%s,%s,%s,%s)"
        res = sql_util.execute(sql, (uid, 0, str(sleeptime), date))

        # insert mood
        sql = "INSERT INTO mood_record VALUES (%s,%s,%s)"
        res = sql_util.execute(sql, (uid, mood, date))

        print(sql_util.execute("select * from food_record;"))
        print(sql_util.execute("select * from sleep_record;"))
        print(sql_util.execute("select * from mood_record;"))
        return jsonify([{"result": "succeed", "status": 200}])
    except Exception as e:
        return jsonify([{"result": e, "status": 500}])

@app.route("/getWarning/")
def giveWarning():
    try:
        msg = ["Trend to overweight in 3 months.", "High calorie income with little time to do exercise.", "Bad emotion status may influence you to eat more food than usual.", "Too less sleeping time may let you gain more fats."]
        return jsonify([{"result": msg, "status":200}])
    except Exception as e:
        return jsonify([{"result": e, "status": 500}])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)