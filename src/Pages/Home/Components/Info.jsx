import React from 'react'
import Prithivi from '../Images/Profile.png'
import RegularInfoTable from './Table/RegularInfoTable'
import SkillsModal from './Modals/SkillsModal'
import AchievementsModal from './Modals/AchievementsModal'
import { getStudent } from '../../../Api/StudentApi'
import { useParams } from 'react-router-dom'

function Info() {
  const [selectedStudent,setSelectedStudent]=React.useState({})
    const {id}=useParams()
  React.useEffect(
      ()=>{
          getStudent(id).then(
              res=>setSelectedStudent(res.data)
          )
      }
      ,[]
  )
  return (
    <div>
      <div className="container mt-4 d-lg-flex justify-content-between">
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <img src={Prithivi} className='img-fluid w-50 rounded-circle bg-warning ' />
          <div className="card p-2 flex-row mt-3">
            
            <button data-bs-toggle='modal' data-bs-target='#skillsModal' className='btn rounded-circle btn-primary btn-sm'>
            <i className="bi bi-pencil"></i>
            </button>
            <SkillsModal skills={selectedStudent.studentSkills} />
            <AchievementsModal/>
          </div>
        </div>
        <div className="card mt-2 ms-2 p-4 justify-content-center ">
          <RegularInfoTable name={selectedStudent.studentName} branch={selectedStudent.branch}
            phone={selectedStudent.phone} mail={selectedStudent.mail}
          />
          <div className="card p-2 flex-row justify-content-around mt-3">
            <a target='_blank' href={`https://wa.me/+91${selectedStudent.phone}`} className="btn rounded-circle btn-success">
            <i className="bi bi-whatsapp"></i>
            </a>
            {selectedStudent.linkedin?<a href={selectedStudent.linkedin} className="btn rounded-circle btn-primary">
            <i className="bi bi-linkedin"></i>
            </a>:<a   className="btn rounded-circle btn-primary">
            <i className="bi bi-linkedin"></i>
            </a>
            }
            {selectedStudent.instagram?<a href={selectedStudent.instagram} className="btn rounded-circle btn-danger">
            <i className="bi bi-instagram"></i>
            </a>:<a className="btn rounded-circle btn-danger">
            <i className="bi bi-instagram"></i>
            </a>}
            <a href={`tel:+91${selectedStudent.phone}`} className="btn rounded-circle btn-danger">
            <i className="bi bi-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info