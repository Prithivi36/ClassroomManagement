import React from 'react'
import { loginStudent } from '../../Api/StudentApi'

function AdminRedirect() {
    const [user,setUser]=React.useState({
        username:'',
        password:''
      })
    
      function handleChange(event){
        const {name,value}=event.target
        setUser((prev)=>{
          return({...prev,[name]:value})
        })
      }
      function handleSubmit(){
        loginStudent(user,'admin')
      }
    
      return (
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
          <div className="card px-3 py-4">
            <h1 className="text-center my-3 fw-bolder">Admin Login</h1>
            <label htmlFor="name" className='fw-medium'>ID :</label>
            <input placeholder='Admin name' name='username' onChange={handleChange} id='name' className='form-control' type="text" />
            <label htmlFor="password" className='fw-medium mt-4'>Password</label>
            <input placeholder='Admin Password' name='password' onChange={handleChange} id='password' className='form-control'  type="password" />
    
    
            <button onClick={handleSubmit} className='btn btn-primary mt-4'>Login</button>
          </div>
        </div>
      )
}

export default AdminRedirect