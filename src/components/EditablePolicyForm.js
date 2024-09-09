import React, { useState } from 'react';

const EditablePolicyForm = () => {
  const [sections, setSections] = useState({
    Policy: [],
    Coverage: [],
    Frequency: []
  });
  const [editMode, setEditMode] = useState(false);

  const addField = (section) => {
    setSections(prev => ({
      ...prev,
      [section]: [...prev[section], '']
    }));
  };

  const updateField = (section, index, value) => {
    setSections(prev => ({
      ...prev,
      [section]: prev[section].map((field, i) => i === index ? value : field)
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    console.log('Saving data:', sections);
    setEditMode(false);
  };

  return (
    <div className="editable-policy-form">
      <div className="form-header">
        <h1>Policy Form</h1>
        <button onClick={toggleEditMode} className="toggle-button">
          {editMode ? 'View Mode' : 'Edit Mode'}
        </button>
      </div>
      {Object.entries(sections).map(([sectionName, fields]) => (
        <div key={sectionName} className="form-section">
          <h2>{sectionName}</h2>
          {fields.map((field, index) => (
            <div key={index} className="form-field">
              {editMode ? (
                <input
                  type="text"
                  value={field}
                  onChange={(e) => updateField(sectionName, index, e.target.value)}
                />
              ) : (
                <p>{field || 'Empty field'}</p>
              )}
            </div>
          ))}
          {editMode && (
            <button onClick={() => addField(sectionName)} className="add-field-button">
              Add Field
            </button>
          )}
        </div>
      ))}
      {editMode && (
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      )}
    </div>
  );
};

export default EditablePolicyForm;