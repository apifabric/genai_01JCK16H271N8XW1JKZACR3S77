# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 13, 2024 15:11:24
# Database: sqlite:////tmp/tmp.KOqKQX9Vhm-01JCK16H271N8XW1JKZACR3S77/MedicalClinicSystem/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class ClinicStaff(SAFRSBaseX, Base):
    """
    description: Table for storing clinic staff information.
    """
    __tablename__ = 'clinic_staff'
    _s_collection_name = 'ClinicStaff'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    position = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Doctor(SAFRSBaseX, Base):
    """
    description: Table for storing doctor information in the clinic.
    """
    __tablename__ = 'doctor'
    _s_collection_name = 'Doctor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    specialization = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    AppointmentList : Mapped[List["Appointment"]] = relationship(back_populates="doctor")



class Equipment(SAFRSBaseX, Base):
    """
    description: Table for storing clinic equipment information.
    """
    __tablename__ = 'equipment'
    _s_collection_name = 'Equipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    equipment_name = Column(String, nullable=False)
    equipment_type = Column(String, nullable=False)
    purchase_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Inventory(SAFRSBaseX, Base):
    """
    description: Table for managing inventory items in the clinic.
    """
    __tablename__ = 'inventory'
    _s_collection_name = 'Inventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    item_name = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Patient(SAFRSBaseX, Base):
    """
    description: Table for storing patient information in the clinic.
    """
    __tablename__ = 'patient'
    _s_collection_name = 'Patient'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    dob = Column(Date, nullable=False)
    gender = Column(String(1), nullable=False)
    phone_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    AppointmentList : Mapped[List["Appointment"]] = relationship(back_populates="patient")
    MedicalRecordList : Mapped[List["MedicalRecord"]] = relationship(back_populates="patient")



class Room(SAFRSBaseX, Base):
    """
    description: Table for storing information about rooms available in the clinic.
    """
    __tablename__ = 'room'
    _s_collection_name = 'Room'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    room_number = Column(String, nullable=False)
    room_type = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Supplier(SAFRSBaseX, Base):
    """
    description: Table for storing supplier information associated with clinic consumables.
    """
    __tablename__ = 'supplier'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    supplier_name = Column(String, nullable=False)
    contact_number = Column(String)
    address = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Appointment(SAFRSBaseX, Base):
    """
    description: Table for storing appointment details including doctor and patient associations.
    """
    __tablename__ = 'appointment'
    _s_collection_name = 'Appointment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    patient_id = Column(ForeignKey('patient.id'), nullable=False)
    doctor_id = Column(ForeignKey('doctor.id'), nullable=False)
    appointment_date = Column(DateTime, nullable=False)
    reason = Column(String)

    # parent relationships (access parent)
    doctor : Mapped["Doctor"] = relationship(back_populates=("AppointmentList"))
    patient : Mapped["Patient"] = relationship(back_populates=("AppointmentList"))

    # child relationships (access children)
    InvoiceList : Mapped[List["Invoice"]] = relationship(back_populates="appointment")
    PrescriptionList : Mapped[List["Prescription"]] = relationship(back_populates="appointment")



class MedicalRecord(SAFRSBaseX, Base):
    """
    description: Table for storing medical records associated with a patient.
    """
    __tablename__ = 'medical_record'
    _s_collection_name = 'MedicalRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    patient_id = Column(ForeignKey('patient.id'), nullable=False)
    record_date = Column(DateTime, nullable=False)
    diagnosis = Column(String)
    treatment = Column(String)

    # parent relationships (access parent)
    patient : Mapped["Patient"] = relationship(back_populates=("MedicalRecordList"))

    # child relationships (access children)



class Invoice(SAFRSBaseX, Base):
    """
    description: Table for storing invoice information related to appointments.
    """
    __tablename__ = 'invoice'
    _s_collection_name = 'Invoice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    appointment_id = Column(ForeignKey('appointment.id'), nullable=False)
    total_amount = Column(Integer, nullable=False)
    paid_amount = Column(Integer, nullable=False)
    due_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    appointment : Mapped["Appointment"] = relationship(back_populates=("InvoiceList"))

    # child relationships (access children)
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="invoice")



class Prescription(SAFRSBaseX, Base):
    """
    description: Table for storing prescriptions linked to appointments.
    """
    __tablename__ = 'prescription'
    _s_collection_name = 'Prescription'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    appointment_id = Column(ForeignKey('appointment.id'), nullable=False)
    medication_name = Column(String, nullable=False)
    dosage = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime)

    # parent relationships (access parent)
    appointment : Mapped["Appointment"] = relationship(back_populates=("PrescriptionList"))

    # child relationships (access children)



class Payment(SAFRSBaseX, Base):
    """
    description: Table for recording payments for invoices.
    """
    __tablename__ = 'payment'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    invoice_id = Column(ForeignKey('invoice.id'), nullable=False)
    payment_date = Column(DateTime, nullable=False)
    amount = Column(Integer, nullable=False)
    method = Column(String, nullable=False)

    # parent relationships (access parent)
    invoice : Mapped["Invoice"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)
