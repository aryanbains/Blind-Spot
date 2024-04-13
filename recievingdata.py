from pymongo import MongoClient

# Replace the connection string below with your MongoDB Atlas connection string
# The connection string should be obtained from your MongoDB Atlas dashboard
# It should look something like this:
# "mongodb+srv://<username>:<password>@<cluster-address>/<dbname>?retryWrites=true&w=majority"
connection_string = "mongodb+srv://aryanbains6:aryan@cluster0.j0ltgyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Connect to MongoDB Atlas
client = MongoClient(connection_string)

# Select the database
db = client['sensordata']  # Replace 'your_database_name' with the name of your database

# Select the collection
collection = db['news']  # Replace 'your_collection_name' with the name of your collection

def fetch_data_from_mongodb():
    try:
        # Fetch data from MongoDB collection
        cursor = collection.find({}, {'_id': 0})  # Exclude _id field from the result
        for document in cursor:
            print(document)
    except Exception as e:
        print("Error:", e)
    finally:
        # Close MongoDB connection
        client.close()

# Call the function to fetch data
fetch_data_from_mongodb()
