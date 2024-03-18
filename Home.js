import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/computer-center.jpg";
import img2 from "./images/certificate.jpg";
import img3 from "./images/courses.jpg";
import img4 from "./images/education.jpg";
import img5 from "./images/acced2.jpg";

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
      <Carousel className="carousel-box" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block "
            src={img1}
            alt="First slide"
            style={{ width: "30%" }}
          />
          <Carousel.Caption>
            <h4>Ahmadiyya Center for Computer Education (Qadian)</h4>
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
            <h4>Get a Certificate</h4>
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
            <h4>Courses</h4>
            <p>Here are various courses you can opt according to your need.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*  */}

      <section className="my-5 mt-5" id="courses">
        <div class="text-center">
          <h2 class="main-heading">Our Courses</h2>
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
          <h2 class="main-heading">Our Features</h2>
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
          <h2 class="main-heading">Our Objectives</h2>
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

      <section className="my-5 mt-5" id="">
        <div class="text-center">
          <h2 class="main-heading">About Us</h2>
        </div>

        <div class="container my-5 aboutus-box ">
          <div>
            <h4>Ahmadiyya Center for Computer Education (ACCEd)</h4>
            <p>(ISO Affiliated Center and NSIC Approved Computer Courses)</p>
            <p>
              Ahmadiyya Center for Computer Education has been providing the
              best Computer Courses in Qadian for more than 16 years. These
              courses are offered to students from 5th to postgraduate level to
              help youngsters find employment in India and Abroad. Call@01872222900
            </p>
          </div>
        <div className="img-box2">
          <img src={img5} alt="" />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
