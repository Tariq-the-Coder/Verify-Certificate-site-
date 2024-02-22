import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const AdminPanel = () => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    fatherName: "",
    enrollmentNumber: "",
    course: "",
    grade:"",
    date:""
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    message:"",
    variant:"",
    value:false
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // const handleImageChange = (e) => {
  //   setStudentData({ ...studentData, image: e.target.files[0] });
  // };


  const handleSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();
    console.log(studentData)

    try {
      const response = await axios.post("http://localhost:2000/studentdata", studentData)
      setAlert({
        message: response.data,
        variant:"success",
        value:true
      })
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
      setAlert({
        message: error.response.data,
        variant:"danger",
        value:true
      })
    }
    setLoading(false)
    setStudentData({
      studentName: "",
      fatherName: "",
      enrollmentNumber: "",
      course: "",
      grade:"",
      date:""
    })
  };



  return (
    <div className="container">
    {alert.value && 
    <Alert variant={alert.variant} onClose={()=>{setAlert({value:false})}} dismissible>
      <Alert.Heading>{alert.message}</Alert.Heading>
    </Alert>
    }
      <div>
        <h1>Upload Data</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            name="studentName"
            value={studentData.studentName}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter Student Name"
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFatherName">
          <Form.Label>Father's Name</Form.Label>
          <Form.Control
            type="text"
            name="fatherName"
            value={studentData.fatherName}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter Father's Name"
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEnrollment">
          <Form.Label>Enrollment Number</Form.Label>
          <Form.Control
            type="text"
            name="enrollmentNumber"
            value={studentData.enrollmentNumber}
            onChange={handleChange}
            placeholder="Enter Enrollment Number"
            required={true}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="CourseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            as="select"
            type="text"
            name="course"
            value={studentData.course}
            onChange={handleChange}
            placeholder="Enter Course Name"
            required={true}
          >
          <option value="">Select a Course</option>
          <option value="Computer Basic">Computer Basic</option>
          <option value="Typing">TYPING</option>
          <option value="Internet">Internet</option>
          <option value="Photoshop">Photoshop</option>
          <option value="Audio Video Editing">Audio Video Editing</option>
          <option value="HTML CSS JSP">HTML CSS JavaScript</option>
          <option value="C Programming">C Programming</option>
          <option value="C++ Programming">C++ Programming</option>
          <option value="Visual Basic Programming">Visual Basic Programming</option>
          <option value="Oracle(SQL/PLSQL)">Oracle(SQL/PLSQL)</option>
          <option value="Inpage Urdu">Inpage Urdu</option>
          <option value="Punjabi Typing">Punjabi Typing</option>
          <option value="Computer Hardware">Computer Hardware</option>
          <option value="Office Automation">Office Automation</option>
          <option value="Accounting in Tally">Accounting in Tally</option>
          <option value="Certificate in Computer Application (CCA)">Certificate in Computer Application (CCA)</option>
          <option value="Diploma in Computer Application (DCA)">Diploma in Computer Application (DCA)</option>
          <option value="Diploma in Computer Hardware & Networking">Diploma in Computer Hardware & Networking</option>
          <option value="Diploma in Finance Accounting Tally & Busy (DFA)">Diploma in Finance Accounting Tally & Busy (DFA)</option>
          <option value="MS OFFICE - WORD, EXCEL, POWERPOINT, ACCESS, ETC.">MS OFFICE - WORD, EXCEL, POWERPOINT, ACCESS, ETC.</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            as="select"
            type="text"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
            placeholder="Enter Grade"
            required={true}
          >
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Date">
          <Form.Label>Date of issue</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={studentData.date}
            onChange={handleChange}
            required={true}
            dateFormat="dd/MM/yyyy"
          />
        </Form.Group>

        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Button variant="primary" type="submit">
          Submit
        </Button>
        )}
        
      </Form>
    </div>
  );
};

export default AdminPanel;
