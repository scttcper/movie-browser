import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Status: React.FC = () => {
  return (
    <>
      <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Navbar.Brand>Status</Navbar.Brand>
        </div>
      </Navbar>
      <main className="container mt-4">
        <div>Hello</div>
      </main>
    </>
  );
};

export default Status;
