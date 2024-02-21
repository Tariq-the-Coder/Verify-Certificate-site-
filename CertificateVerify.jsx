import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const CertificateVerify = () => {
  const [searchEnrollmentNumber, setSearchEnrollmentNumber] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(searchEnrollmentNumber);
    try {
      const response = await axios.get(
        `http://localhost:2000/search?enrollmentNumber=${searchEnrollmentNumber}`
      );
      setSearchResult(response.data);

      console.log(searchResult);
    } catch (error) {
      console.log("error is " + error);
    }
    setLoading(false);
  };

  return (
    <div className="CertificateVerify-container">
      <h1 className="text-center" >Certificate Verification</h1>

      <div className="mt-5 text-center">
        <input
          className="w-50 input-group-text m-lg-auto mb-lg-3"
          type="text"
          value={searchEnrollmentNumber}
          onChange={(e) => setSearchEnrollmentNumber(e.target.value)}
          placeholder="Enter Enrollment Number"
        />
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <button className="btn btn-success" onClick={handleVerification}>
            Verify
          </button>
        )}

        {searchResult && (
          <Card className="mt-5">
          <Card.Body>
          <h2 className="mb-5">
          Search Result
          </h2>
            <h5 className="mb-4" > Name: {searchResult.studentName}</h5>
            <h5 className="mb-4">Father's Name:{searchResult.fatherName}</h5>
            <h5 className="mb-2">Enrollment Number:{searchResult.enrollmentNumber}</h5>
            <h5 className="mb-2">Coruse:{searchResult.course}</h5>
            <h5 className="mb-2">Grade:{searchResult.grade}</h5>
            <h5 className="mb-2">Date:{searchResult.date}</h5>
          </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CertificateVerify;
