import React, { useState } from 'react';

const PatientDetails = ({ patient, onClose, onSave }) => {
  const [editedPatient, setEditedPatient] = useState({
    ...patient,
    groupName: '',
    groupNumber: '',
    memberId: ''
  });

  const handleChange = (e) => {
    setEditedPatient({ ...editedPatient, [e.target.name]: e.target.value });
  };

  return (
    <div className="patient-details">
      <div className="patient-details-content">
        <h2>{patient.name}</h2>
        <div className="details-grid uneditable">
          <label>Status:</label>
          <span>{patient.status}</span>
          <label>Clinic:</label>
          <span>{patient.associatedClinic}</span>
          <label>Insurance:</label>
          <span>{patient.insuranceCompany}</span>
        </div>
        <div className="details-grid editable">
          <label>Group Name:</label>
          <input
            type="text"
            name="groupName"
            value={editedPatient.groupName || ''}
            onChange={handleChange}
          />
          <label>Group Number:</label>
          <input
            type="text"
            name="groupNumber"
            value={editedPatient.groupNumber || ''}
            onChange={handleChange}
          />
          <label>Member ID:</label>
          <input
            type="text"
            name="memberId"
            value={editedPatient.memberId || ''}
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
          <button onClick={() => onSave(editedPatient)}>Save</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;