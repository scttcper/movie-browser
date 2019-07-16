import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import AppLayout from '../../components/AppLayout';

const AddMovie: React.FC = () => {
  return (
    <AppLayout>
      <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Navbar.Brand href="#home">Add Movie</Navbar.Brand>
        </div>
      </Navbar>
      <main className="container mt-4">
        <div className="row">
          <div className="col-12">

          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default AddMovie;
