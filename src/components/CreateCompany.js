import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import './Companies.css';

function CreateCompany(props) {

  const [nit, setNit] = useState([]);
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);
  const [show, setShow] = useState([false]);
  const [position, setPosition] = useState('bottom-start');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/company', { name, address, nit, phone }).then((response) => {
      console.log(response.data);
    });
    setShow(true);
  }

  const handleNitChange = (e) => {
    setNit(e.target.value.trim());
  }
  const handleNameChange = (e) => {
    setName(e.target.value.trim());
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value.trim());
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value.trim());
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='mb-5'>
          Create company:
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNit">
            <Form.Label>Nit</Form.Label>
            <Form.Control type="text" placeholder="Nit" value={nit} onChange={handleNitChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Company name" value={name} onChange={handleNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Company address" value={address} onChange={handleAddressChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Company phone" value={phone} onChange={handlePhoneChange} />
          </Form.Group>
          <Button type="submit" variant="success">Create company</Button>
        </Form >
      </header >
      <ToastContainer className="p-3" position={position}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg='success'>
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Company created successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div >
  );
}

export default CreateCompany;
