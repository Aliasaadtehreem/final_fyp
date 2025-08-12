import React, { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Frontend/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePatientLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/patients/login', { email, password });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <div className="log">

        {/* Family Member Card */}
        <Card className="box1" style={{ width: '15rem', height: '7rem' }}>
          <Card.Body>
            <Card.Title className='p'>Family Member</Card.Title>
            <Button href="/logging" className='bw' variant="danger">Log In</Button>
          </Card.Body>
        </Card>

        {/* Patient Card */}
        <Card className="box1" style={{ width: '15rem', height: 'auto', padding: '10px' }}>
          <Card.Body>
            <Card.Title className='f'>Patient</Card.Title>
            
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="form-control mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={handlePatientLogin} className='bw' variant="danger">Log In</Button>
          </Card.Body>
        </Card>

      </div>

      <br /><br /><br /><br /><br />
      <Footer />
    </>
  );
};

export default Login;
