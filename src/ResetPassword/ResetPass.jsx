import React from 'react'
import vite from '../../public/vite.svg'
import { resetPassword } from '../Api/StudentApi'
import { useNavigate } from 'react-router-dom'

function ResetPass() {
    const [user,setUser]=React.useState({
        username:'',
        password:'',
        reEnterpass:''
      })
    
      const navigator=useNavigate()
    
      function handleChange(event){
        const {name,value}=event.target
        setUser((prev)=>{
          return({...prev,[name]:value})
        })
      }
      function handleSubmit(){
        if(user.password!==''&&user.password===user.reEnterpass ){
            resetPassword(user).then(
                res=>{
                    alert(res.data)
                    localStorage.removeItem('currentUser')
                    navigator('/')
                }
            ).catch(
                err=>{
                    alert(err.response.data.message||"You are Not Authorized")
                }
            )
        }else{
            alert("Password Does Not Match")
        }
      }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className="card px-3 py-4">
      <div className="d-flex align-items-center justify-content-center">
          <img src={vite} alt="" />
          <h2 className="text-center ms-2 my-3 fw-bolder">VCR</h2>
        </div>
        <h3 className="text-center my-3 fw-bolder">Reset Password</h3>
        <label htmlFor="name" className='fw-medium'>User ID :</label>
        <input placeholder="User name" name='username' onChange={handleChange} id='name' className='form-control' type="text" />
        <label htmlFor="password" className='fw-medium mt-4'>New Password</label>
        <input placeholder='Password' name='password' onChange={handleChange} id='password' className='form-control'  type="password" />
        <label htmlFor="re-password" className='fw-medium mt-4'>Re-Enter New Password</label>
        <input placeholder='Re-enter password' name='reEnterpass' onChange={handleChange} id='re-password' className='form-control'  type="password" />


        <button onClick={handleSubmit} className='btn btn-primary mt-4'>Reset</button>
      </div>
    </div>
  )
}

export default ResetPass