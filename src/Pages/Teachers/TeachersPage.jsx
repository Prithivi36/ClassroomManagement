import React from 'react'
import Prithivi from '../Home/Images/Profile.png'
import ClassRoomModal from './Modals/ClassRoomModal'
import ReqModal from './Modals/ReqModal'
import ConcMark from './Modals/ConcMark'
import MetaInfoCard from './Components/MetaInfoCard'

function Teachers() {
  return (
    
  <div className="d-sm-flex justify-content-around">

    <div className="card flex-row justify-content-around px-4 m-4 py-5">
          <div className="">
              <h2 className='fw-bolder'> Logged in as Mr.Jhon</h2>
              <p>Department of Physics</p>
              <button data-bs-toggle='modal' data-bs-target='#addMat' className="btn btn-primary d-block mb-2">+Add to ClassRoom</button>
              <ClassRoomModal/>
              <button data-bs-toggle='modal' data-bs-target='#reqCheck' className="btn btn-success d-block mb-2">Check Requests</button>
              <ReqModal />
              <button data-bs-toggle='modal' data-bs-target='#markConc' className="btn btn-danger d-block mb-2">+ Mark Concerns</button>
              <ConcMark />
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