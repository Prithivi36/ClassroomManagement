import React from 'react'
import {  registerteacher } from '../../Api/StudentApi'
import { useNavigate } from 'react-router-dom'
import vite from '../../../public/vite.svg'

function Admin() {
    const [user,setUser]=React.useState({
        username:'',
        password:''
      })
      const navigator=useNavigate()
      function handleChange(event){
        const {name,value}=event.target
        setUser((prev)=>{
          return({...prev,[name]:value})
        })
      }
      function handleSubmit(){
        registerteacher(user).then(res=>{navigator('/')}).catch(err=>{alert('You are not admin'),navigator('/')})

      }
    
      return (
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
          <div className="card px-3 py-4">
          <div className="d-flex align-items-center justify-content-center">
            <img src={vite} alt="" />
            <h3 className="text-center ms-2 my-3 fw-bolder">VCR</h3>
          </div>
            <h1 className="text-center my-3 fw-bolder">Genarate User</h1>
            <label htmlFor="name" className='fw-medium'>ID :</label>
            <input placeholder='Teacher Id ?' name='username' onChange={handleChange} id='name' className='form-control' type="text" />
            <label htmlFor="password" className='fw-medium mt-4'>Password</label>
            <input placeholder='Tecaher Password ?' name='password' onChange={handleChange} id='password' className='form-control'  type="password" />
    
    
            <button onClick={handleSubmit} className='btn btn-primary mt-4'>Login</button>
          </div>
        </div>
      )
}

export default Admin