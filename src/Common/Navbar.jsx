import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Navbar(props) {
  const navigator=useNavigate()

  function logOut(){
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    navigator('/')
  }




  return (
    <>
    {props.getUser?<div className="d-flex bg-dark px-3 justify-content-between">
      <h3 className='bg-dark ps-2 d-inline text-light fw-bolder py-2 text-center'>VCR</h3>
      <div className="align-items-center d-flex">
        <button onClick={logOut} className="btn btn-sm btn-light">Logout</button>
      </div>
    </div>:''}
    </>
  )
}

export default Navbar