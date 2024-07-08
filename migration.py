import psycopg2

# Connect to the database
conn = psycopg2.connect("dbname=million user=postgres password=root")

# Create a cursor object to execute SQL queries
cur = conn.cursor()

# Define the number of users to insert
num_users = 1000000

# Generate and execute SQL queries to insert users
for i in range(1, num_users+1):
    cur.execute("INSERT INTO problem (name, last_name) VALUES (%s, %s)", (f"Name{i}", f"Last{i}"))

# Commit the changes to the database
conn.commit()

# Close the cursor and the connection
cur.close()
conn.close()
