# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Patient(Base):
    """description: Table for storing patient information in the clinic."""
    __tablename__ = 'patient'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    dob = Column(Date, nullable=False)
    gender = Column(String(1), nullable=False)
    phone_number = Column(String, nullable=True)


class Doctor(Base):
    """description: Table for storing doctor information in the clinic."""
    __tablename__ = 'doctor'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    specialization = Column(String, nullable=False)


class Appointment(Base):
    """description: Table for storing appointment details including doctor and patient associations."""
    __tablename__ = 'appointment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    patient_id = Column(Integer, ForeignKey('patient.id'), nullable=False)
    doctor_id = Column(Integer, ForeignKey('doctor.id'), nullable=False)
    appointment_date = Column(DateTime, nullable=False)
    reason = Column(String, nullable=True)


class MedicalRecord(Base):
    """description: Table for storing medical records associated with a patient."""
    __tablename__ = 'medical_record'

    id = Column(Integer, primary_key=True, autoincrement=True)
    patient_id = Column(Integer, ForeignKey('patient.id'), nullable=False)
    record_date = Column(DateTime, nullable=False)
    diagnosis = Column(String, nullable=True)
    treatment = Column(String, nullable=True)


class Prescription(Base):
    """description: Table for storing prescriptions linked to appointments."""
    __tablename__ = 'prescription'

    id = Column(Integer, primary_key=True, autoincrement=True)
    appointment_id = Column(Integer, ForeignKey('appointment.id'), nullable=False)
    medication_name = Column(String, nullable=False)
    dosage = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=True)


class Invoice(Base):
    """description: Table for storing invoice information related to appointments."""
    __tablename__ = 'invoice'

    id = Column(Integer, primary_key=True, autoincrement=True)
    appointment_id = Column(Integer, ForeignKey('appointment.id'), nullable=False)
    total_amount = Column(Integer, nullable=False)
    paid_amount = Column(Integer, nullable=False)
    due_date = Column(DateTime, nullable=False)


class Payment(Base):
    """description: Table for recording payments for invoices."""
    __tablename__ = 'payment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    invoice_id = Column(Integer, ForeignKey('invoice.id'), nullable=False)
    payment_date = Column(DateTime, nullable=False)
    amount = Column(Integer, nullable=False)
    method = Column(String, nullable=False)


class ClinicStaff(Base):
    """description: Table for storing clinic staff information."""
    __tablename__ = 'clinic_staff'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    position = Column(String, nullable=False)


class Room(Base):
    """description: Table for storing information about rooms available in the clinic."""
    __tablename__ = 'room'

    id = Column(Integer, primary_key=True, autoincrement=True)
    room_number = Column(String, nullable=False)
    room_type = Column(String, nullable=False)


class Equipment(Base):
    """description: Table for storing clinic equipment information."""
    __tablename__ = 'equipment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    equipment_name = Column(String, nullable=False)
    equipment_type = Column(String, nullable=False)
    purchase_date = Column(DateTime, nullable=False)


class Inventory(Base):
    """description: Table for managing inventory items in the clinic."""
    __tablename__ = 'inventory'

    id = Column(Integer, primary_key=True, autoincrement=True)
    item_name = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False)


class Supplier(Base):
    """description: Table for storing supplier information associated with clinic consumables."""
    __tablename__ = 'supplier'

    id = Column(Integer, primary_key=True, autoincrement=True)
    supplier_name = Column(String, nullable=False)
    contact_number = Column(String, nullable=True)
    address = Column(String, nullable=True)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

# Test Data for Patient
patient1 = Patient(first_name='John', last_name='Doe', dob=date(1985, 1, 15), gender='M', phone_number='1234567890')
patient2 = Patient(first_name='Jane', last_name='Smith', dob=date(1990, 5, 20), gender='F', phone_number='0987654321')
patient3 = Patient(first_name='Jim', last_name='Bean', dob=date(1975, 7, 30), gender='M')
patient4 = Patient(first_name='Julia', last_name='Roberts', dob=date(1995, 12, 10), gender='F', phone_number='5555555555')

# Test Data for Doctor
doctor1 = Doctor(first_name='Alice', last_name='Johnson', specialization='Cardiology')
doctor2 = Doctor(first_name='Bob', last_name='Marley', specialization='Dentistry')
doctor3 = Doctor(first_name='Charlie', last_name='Brown', specialization='Dermatology')
doctor4 = Doctor(first_name='Dave', last_name='Matthews', specialization='Neurology')

# Test Data for Appointment
appointment1 = Appointment(patient_id=1, doctor_id=2, appointment_date=datetime(2023, 10, 20, 14, 30), reason='Regular Checkup')
appointment2 = Appointment(patient_id=3, doctor_id=1, appointment_date=datetime(2023, 10, 21, 9, 0), reason='Follow-up')
appointment3 = Appointment(patient_id=2, doctor_id=3, appointment_date=datetime(2023, 10, 22, 11, 15))
appointment4 = Appointment(patient_id=4, doctor_id=4, appointment_date=datetime(2023, 10, 23, 15, 45), reason='Consultation')

# Test Data for MedicalRecord
medical_record1 = MedicalRecord(patient_id=1, record_date=datetime(2023, 10, 20), diagnosis='Hypertension', treatment='Medication')
medical_record2 = MedicalRecord(patient_id=2, record_date=datetime(2023, 10, 21), diagnosis='Toothache', treatment='Root Canal')
medical_record3 = MedicalRecord(patient_id=3, record_date=datetime(2023, 10, 22), diagnosis='Acne', treatment='Topical Cream')
medical_record4 = MedicalRecord(patient_id=4, record_date=datetime(2023, 10, 23), diagnosis='Migraine', treatment='Pain Relief')

# Test Data for Prescription
prescription1 = Prescription(appointment_id=1, medication_name='Aspirin', dosage='100mg', start_date=datetime(2023, 10, 20), end_date=datetime(2023, 11, 20))
prescription2 = Prescription(appointment_id=2, medication_name='Amoxicillin', dosage='250mg', start_date=datetime(2023, 10, 21))
prescription3 = Prescription(appointment_id=3, medication_name='Ibuprofen', dosage='200mg', start_date=datetime(2023, 10, 22), end_date=datetime(2023, 12, 31))
prescription4 = Prescription(appointment_id=4, medication_name='Paracetamol', dosage='500mg', start_date=datetime(2023, 10, 23))

# Test Data for Invoice
invoice1 = Invoice(appointment_id=1, total_amount=150, paid_amount=100, due_date=datetime(2023, 11, 1))
invoice2 = Invoice(appointment_id=2, total_amount=200, paid_amount=200, due_date=datetime(2023, 11, 2))
invoice3 = Invoice(appointment_id=3, total_amount=350, paid_amount=250, due_date=datetime(2023, 11, 3))
invoice4 = Invoice(appointment_id=4, total_amount=120, paid_amount=120, due_date=datetime(2023, 11, 4))

# Test Data for Payment
payment1 = Payment(invoice_id=1, payment_date=datetime(2023, 10, 25), amount=50, method='Credit Card')
payment2 = Payment(invoice_id=2, payment_date=datetime(2023, 10, 26), amount=200, method='Cash')
payment3 = Payment(invoice_id=3, payment_date=datetime(2023, 10, 27), amount=100, method='Debit Card')
payment4 = Payment(invoice_id=4, payment_date=datetime(2023, 10, 28), amount=120, method='Online')

# Test Data for ClinicStaff
staff1 = ClinicStaff(first_name='Emily', last_name='Blunt', position='Receptionist')
staff2 = ClinicStaff(first_name='Matt', last_name='Damon', position='Nurse')
staff3 = ClinicStaff(first_name='Leonardo', last_name='DiCaprio', position='Technician')
staff4 = ClinicStaff(first_name='Scarlett', last_name='Johansson', position='Pharmacist')

# Test Data for Room
room1 = Room(room_number='101', room_type='Consultation')
room2 = Room(room_number='102', room_type='Surgery')
room3 = Room(room_number='103', room_type='Recovery')
room4 = Room(room_number='104', room_type='ICU')

# Test Data for Equipment
equipment1 = Equipment(equipment_name='X-Ray Machine', equipment_type='Diagnostic', purchase_date=datetime(2020, 1, 1))
equipment2 = Equipment(equipment_name='Ultrasound Machine', equipment_type='Diagnostic', purchase_date=datetime(2019, 6, 15))
equipment3 = Equipment(equipment_name='ECG Monitor', equipment_type='Monitoring', purchase_date=datetime(2021, 8, 22))
equipment4 = Equipment(equipment_name='Ventilator', equipment_type='Respiratory', purchase_date=datetime(2022, 3, 30))

# Test Data for Inventory
inventory1 = Inventory(item_name='Syringe', quantity=500)
inventory2 = Inventory(item_name='Bandage', quantity=300)
inventory3 = Inventory(item_name='Gloves', quantity=1000)
inventory4 = Inventory(item_name='Mask', quantity=2000)

# Test Data for Supplier
supplier1 = Supplier(supplier_name='MediSupplies', contact_number='0987654321', address='123 Health Street')
supplier2 = Supplier(supplier_name='HealthWare', contact_number='0123456789', address='456 Care Road')
supplier3 = Supplier(supplier_name='ClinicPlus', contact_number='1122334455', address='789 Clinic Ave')
supplier4 = Supplier(supplier_name='PharmaGoods', contact_number='6677889900', address='321 Cure Blvd')


session.add_all([patient1, patient2, patient3, patient4, doctor1, doctor2, doctor3, doctor4, appointment1, appointment2, appointment3, appointment4, medical_record1, medical_record2, medical_record3, medical_record4, prescription1, prescription2, prescription3, prescription4, invoice1, invoice2, invoice3, invoice4, payment1, payment2, payment3, payment4, staff1, staff2, staff3, staff4, room1, room2, room3, room4, equipment1, equipment2, equipment3, equipment4, inventory1, inventory2, inventory3, inventory4, supplier1, supplier2, supplier3, supplier4])
session.commit()
