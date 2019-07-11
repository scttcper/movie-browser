import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Settings: React.FC = () => {
  return (
    <>
      <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Navbar.Brand>Settings</Navbar.Brand>
        </div>
      </Navbar>
      <main className="container mt-4">
        <div>Hello</div>
      </main>
    </>
  );
};

export default Settings;
