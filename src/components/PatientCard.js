import React from 'react';

const PatientCard = ({ patient }) => (
  <div className="patient-row">
    <span>{patient.status}</span>
    <span>{patient.name}</span>
    <span>{patient.associatedClinic}</span>
    <span>{patient.insuranceCompany}</span>
    <span>{patient.createdAt}</span>
    <span className="action-area"></span>
  </div>
);

export default PatientCard;