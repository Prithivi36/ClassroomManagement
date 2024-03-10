import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {
  const [thisWidth,setWidth]=React.useState(window.innerWidth)
  const {role}=useParams()
  const [nav,setnav]=React.useState(false)

  React.useEffect(
    
    ()=>{window.addEventListener("resize",
    ()=>setWidth(window.innerWidth))}
    ,[])

 function toggleNav(){
  setnav(!nav)
 }

 const navigator=useNavigate()

    return (
    <>
    <button onClick={toggleNav} className="btn btn-dark rounded-circle m-3">
    <i className="bi bi-three-dots-vertical"></i>
    </button>
    {nav?<div className=" d-flex text-dark">
        <div onClick={()=>navigator('/login/teachers')} className=" ms-3 d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-people-fill"></i>
          <p>Faculty</p>
        </div>
        <div  onClick={()=>navigator('/classroom')}  className=" ms-3 d-flex flex-column justify-content-center align-items-center">
        <i class="bi bi-hospital-fill"></i>
          <p>Classroom</p>
        </div>
        <div className=" ms-3 d-flex flex-column justify-content-center align-items-center">
        <i class="bi bi-calendar-check-fill"></i>
          <p>Absent</p>
        </div>
    </div>:''}


    <div style={thisWidth>400?{height:'100vh'}:{marginTop:'100px'}} className='d-flex justify-content-center align-items-center'>
      <div className="card px-3 py-4">
        <h1 className="text-center my-3 fw-bolder">{role==='teachers'?'Teacher Login':'Student Login'}</h1>
        <label htmlFor="name" className='fw-medium'>{role==='teachers'?'Teacher ID':'Student Reg. No'}</label>
        <input id='name' className='form-control' type="text" />
        <label htmlFor="password" className='fw-medium mt-4'>Password</label>
        <input id='password' className='form-control'  type="text" />

        <button onClick={role==='teachers'?()=>navigator('/teacher/1'):()=>navigator('/student/1')} className='btn btn-primary mt-4'>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login