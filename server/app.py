from models import db,FormData, Contact
from flask_migrate import Migrate
from flask import Flask, request, make_response,jsonify
from flask_restful import Api, Resource,reqparse
import os
from flask_cors import CORS


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False


migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)

@app.route('/')
def home():
    return '<h1>Final Project</h1>'

class FormDatas(Resource):
    def get(self):
        form_data = FormData.query.all()
        return jsonify([x.to_dict() for x in form_data])

    def post(self):
        data = request.get_json()
        print(data)
        form_data = FormData(**data)
        db.session.add(form_data)
        db.session.commit()
        return make_response(jsonify(form_data.to_dict()), 201)
    
class Contacts(Resource):   
    def get(self):
        contacts = Contact.query.all()
        return jsonify([x.to_dict() for x in contacts])
    def post(self):
        data = request.get_json()
        print(data)
        contact = Contact(**data)
        db.session.add(contact)
        db.session.commit()
        return make_response(jsonify(contact.to_dict()), 201)
    
api.add_resource(FormDatas, '/form-data')
api.add_resource(Contacts, '/contacts')

if __name__ == '__main__':
    app.run(port=8888, debug=True)