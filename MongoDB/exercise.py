import pymongo
import pprint

client=pymongo.MongoClient("localhost",27017)
db=client.cooker
print(db.name)

print("----------------------------------------------------------------------------------------------")

recipe=db.recipes.find_one()
pp=pprint.PrettyPrinter(compact=True)
pp.pprint(recipe)

print("----------------------------------------------------------------------------------------------")

for item in db.recipes.find():
    print(item["title"])

print("----------------------------------------------------------------------------------------------")

for item in db.recipes.find().sort("title",pymongo.ASCENDING).limit(3):
    print(item["title"])

print("----------------------------------------------------------------------------------------------")

search=input("Enter the item name:")
query = {
    "title": {
        "$regex": search,
        "$options": "i"
    }
}
for item in db.recipes.find(query):
    total_time = item["prep_time"]+item["cook_time"]
    output = "[{}]\n".format(item["title"])
    output += "DESCRIPTION: {}\n".format(item["desc"])
    output += "This recipe will take about {} minutes and be ".format(total_time)
    output += "~{} calories per serving\n".format(item["calories_per_serving"])
    print(output)

print("----------------------------------------------------------------------------------------------")

#another method of connection
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["cooker"]
mycol = mydb["recipes"]

for x in mycol.find({},{ "_id": 0, "title": 1, "desc": 1 }).sort("title",-1):
    print(x)

print("----------------------------------------------------------------------------------------------")