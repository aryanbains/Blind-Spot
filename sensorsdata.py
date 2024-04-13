from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
from pymongo import MongoClient
# MongoDB connection string
# Replace 'your_username', 'your_password', and 'your_cluster' with your actual credentials
mongo_uri = "mongodb+srv://aryanbains6:aryan@cluster0.j0ltgyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Initialize MongoDB client
client = MongoClient(mongo_uri)

# Select database and collection
db = client['sensordata']  # Replace 'your_database' with your actual database name
collection = db['news']  # Replace 'your_collection' with your actual collection name
options = webdriver.EdgeOptions()
options.add_argument("--disable-notifications")
options.add_argument("--start-maximized")
driver = webdriver.Edge(options=options)

url = ('http://192.168.75.56/')
driver.get(url)
sleep(7)




def get_contact_info():
    try:
        temperature = driver.find_element(By.XPATH, "/html/body/div[1]/p[2]")
        temperature_text = temperature.text
    
        humidity = driver.find_element(By.XPATH, '/html/body/div[2]/p[2]')
        humidity_text = humidity.text
        
        distance = driver.find_element(By.XPATH, '/html/body/div[3]/p[2]')
        distance_text = distance.text

        heartrate = driver.find_element(By.XPATH, '/html/body/div[4]/p[2]')
        heartrate_text = heartrate.text
        
        # Insert scraped data into MongoDB
        data = {
            'Temperature': temperature_text,
            'Humidity': humidity_text,
            'Distance': distance_text,
            'HeartRate': heartrate_text
        }
        collection.insert_one(data)
            
    except Exception as e:
        print("Error:", e)
        return None

get_contact_info()

# Close the WebDriver
driver.quit()