import React from 'react'
import Prithivi from '../Home/Images/Profile.png'
import ClassRoomModal from './Modals/ClassRoomModal'
import ConcMark from './Modals/ConcMark'
import MetaInfoCard from './Components/MetaInfoCard'
import { useNavigate, useParams } from 'react-router-dom'
import RepMark from './Modals/RepMark'

function Teachers() {
  const navigator=useNavigate()
  const {id}=useParams()
  return (
    
  <div className="d-sm-flex justify-content-around">

    <div className="card flex-row justify-content-around px-4 m-4 py-5">
          <div className="">
              <h2 className='fw-bolder'> Logged in as {id}</h2>
              <p>Faculty login</p>
              <button data-bs-toggle='modal' data-bs-target='#addMat' className="btn btn-primary d-block mb-2">+Add to ClassRoom</button>
              <ClassRoomModal/>
              <button onClick={()=>navigator('/allRequests')} className="btn btn-success d-block mb-2">Check Requests</button>
              
              <button data-bs-toggle='modal' data-bs-target='#markConc' className="btn btn-danger d-block mb-2">+ Mark Concerns</button>
              <ConcMark />
              <button data-bs-toggle='modal' data-bs-target='#markRep' className="btn btn-warning d-block mb-2">+ Assign Rep</button>
              <RepMark />
              <button className='btn btn-dark d-block mb-2' onClick={()=>navigator('/absent')}>Attendance</button>
              <button onClick={()=>navigator('/reset')} className="btn btn-secondary rounded-5 d-block mb-2">Reset Password</button>
          </div>
          <img style={{width:'130px',height:'130px'}} className='img-fluid' src={Prithivi} alt="" />
      </div>
      <div className="container mt-3 g-4">
        <MetaInfoCard />
      </div>
  </div>

  )
}

export default Teachers