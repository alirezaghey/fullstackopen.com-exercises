import React from 'react';

const PersonForm = ({handleSubmit, handleNameChange, handlePhoneChange, newName, newPhone}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} placeholder="Person Name"/>
        </div>
        <div>
          phone: <input onChange={handlePhoneChange} value={newPhone} placeholder="Phone Number"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
};

export default PersonForm;