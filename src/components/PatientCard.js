import React from 'react';

const PatientCard = ({ patient, onSelect }) => {
  return (
    <div className="patient-row" onClick={() => onSelect(patient)}>
      <span>{patient.status}</span>
      <span>{patient.name}</span>
      <span>{patient.associatedClinic}</span>
      <span>{patient.insuranceCompany}</span>
      <span>{patient.createdAt}</span>
      <span className="action-area">View</span>
    </div>
  );
};

export default PatientCard;