#!flask/bin/python
from flask import Flask, jsonify, abort, make_response, request
import numpy as np
from keras.models import load_model
import psycopg2
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/students": {"origins": "http://localhost:5000"}})

#students = [
#    {
#        'id': 0,
#        'name': 'Oscar Meza Leon',
#        'controlNumber': '17171717',
#        'career': 'Ingeniería en Sistema Computacionales',
#        'semester': '5',
#        'grades': [[0,94,71,92,70,86], [99,95,79,84,73,80], [83,92,90,81,80,91], [85,84,91,88,70,72], [97,80,73,88,73,0]],
#    },
#    {
#        'id': 1,
#        'name': 'Oscar Meza Leon',
#        'controlNumber': '17171717',
#        'career': 'Ingeniería en Sistema Computacionales',
#        'semester': '5',
#        'grades': [[0,94,71,92,70,86], [99,95,79,84,73,80], [83,92,90,81,80,91], [85,84,91,88,70,72], [97,80,73,88,73,0]],
#    },
#]

#GET
@app.route('/students', methods=['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Access-Control-Allow-Origin'])
def get_students():
    students = []
    try:
        connection = psycopg2.connect(user = "postgres", password = "654321", host = "127.0.0.1", port = "5432", database = "school")
        cursor = connection.cursor()
        
        #postgreSQL_select_Query = "select * from student where id = {}".format(student_id)
        postgreSQL_select_Query = "select * from student"
        cursor.execute(postgreSQL_select_Query)
        #print("Selecting rows from mobile table using cursor.fetchall")
        value_records = cursor.fetchall()
        #Save each column value into the correspondent  array
        for con in range(0, len(value_records)):
            print(con)
            student = {
                'id': value_records[con][0],
                'name': value_records[con][1],
                'controlNumber': value_records[con][2],
                'career': value_records[con][3],
                'semester': value_records[con][4],
                'grades':value_records[con][5],
            }
            students.append(student)
    except (Exception, psycopg2.Error) as error :
        print ("Error while fetching data from PostgreSQL", error)
    finally:
        #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")
    
    return jsonify(students)

@app.route('/students/<int:student_id>', methods=['GET'])
@cross_origin()
def get_student(student_id):

    try:
        connection = psycopg2.connect(user = "postgres", password = "654321", host = "127.0.0.1", port = "5432", database = "school")
        cursor = connection.cursor()
        
        postgreSQL_select_Query = "select * from student where id = {}".format(student_id)
        #postgreSQL_select_Query = "select * from student"
        cursor.execute(postgreSQL_select_Query)
        #print("Selecting rows from mobile table using cursor.fetchall")
        value_records = cursor.fetchall()
        #Save each column value into the correspondent  array
        student = {
            'id': value_records[0][0],
            'name': value_records[0][1],
            'controlNumber': value_records[0][2],
            'career': value_records[0][3],
            'semester': value_records[0][4],
            'grades':value_records[0][5],
        }
    except (Exception, psycopg2.Error) as error :
        print ("Error while fetching data from PostgreSQL", error)
    finally:
        #closing database connection.
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")

    #student = [student for student in students if student['id'] == student_id]
    if len(student) == 0:
        abort(404)
    aux = [0,0,0,0,0]
    grades = student['grades']

    for con in range(0, len(grades)):
        smstr = sum(grades[con])/len(grades[con])
        aux[con] = smstr
        smstr = 0
    modelName = "hackathon.h5"
    model = load_model(modelName)
    x_db = np.asarray(aux)
    x_db = x_db.reshape((1, 1, x_db.shape[0]))
    pred = model.predict(x_db, 10, verbose=0)
    if pred[0][0][0] > 80:
        status = 'Favorable'
    if pred[0][0][0] < 80 and pred[0][0][0] > 70:
        status = 'Regular'
    if pred[0][0][0] < 70:
        status = 'No favorable'
    return jsonify({
        'id': student['id'],
        'name': student['name'],
        'controlNumber': student['controlNumber'],
        'career': student['career'],
        'semester': student['semester'],
        'status': status,
        })


##POST
#@app.route('/todo/api/v1.0/tasks', methods=['POST'])
#def create_task():
#    if not request.json or not 'title' in request.json:
#        abort(400)
#    task = {
#        'id': tasks[-1]['id'] + 1,
#        'title': request.json['title'],
#        'description': request.json.get('description', ""),
#        'done': False
#    }
#    tasks.append(task)
#    return jsonify({'task': task}), 201

#ERROR
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True)