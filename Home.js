import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/computer-center.jpg";
import img2 from "./images/certificate.jpg";
import img3 from "./images/courses.jpg";
import img4 from "./images/education.jpg";

const Home = () => {
  const [courseName, setCourseName] = useState([
    "Computer Basic",
    "Accounting in Tally",
    "Internet",
    "Photoshop",
    "Audio Video Editing",
    "Punjabi Typing",
    "Inpage Urdu",
    "Dekstop Publishing",
    "Computer Hardware",
    "Visual Basic Programming",
    "HTML CSS JavaScript",
    "C Programming",
    "C++ Programming",
    "Python Programming",
    "Oracle(SQL/PLSQL)",
    "Certificate in Computer Application (CCA)",
    "Diploma in Computer Application (DCA)",
    "Diploma in Computer Hardware & Networking",
    "Diploma in Finance Accounting Tally & Busy (DFA)",
    "MS OFFICE - WORD, EXCEL, POWERPOINT, ACCESS, ETC."
  ]);
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block "
            src={img1}
            alt="First slide"
            style={{ width: "30%" }}
          />
          <Carousel.Caption>
            <h5>Ahmadiyya Center for Computer Education (Qadian)</h5>
            <p>
              Fully Air Conditioned Lab. Free Internet Facility Advanced courses
              at nominal Fee.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={img2}
            alt="Second slide"
            style={{ width: "30%" }}
          />
          <Carousel.Caption>
            <h5>Get a Certificate</h5>
            <p>You will get a Certificate after completing a course.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img3}
            alt="Third slide"
            style={{ width: "30%" }}
          />
          <Carousel.Caption>
            <h5>Courses</h5>
            <p>Here are various courses you can opt according to your need.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*  */}

      <section className="my-5 mt-5" id="courses">
        <div class="text-center">
          <h1 class="main-heading">Our Courses</h1>
        </div>

        <div class="container my-5 ">
          <div class="row text-center " style={{ display: "flex" }}>
            {courseName.map((item) => {
              return <div className="course-box">{item}</div>;
            })}
          </div>
        </div>
      </section>

      <section className="my-5 mt-5" id="">
        <div class="text-center">
          <h1 class="main-heading">Our Features</h1>
        </div>

        <div class="container my-5 features-container">
          <ul>
            <li>Spacious Building</li>
            <li>Fully Air Conditioned Lab</li>
            <li>Advanced Computer system for every Student</li>
            <li>Free Internet Facility</li>
          </ul>
          <ul>
            <li>Advanced Courses at Very low Fees</li>
            <li>Get a Certificate</li>
            <li>Friendly Enviroment</li>
            <li>Library for Computer Books</li>
          </ul>
        </div>
      </section>

      <section className="my-5 mt-5" id="">
        <div class="text-center">
          <h1 class="main-heading">Our Objectives</h1>
        </div>

        <div class="container my-5 objective-container">
          <div className="img-box2">
            <img src={img4} alt="" />
          </div>
          <div>
            <h4>Educate the Youngster</h4>
            <p>
              The main objective was to educate our young generation with the
              knowledge of information and technology and to inspire to use
              their skills in the progress of day to day life. So the
              organisation dosen't have any commercial purpose at all but it
              intends to bring forward our youth to take part for the progress
              of the nation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
