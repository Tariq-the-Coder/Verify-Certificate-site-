import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"
import Alert from 'react-bootstrap/Alert';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({
    message:"",
    variant:"",
    value:false
  });

  const handleRegister = async(e) => {

    e.preventDefault();
        if (password !== confirmPassword) {
            setAlert({
                message: "Password and confirm password are not matching",
                variant:"danger",
                value:true
              })
        } else {
            try {
                const response = await axios.post("http://localhost:2000/register", {name, email, password})
                console.log(response)
                setAlert({
                    message: response.data,
                    variant:"success",
                    value:true
                  })
            } catch (error) {
                console.log(error)
                setAlert({
                    message: error.response.data,
                    variant:"danger",
                    value:true
                  })
            }
        }
  };

  return (
    <Container className="LoginContainer">
    {alert.value && 
    <Alert variant={alert.variant} onClose={()=>{setAlert({value:false})}} dismissible>
      <Alert.Heading>{alert.message}</Alert.Heading>
    </Alert>
    }
      <h2>Create Account</h2>
      <Form onSubmit={handleRegister} className="w-50">
        <Form.Group controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
        </Form.Group>

        <Form.Group controlId="formBasicemail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </Form.Group>
        
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required={true}
          />
        </Form.Group>
        <Form.Group controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="confirmpassword"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required={true}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-primary" variant="Primary">
          Register
        </Button>
        <div>
          <div>
            Already have an account? <Link to={"/Login"}>Login</Link>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
