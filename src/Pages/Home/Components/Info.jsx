import React from 'react'
import Prithivi from '../Images/Profile.png'
import RegularInfoTable from './Table/RegularInfoTable'
import SkillsModal from './Modals/SkillsModal'
import AchievementsModal from './Modals/AchievementsModal'

function Info() {
  return (
    <div>
        <div className="container mt-4 d-md-flex justify-content-between">
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <img src={Prithivi} className='img-fluid w-50 rounded-circle bg-warning ' />
              <div className="card p-2 flex-row mt-3">
                <button data-bs-toggle='modal' data-bs-target='#achievements' className='btn rounded-circle me-2 btn-primary btn-sm'>
                <i className="bi bi-trophy"></i>
                </button>
                <button data-bs-toggle='modal' data-bs-target='#skillsModal' className='btn rounded-circle btn-primary btn-sm'>
                <i className="bi bi-pencil"></i>
                </button>
                <SkillsModal />
                <AchievementsModal/>
              </div>
            </div>
            <div className="card ms-2 p-4 justify-content-center ">
                <RegularInfoTable />
                <div className="card p-2 flex-row justify-content-around mt-3">
                  <button className="btn rounded-circle btn-success">
                  <i className="bi bi-whatsapp"></i>
                  </button>
                  <button className="btn rounded-circle btn-primary">
                  <i className="bi bi-linkedin"></i>
                  </button>
                  <button className="btn rounded-circle btn-danger">
                  <i className="bi bi-instagram"></i>
                  </button>
                  <button className="btn rounded-circle btn-danger">
                  <i className="bi bi-phone"></i>
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info