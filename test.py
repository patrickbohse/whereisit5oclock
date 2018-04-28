import pyrebase

config = {
  "apiKey": "AIzaSyB0s1M5aeyw-Zz4vTMQ-94arxAFXIFpH1o",
  "authDomain": "root-pilot.firebaseapp.com",
  "databaseURL": "https://root-pilot.firebaseio.com",
  "storageBucket": "root-pilot.appspot.com",
  "serviceAccount": "static/root-pilot-firebase-adminsdk-w5365-96bf3a6a4a.json"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()
storage = firebase.storage()

userList= []

# get all users from DB
users = db.child("USERS").get()
for user in users.each():
        # setup lists for use later
        dayList = []
        mealList = []
        #store basic info about each user
        name = user.val()['NAME']
        uid = user.key()
        days = None
        # skips users that have no meals
        if 'MEALS' in user.val():
            days = user.val()['MEALS']
        if 'NOTIFICATIONTOKEN' in user.val():
            notifToken = user.val()['NOTIFICATIONTOKEN']
        else:
            notifToken = None
        # leave out users that do not have meals
        if days is not None:
            for day in days:
                # access meals for each user
                meals = db.child("USERS/"+ uid + "/MEALS/"+day).get()
                for meal in meals.each():
                    # store basic info about meal
                    fileName = meal.val()['FILENAME']
                    ts = meal.val()['TIMESTAMP']
                    url = storage.child("foodPics/" + uid + fileName).get_url(None)
                    # we have to fix the URL by separating the uids in the original URL and adding "%2F" in between them
                    fixedURLArr = url.split(uid)
                    fixedURL = fixedURLArr[0] + uid + "%2F" + uid + fixedURLArr[2]
                    m = {"url": fixedURL, "timestamp": ts}
                    mealList.append(m)
                sorted(mealList, key=lambda meal: meal['timestamp'])
                d = {"day": day, "mealList": mealList, "timestamp": mealList[0]['timestamp']}
                dayList.append(d)
                # print(d)
                mealList = [] # reset list for next day
            sorted(dayList, key=lambda day: day['timestamp'])
            u = {"name": name, "uid": uid, "meals": dayList, "notifToken":notifToken}
            userList.append(u)
            dayList = [] # reset list for next user
print(userList)

# for u in userList:
#     if u['uid'] == "JTXnwqWbXTRkxbpGYyFeAOAyiNy2": 
#         user = u
# print(user)

# for u in userList:
#     if u['uid'] == "JTXnwqWbXTRkxbpGYyFeAOAyiNy2":
#         print(u)
