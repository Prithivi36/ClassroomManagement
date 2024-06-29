import React from 'react';
import { Carousel } from 'react-bootstrap'; // Ensure react-bootstrap is installed
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Vclass.png';
import Vite from '../../../public/vite.svg'


// Image imports for each feature
import ContactImage from './Contact.png';
import MessagingImage from './Message.png';
import LeaveRequestImage from './Request.png';
import AttendanceImage from './Attendance.png';
import SkillsImage from './Skills.png';
import SecurityImage from './Security.png';
import AbsentTrackingImage from './Tracking.svg';
import ApprovalImage from './Approval.svg';
import NotificationImage from './notification.svg';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigator=useNavigate()
  return (
    <div className="d-flex bg-black text-light flex-column align-items-center justidy-content-around" style={{ minHeight: '100vh' }}>
      <div className="my-2 py-1">
        <img src={Vite} alt="" />
        <h3 className=' ps-2 d-inline text-light fw-bolder py-2 text-center'>VCR</h3>
      </div>

      <div className="d-md-flex p-md-5 p-2 justify-content-around align-items-center justidy-content-around" style={{ minHeight: '60vh' }}>
        <div className="container">
          <img className="img-fluid" src={Image} alt="Virtual Classroom" />
          <p className='text-center'>LMS (Learning Management System)</p>
        </div>
        <div style={{ maxWidth: '900px' }} className="container bg-dark p-4 rounded-5">
          <h1 className="fw-bolder heading">Virtual Classroom</h1>
          <p className='fw-bolder'>Together in the Virtual World</p>
          <p className="description">
            Our Virtual Classroom project revolutionizes traditional student management systems by providing an extensive web-based platform. The platform is tailored to meet the intricate demands of academic environments, addressing challenges in student profile management, communication, and administrative tasks with efficiency, security, and user-centric design.
          </p>
          <button onClick={()=>navigator('/login/teachers')} className="btn btn-outline-primary me-4 mt-5">Login as Teacher</button>
          <button onClick={()=>navigator('/log')} className="btn btn-outline-success  mt-5">Login as Student</button>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Features</h2>
        <Carousel interval={3000} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={ContactImage} className="card-img-top" alt="Contact Feature" />
              <div className="card-body text-light">
                <h5 className="card-title">Instant Contact</h5>
                <p className="card-text">No need to save all student numbers or look into the database. Simply click to contact students or their parents.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={MessagingImage} className="card-img-top" alt="Messaging Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Seamless Communication</h5>
                <p className="card-text">Mail or message students through Gmail and WhatsApp without saving or searching for their IDs.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={LeaveRequestImage} className="card-img-top" alt="Leave Request Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Leave and OD Requests</h5>
                <p className="card-text">Students can request leave or on-duty status and track real-time updates.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={AttendanceImage} className="card-img-top" alt="Attendance Tracking Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Attendance Tracking</h5>
                <p className="card-text">Students can keep track of their absences and on-duty logs through the platform.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={SkillsImage} className="card-img-top" alt="Skills Specification Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Skills Specification</h5>
                <p className="card-text">Students can specify their skills to be identified by teachers for various activities.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={SecurityImage} className="card-img-top" alt="Security Measures Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Security Measures</h5>
                <p className="card-text">Ensuring students can only view their profiles, while teachers have access to all profiles.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={AbsentTrackingImage} className="card-img-top" alt="Absent Tracking Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Absent Tracking</h5>
                <p className="card-text">Teachers and representatives can mark absences and track them according to requisitions.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={ApprovalImage} className="card-img-top" alt="Approval Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Request Management</h5>
                <p className="card-text">Teachers can approve, hold, or remove leave or OD requests efficiently.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex p-3 align-items-center justidy-content-around shadow-sm bg-dark rounded-5">
              <img src={NotificationImage} className="card-img-top" alt="Notification Feature" />
              <div className="card-body text-light mt-5 mt-md-0">
                <h5 className="card-title">Parent Notifications</h5>
                <p className="card-text">Teachers can send notifications to all parents with a single click for the absentee list.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Landing;
