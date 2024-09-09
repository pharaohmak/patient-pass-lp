import React, { useState } from 'react';
import PatientCard from '../components/PatientCard';
import PatientDetails from '../components/PatientDetails';
import './Dashboard.css';

const Dashboard = () => {
  const [patients, setPatients] = useState([
    { status: 'Not Started', name: 'Donald Trump', associatedClinic: 'admin1', insuranceCompany: 'Donald Insure', createdAt: '08-09-2024' },
    { status: 'Not Started', name: 'Brap Pitt', associatedClinic: 'admin1', insuranceCompany: 'Brad Insure', createdAt: '08-09-2024' },
    { status: 'Not Started', name: 'Travis Scott', associatedClinic: 'admin1', insuranceCompany: 'Travis Insure', createdAt: '08-09-2024' },
    { status: 'Not Started', name: 'Kamala Harris', associatedClinic: 'admin1', insuranceCompany: 'Kamala Insure', createdAt: '08-09-2024' },
  ]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handlePatientSave = (editedPatient) => {
    setPatients(patients.map(p => p.name === editedPatient.name ? editedPatient : p));
    setSelectedPatient(null);
  };

  return (
    <div className="dashboard">
      <h1>Patient Dashboard</h1>
      <div className="patient-table">
        <div className="patient-header">
          <span>Status</span>
          <span>Name</span>
          <span>Associated Clinic</span>
          <span>Insurance Company</span>
          <span>Created At</span>
          <span>Actions</span>
        </div>
        {patients.map((patient, index) => (
          <PatientCard key={index} patient={patient} onSelect={handlePatientSelect} />
        ))}
      </div>
      {selectedPatient && (
        <PatientDetails
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
          onSave={handlePatientSave}
        />
      )}
    </div>
  );
};

export default Dashboard;