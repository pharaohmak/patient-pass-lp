import React, { useState, useEffect } from 'react';
import PatientCard from '../components/PatientCard';
import './Dashboard.css';
// import axios from 'axios'; // Uncomment when connecting to Xano

const Dashboard = () => {
  const [patients, setPatients] = useState([
    { status: 'Not Started', name: 'Donald Trump', associatedClinic: 'admin1', insuranceCompany: 'Donald Insure', createdAt: '08-09-2024' },
    { status: 'Not Started', name: 'Brap Pitt', associatedClinic: 'admin1', insuranceCompany: 'Brad Insure', createdAt: '08-09-2024' },
    { status: 'Not Started', name: 'Travis Scott', associatedClinic: 'admin1', insuranceCompany: 'Travis Insure', createdAt: '08-09-2024' },
    { status: 'Not Started', name: 'Kamala Harris', associatedClinic: 'admin1', insuranceCompany: 'Kamala Insure', createdAt: '08-09-2024' },
  ]);

  // Uncomment and modify this when you're ready to connect to Xano
  // useEffect(() => {
  //   const fetchPatients = async () => {
  //     try {
  //       const response = await axios.get('Your_Xano_API_Endpoint/patients');
  //       setPatients(response.data);
  //     } catch (error) {
  //       console.error('Error fetching patients:', error);
  //     }
  //   };
  //
  //   fetchPatients();
  // }, []);

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
          <PatientCard key={index} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;