import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const createUser = () => {
    setUsers([...users, { activeStep: 0 }]);
  };

  const nextStep = (userIndex) => {
    const updatedUsers = [...users];
    const activeStep = updatedUsers[userIndex].activeStep + 1;
    updatedUsers[userIndex].activeStep = activeStep;
    setUsers(updatedUsers);
  };
  const backStep = (userIndex) => {
    const updatedUsers = [...users];
    const activeStep = updatedUsers[userIndex].activeStep - 1;
    updatedUsers[userIndex].activeStep = activeStep >= 0 ? activeStep : 0;
    setUsers(updatedUsers);
  };
  

  return (
    <div className="App">
      <h1>Click the button to create multiple users</h1>
      <button onClick={createUser}>Create User</button>
      {users.map((user, userIndex) => (
        <div key={userIndex} className='user'>
          <p>User {userIndex + 1}</p>
          <div className='steps'>
            {Array.from({ length: 4 }, (_, stepIndex) => (
              <div
                key={stepIndex}
                className={`step ${user.activeStep === stepIndex ? 'active' : ''}`}
                onClick={() => {
                  const updatedUsers = [...users];
                  updatedUsers[userIndex].activeStep = stepIndex;
                  setUsers(updatedUsers);
                }}
              >
                <button>Step {stepIndex + 1}</button>
              </div>
            ))}
          </div>
          <button className="btn" onClick={() => nextStep(userIndex)}
           disabled={user.activeStep === 3}>Next</button>
           <button className="btn" onClick={() => backStep(userIndex)} 
           disabled={user.activeStep === 0}>back</button>
        </div>
      ))}
    </div>
  );
}

export default App;
