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
        studentConcern: 0,
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
        <div className="card my-3 mx-3 mx-md-0 p-5">
            <h1 className="fw-bolder text-center mb-5">Student Details</h1>

            <h6 className='text-success fw-bolder'>Student Info : </h6>
            <div className="d-md-flex ">
                <div className="form-group me-md-5">
                    <label className="fw-bolder" htmlFor="regNo">Registration Number</label>
                    <input onChange={handleChange} name='regNo' type="number" className="form-control" id="regNo" placeholder="Enter Registration Number" />
                </div>
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="studentName">Student Name</label>
                    <input onChange={handleChange}  name='studentName' type="text" className="form-control" id="studentName" placeholder="Enter Student Name" />
                </div>
            </div>
            <div className=" mt-3">
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="branch">Branch</label>
                    <select onChange={handleChange}  name='branch' type="text" className="form-control" id="branch">
                        <option value="">Select Branch</option>
                        <option value="B.Tech Artificial Intelligence and Data Science">B.Tech Artificial Intelligence and Data Science</option>
                    </select>
                </div>
            </div>
            <h6 className='text-success fw-bolder mt-4'>Contact Info : </h6>
            <div className="d-md-flex ">
                <div className="form-group me-md-5">
                    <label className="fw-bolder" htmlFor="phone">Phone</label>
                    <input onChange={handleChange}  name='phone' type="number" className="form-control" id="phone" placeholder="Enter Phone Number" />
                </div>
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="mail">Mail</label>
                    <input onChange={handleChange}  name='mail' type="email" className="form-control" id="mail" placeholder="Enter Email Address" />
                </div>
            </div>

            <div className="d-md-flex mt-3">
                <div className="form-group me-md-5">
                    <label className="fw-bolder" htmlFor="linkedin">LinkedIn <span className='fw-light'> optional</span></label>
                    <input onChange={handleChange}  name='linkedin' type="text" className="form-control" id="linkedin" placeholder="Enter LinkedIn URL" />
                </div>
                <div className="form-group">
                    <label className="fw-bolder" htmlFor="instagram">Instagram <span className='fw-light'> optional</span></label>
                    <input onChange={handleChange}  name='instagram' type="text" className="form-control" id="instagram" placeholder="Enter Instagram Username" />
                </div>
            </div>

            <h6 className='text-success fw-bolder mt-4'>Personal Info : </h6>

            <div className=" ">
                <div className="form-group ">
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