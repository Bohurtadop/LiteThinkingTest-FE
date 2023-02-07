import './Login.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/companies');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mb-5'>
          Welcome, please log in:
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </Form.Group>
          <Button type="submit" variant="success">Log in</Button>
        </Form >
      </header >
    </div >
  );
}

export default LogIn;
