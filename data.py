import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('students.db')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Query the data
cursor.execute('SELECT * FROM students')
rows = cursor.fetchall()

# Display the data
for row in rows:
    print(row)

# Close the cursor and connection
cursor.close()
conn.close()
