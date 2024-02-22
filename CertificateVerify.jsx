import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Certificate from "./Certificate";

const CertificateVerify = () => {
  const [searchEnrollmentNumber, setSearchEnrollmentNumber] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(searchEnrollmentNumber);
    if (searchEnrollmentNumber ==="") {
      alert("Please Enter your Enrollment Number")
    }
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
          required
        />
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <button className="btn btn-success" onClick={handleVerification}>
            Verify
          </button>
        )}

        {searchResult && (<Certificate searchResult={searchResult} />)}
      </div>
    </div>
  );
};

export default CertificateVerify;
