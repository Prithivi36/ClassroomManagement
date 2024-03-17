import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Navbar() {
  const {role}=useParams()
  const navigator=useNavigate()

  function logOut(){
    localStorage.removeItem('currentUser')
    navigator('/')
  }

  return (
    <>
    <div className="d-flex bg-dark px-3 justify-content-between">
      <h1 className='bg-dark ps-2 d-inline text-light py-2 text-center'>{role}</h1>
      <div className="align-items-center d-flex">
        <button onClick={logOut} className="btn btn-light">Logout</button>
      </div>
    </div>
    </>
  )
}

export default Navbar