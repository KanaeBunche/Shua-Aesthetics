from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from flask_migrate import Migrate


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class FormData(db.Model, SerializerMixin):
    __tablename__ = 'form_data'

    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(100), nullable=False)
    phoneNumber = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    appointmentDate = db.Column(db.String(8), nullable=False)
    appointmentTime = db.Column(db.String, nullable=False)
    basic_facial = db.Column(db.Boolean, default=False)  # Add a field for Basic Facial
    back_facial = db.Column(db.Boolean, default=False)   # Add a field for Back Facial
    couples_facial = db.Column(db.Boolean, default=False)  # Add a field for Couples Facial

    @validates('basic_facial', 'back_facial', 'couples_facial')
    def validate_facial(self, key, value):
        # Ensure that the facial field is either True or False
        return value in [True, False]

    def to_dict(self):
        return {
            'id': self.id,
            'phoneNumber': self.phoneNumber,
            'appointmentDate': self.appointmentDate,
            'appointmentTime': self.appointmentTime,
            'fullName': self.fullName,
            'basic_facial': self.basic_facial,
            'back_facial': self.back_facial,
            'couples_facial': self.couples_facial,
            'email': self.email,
            # Include other attributes/columns in the dictionary
        }



class Contact(db.Model, SerializerMixin):
    __tablename__ = 'contacts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    message = db.Column(db.Text, nullable=False)

