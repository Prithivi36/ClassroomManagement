import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loginStudent } from '../../Api/StudentApi'



function Login() {

 const [currentUser,setCurrentUser]=React.useState({
  userId:'',
  password:''
 })

 //formData
 function handleChange(event){
  const{name,value}=event.target
  setCurrentUser((prev)=>{
    return(
      {...prev,[name]:value}
    )
  })
 }

 const {role}=useParams()
 const [nav,setnav]=React.useState(false)
 function handleSubmit(){
    loginStudent(currentUser,role)
    localStorage.setItem('currentUser',currentUser.username)
    
 }


  //front end Role defenitions
  function toggleNav(){
    setnav(!nav)
  }

 //utils
 const navigator=useNavigate()

    return (
    <>
    {
      //Navigation
    }
    <button onClick={toggleNav} className="btn btn-dark rounded-circle m-3">
    <i className="bi bi-three-dots-vertical"></i>
    </button>
    {nav?<div className=" d-flex text-dark">
        <div onClick={()=>navigator('/login/teachers')} className=" ms-3 d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-people-fill"></i>
          <p>Faculty</p>
        </div>
        <div  onClick={()=>navigator('/classroom')}  className=" ms-3 d-flex flex-column justify-content-center align-items-center">
        <i className="bi bi-hospital-fill"></i>
          <p>Classroom</p>
        </div>
        <div onClick={()=>navigator('/credentials')} className=" ms-3 d-flex flex-column justify-content-center align-items-center">
        <i className="bi bi-calendar-check-fill"></i>
          <p>Attendance</p>
        </div>
        <div onClick={()=>navigator('/credentials')} className=" ms-3 d-flex flex-column justify-content-center align-items-center">
        <i className="bi bi-mortarboard-fill"></i>
          <p>Rep</p>
        </div>
    </div>:''}

    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className="card px-3 py-4">
        <h1 className="text-center my-3 fw-bolder">{role==='teachers'?'Teacher Login':'Student Login'}</h1>
        <label htmlFor="name" className='fw-medium'>{role==='teachers'?'Teacher ID':'Student Reg. No'}</label>
        <input name='username' onChange={handleChange} id='name' className='form-control' type="text" />
        <label htmlFor="password" className='fw-medium mt-4'>Password</label>
        <input name='password' onChange={handleChange} id='password' className='form-control'  type="password" />

        <p style={{cursor:'pointer'}} onClick={()=>navigator('/register')} className='text-primary fw-light mt-3'>New here?, Click to register</p>

        <button onClick={handleSubmit} className='btn btn-primary mt-4'>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login