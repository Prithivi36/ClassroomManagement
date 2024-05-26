import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loginStudent } from '../../Api/StudentApi'
import vite from '../../../public/vite.svg'


function Login() {

 const [currentUser,setCurrentUser]=React.useState({
  userId:'',
  password:''
 })

 const {role}=useParams()
 const [nav,setnav]=React.useState(false)
//utils
const navigator=useNavigate()

React.useEffect(
  ()=>{
    const userFound = JSON.parse(localStorage.getItem('currentUser'))
    userFound?navigator('/'+userFound.roleInfo+'/'+userFound.username):''
  }
)

 function handleSubmit(){
    loginStudent(currentUser,role)

 }
 //formData
 function handleChange(event){
  const{name,value}=event.target
  setCurrentUser((prev)=>{
    return(
      {...prev,[name]:value}
    )
  })
 }

  //front end Role defenitions
  function toggleNav(){
    setnav(!nav)
  }



    return (
    <>
    {
      //Navigation
    }
    

    <div style={{height:'100vh',position:'relative'}} className='d-flex justify-content-center align-items-center'>
      <div style={{position:'absolute',top:'0',left:'0'}} className="">
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
      </div>
      <div  className="card  shadow-lg p-md-5 px-3 py-4">
        <div className="d-flex align-items-center justify-content-center">
          <img src={vite} alt="" />
          <h3 className="text-center ms-2 my-3 fw-bolder">VCR</h3>
        </div>
        <h5 className='fw-bolder my-3'>{role==='teachers'?'Teacher login':'Student login'}</h5>
        <label htmlFor="name" className='fw-medium'>{role==='teachers'?'Teacher ID':'Student Reg. No'}</label>
        <input placeholder='Enter Register number' name='username' onChange={handleChange} id='name' className='form-control' type="text" />
        <label htmlFor="password" className='fw-medium mt-4'>Password</label>
        <input placeholder='Enter password'  name='password' onChange={handleChange} id='password' className='form-control'  type="password" />

        {role==='teachers'?'':
          <p style={{cursor:'pointer'}} onClick={()=>navigator('/register')} className='text-primary fw-light mt-3'>New here?, Click to register</p>}

        <button  onClick={handleSubmit} className='btn btn-primary mt-4'>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login