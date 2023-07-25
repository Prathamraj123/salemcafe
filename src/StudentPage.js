import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
    
console.log("HEllo");
alert("student page");
  const navigate = useNavigate();
  const students = ["John", "Jane", "Alice"]; // Your array of students

  const navigateToApp = () => {
    navigate('/faculty', { state: { students: students } });
  };

  return (
    <div>
      <h2>Student Page</h2>
      <button onClick={navigateToApp}>Go to App</button>
    </div>
  );
};

export default StudentPage;
