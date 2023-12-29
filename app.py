from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        email = request.form['email']
        phone_number = request.form['phoneNumber']
        course = request.form['course']
        registration_number = request.form['registrationNumber']

        # Save the file if uploaded
        if 'profileImage' in request.files:
            profile_image = request.files['profileImage']
            profile_image.save("uploads/" + profile_image.filename)
        else:
            profile_image = None

        # Save data to SQLite database
        save_to_database(first_name, last_name, email, phone_number, course, registration_number, profile_image)

        return "Form submitted successfully!"

def save_to_database(first_name, last_name, email, phone_number, course, registration_number, profile_image):
    conn = sqlite3.connect('students.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT,
            email TEXT,
            phone_number TEXT,
            course TEXT,
            registration_number TEXT,
            profile_image_path TEXT
        )
    ''')

    cursor.execute('''
        INSERT INTO students (first_name, last_name, email, phone_number, course, registration_number, profile_image_path)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (first_name, last_name, email, phone_number, course, registration_number, profile_image.filename if profile_image else None))

    conn.commit()
    conn.close()

if __name__ == '__main__':
    app.run(debug=True)
