import React from 'react'
import '../index.css'
import Vite from '../../public/vite.svg'
import { useParams,useNavigate } from 'react-router-dom'

function Navbar(props) {
  const navigator=useNavigate()

  function logOut(){
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    navigator('/')
    setTimeout(location.reload(),15000)
  }




  return (
    <>
    {props.getUser?<div className="nav-menu d-flex bg-dark px-3 justify-content-between">
      <div className="my-2 py-1">

        <img src={Vite} alt="" />
        <h3 className='bg-dark ps-2 d-inline text-light fw-bolder py-2 text-center'>VCR</h3>
      </div>
      <div className="align-items-center d-flex">
        <button onClick={logOut} className="btn btn-sm btn-light">Logout</button>
      </div>
    </div>:''}
    </>
  )
}

export default Navbar