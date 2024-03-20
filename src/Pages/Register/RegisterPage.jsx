import React from 'react'
import { sendStudent } from '../../Api/StudentApi'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const navigator=useNavigate()

    const [student,setStudent]=React.useState({
        regNo: '',
        studentName: '',
        branch: '',
        phone: '',
        mail: '',
        linkedin: '',
        instagram: '',
        fatherNumber: '',
        motherNumber: '',
        bloodGroup: '',
        cgpa: '',
        studentConcern: '',
        password: ''
      })

      function handleChange(event){
        const {name,value}=event.target
        setStudent((prev)=>{
            return({...prev,[name]:value})
        })
      }

      function handelSubmit(){
        sendStudent(student).then(res=>{
            console.log(res.data)
        })

        navigator('/')
      }
      console.log(student)
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className="card p-5">
            <h3 className="fw-bolder">Student Details</h3>

            <div className="d-flex mt-3">
                <div className="form-group me-5">
                    <label className="fw-bolder" htmlFor="regNo">Registration Number</label>
                    <input onChange={handleChange} name='regNo' type="number" className="form-control" id="regNo" placeholder="Enter Registration Number" />
                </div>
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="studentName">Student Name</label>
                    <input onChange={handleChange}  name='studentName' type="text" className="form-control" id="studentName" placeholder="Enter Student Name" />
                </div>
            </div>
            <div className="d-flex mt-3">
                <div className="form-group me-5">
                    <label className="fw-bolder" htmlFor="phone">Phone</label>
                    <input onChange={handleChange}  name='phone' type="number" className="form-control" id="phone" placeholder="Enter Phone Number" />
                </div>
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="mail">Mail</label>
                    <input onChange={handleChange}  name='mail' type="email" className="form-control" id="mail" placeholder="Enter Email Address" />
                </div>
            </div>
            <div className=" mt-3">
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="branch">Branch</label>
                    <input onChange={handleChange}  name='branch' type="text" className="form-control" id="branch" placeholder="Enter Branch" />
                </div>
            </div>
            <div className="d-flex mt-3">
                <div className="form-group me-5">
                    <label className="fw-bolder" htmlFor="linkedin">LinkedIn <span className='fw-light'> optional</span></label>
                    <input onChange={handleChange}  name='linkedin' type="text" className="form-control" id="linkedin" placeholder="Enter LinkedIn URL" />
                </div>
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="instagram">Instagram <span className='fw-light'> optional</span></label>
                    <input onChange={handleChange}  name='instagram' type="text" className="form-control" id="instagram" placeholder="Enter Instagram Username" />
                </div>
            </div>
            <div className=" mt-3">
                <div className="form-group mt-3">
                    <label className="fw-bolder" htmlFor="fatherNumber">Father's Number</label>
                    <input onChange={handleChange}  name='fatherNumber' type="number" className="form-control" id="fatherNumber" placeholder="Enter Father's Number" />
                </div>
                <div className="form-group mt-3">
                    <label className="fw-bolder" htmlFor="motherNumber">Mother's Number</label>
                    <input onChange={handleChange}  name='motherNumber' type="number" className="form-control" id="motherNumber" placeholder="Enter Mother's Number" />
                </div>
                <div className="form-group mt-3">
                    <label className="fw-bolder" htmlFor="bloodGroup">Blood Group</label>
                    <input onChange={handleChange}  name='bloodGroup' type="text" className="form-control" id="bloodGroup" placeholder="Enter Blood Group" />
                </div>
                <div className="form-group mt-3">
                    <label className="fw-bolder" htmlFor="cgpa">CGPA</label>
                    <input onChange={handleChange}  name='cgpa' type="number" className="form-control" id="cgpa" placeholder="Enter CGPA" />
                </div>
                <div className="form-group mt-3">
                    <label className="fw-bolder" htmlFor="studentConcern">Student Concern</label>
                    <input onChange={handleChange}  name='studentConcern' type="number" className="form-control" id="studentConcern" placeholder="Enter Student Concern" />
                </div>
                <div className="form-group mt-3">
                    <label className="fw-bolder" htmlFor="password">Password</label>
                    <input onChange={handleChange}  name='password' type="password" className="form-control" id="password" placeholder="Enter Password" />
                </div>
            </div>
            <button onClick={handelSubmit} className="btn btn-primary mt-5">Register</button>
        </div>
    </div>
  )
}

export default RegisterPage