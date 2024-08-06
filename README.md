# ZentraTech-Developer-Test-2024

Minimal Full Stack Application

Overview

This project is a minimal full stack web application that users enables send interest messages,allowing real-time chat,built using Django and React.

Prerequisites and Dependencies

Backend(Django)
- Python 3.x
- Django
- Django REST Framework
- Django Channels
- PostgreSQL (or SQLite for simplicity)

Frontend(React)
-Node.js
-React
-Axios
-React Router DOM
-Socket.io-client

Step-by-Step Installation  and Setup Instructions

Backend Setup

1.Clone the Repository:

git clone https://github.com/Aditya-21052131/ZentraTech-Developer-Test-2024

cd interest-app/backend

2.Create and Activate a Virtual Environment:

python3 - m venv venv
source venv/bin/activate

3.Install Dependencies:

pip install -r requirements.txt

4. Configure Database:

   For PostgreSQL,update'DATABASES' in 'settings.py':
   
   DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '',
    }
}

For SQLite (default), no changes needed.

5.Run Migrations:

python manages.py migrate

6.Create a Superuser:

python manage.py createsuperuser

7.Start the Django Server:

python manage.py runserver

Frontend Setup

1.Navigate to the Frontend Directoy:

cd ../frontend

2.Install Dependencies:

npm install

3.Start the React Development Server:

npm start


How to Run the Application

1.Start the Backend Server:

cd backend
source venv/bin/activate
python manage.py runserver

2.Start the Frontend Development Server:

cd ../frontend
npm start

3.Access the Application

Open the browser and navigate to 'https://localhost:3000' to use the applicatiom.





